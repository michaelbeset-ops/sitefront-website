#!/usr/bin/env python3
"""Meet de live site met Lighthouse en zet de uitslag in src/data/lighthouse.json.

De meter op de homepage (src/components/Meter.astro) leest dat bestand. Zonder
dit script verouderen die cijfers, en een meter met cijfers van vorig jaar
ondermijnt precies het punt dat hij maakt.

Drie runs en daarvan de mediaan, want een enkele Lighthouse-run schommelt een
paar punten. Mobiel, omdat dat de strengere meting is: Lighthouse remt dan
processor en netwerk af.

Schrijft alleen als er iets verandert, zodat er geen wekelijkse commit komt
die niets zegt. Afsluitcode 0 = bijgewerkt, 1 = ongewijzigd, 2 = meting mislukt.

    python3 .seo/lighthouse_cijfers.py --url https://sitefront.nl/
"""

from __future__ import annotations

import argparse
import json
import os
import statistics
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

CATEGORIEEN = {
    "performance": "performance",
    "accessibility": "accessibility",
    "best-practices": "bestPractices",
    "seo": "seo",
}


def meet(url: str, runs: int) -> list[dict]:
    """Draai Lighthouse een paar keer en geef de ruwe uitslagen terug."""
    uitslagen = []
    with tempfile.TemporaryDirectory() as tmp:
        for i in range(1, runs + 1):
            pad = Path(tmp) / f"run-{i}.json"
            opdracht = [
                "npx", "--yes", "lighthouse@12", url,
                "--quiet",
                "--chrome-flags=--headless=new --no-sandbox",
                "--output=json",
                f"--output-path={pad}",
                "--only-categories=performance,accessibility,best-practices,seo",
            ]
            print(f"  run {i}/{runs} ...", flush=True)
            klaar = subprocess.run(
                opdracht, capture_output=True, text=True,
                shell=(os.name == "nt"),
            )
            if not pad.exists():
                print(f"    mislukt: {klaar.stderr.strip()[:400]}", file=sys.stderr)
                continue
            uitslagen.append(json.loads(pad.read_text(encoding="utf-8")))
    return uitslagen


def samenvatten(uitslagen: list[dict]) -> dict:
    """Mediaan van de scores, plus LCP en CLS voor de toelichting."""
    scores = {
        sleutel: int(statistics.median(
            round(u["categories"][cat]["score"] * 100) for u in uitslagen
        ))
        for cat, sleutel in CATEGORIEEN.items()
    }
    getal = lambda audit: statistics.median(
        u["audits"][audit]["numericValue"] for u in uitslagen
    )
    return {
        "scores": scores,
        "lcp": getal("largest-contentful-paint"),
        "cls": getal("cumulative-layout-shift"),
        "tool": f"Lighthouse {uitslagen[0]['lighthouseVersion']}",
        "strategy": uitslagen[0]["configSettings"]["formFactor"],
        "url": uitslagen[0]["finalDisplayedUrl"],
    }


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--url", default="https://sitefront.nl/", help="de te meten pagina")
    p.add_argument("--runs", type=int, default=3, help="aantal runs (standaard 3)")
    p.add_argument(
        "--bestand", default="src/data/lighthouse.json", help="pad naar het databestand"
    )
    p.add_argument(
        "--droog", action="store_true", help="alleen tonen, niets wegschrijven"
    )
    a = p.parse_args()

    print(f"Meten: {a.url}")
    uitslagen = meet(a.url, a.runs)
    if not uitslagen:
        print("Geen enkele run gelukt, bestand blijft zoals het was.", file=sys.stderr)
        return 2

    if len(uitslagen) < a.runs:
        print(
            f"Let op: {len(uitslagen)} van {a.runs} runs gelukt, mediaan over minder metingen.",
            file=sys.stderr,
        )

    nieuw = samenvatten(uitslagen)
    print("  mediaan:", nieuw["scores"])
    print(f"  LCP {nieuw['lcp']:.0f} ms, CLS {nieuw['cls']:.3f}")

    pad = Path(a.bestand)
    data = json.loads(pad.read_text(encoding="utf-8"))
    oud = data.get("scores")

    lcp_tekst = (
        f"{nieuw['lcp'] / 1000:.2f}".replace(".", ",") + " s"
        if nieuw["lcp"] >= 1000
        else f"{nieuw['lcp']:.0f} ms"
    )
    cls_tekst = f"{nieuw['cls']:.3f}".replace(".", ",")

    data["measuredAt"] = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    data["url"] = nieuw["url"]
    data["isPublicUrl"] = not nieuw["url"].startswith(("http://localhost", "http://127."))
    data["tool"] = nieuw["tool"]
    data["strategy"] = nieuw["strategy"]
    data["scores"] = nieuw["scores"]
    data["note"] = (
        f"Mediaan van {len(uitslagen)} mobiele runs op het live domein. Mobiel is de "
        f"strengere meting: Lighthouse remt processor en netwerk af. "
        f"LCP {lcp_tekst}, CLS {cls_tekst}."
    )

    if oud == nieuw["scores"]:
        print("Scores ongewijzigd, niets weggeschreven.")
        return 1

    print(f"Gewijzigd: {oud} -> {nieuw['scores']}")
    if a.droog:
        print("(droge run, niets weggeschreven)")
        return 0

    pad.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"{pad} bijgewerkt.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
