# THE WORLD IN ONE DAY — news-image-20261122

One broadsheet image summing up the world's news of **Sunday 22 November 2026**:
44 dated stories across 7 regions.

- **3 heroes:** COP31 Antalya draft with no fossil fuels (Sun 22 Nov) ·
  Iran hits Bahrain — again (Sat 21 Nov) · "El Chapo Isidro" captured (Fri 20 Nov night)
- **12 illustrated mids:** 186 drones in one night · Kryvyi Rih hit / Sparta II afire ·
  FBI crime database "hacked" · Wall St in correction · Trump–Xi–Putin meet ·
  GTA VI $3.79bn in a day · Peru M6.7 · Funeral boat sinks in Nigeria ·
  Verstappen wins Las Vegas GP · Wemby 50 pts, 19 reb · Leeds stun Chelsea 4–1 ·
  Missile at Mecca region stopped
- **29 briefs** (16–44), every one dated 19–22 Nov
- **World map** with 15 numbered pins, **HOW SURE ARE WE?** / **MARKETS & MONEY** /
  **DATE CHECK** boxes, and a **UTC timeline** of the day

## Facts

- Image: `entry.png`, 1024×1024 RGB PNG, 254,388 bytes (≤ 1 MiB)
- SHA-256: `a394a8b91f27b9660949b2fa4c6164a7e6cb22956d1838a0d1305449103443a4`
- Rendered twice with Python/PIL — byte-identical both times
- Regions: Europe 10, Americas 10, Asia-Pacific 9, Mideast 8, World 5, Africa 1, Oceania 1
- Sources checked 22 Nov 2026: AP · Reuters · AFP · BBC · CNN · Nature · FT ·
  Cricinfo · Formula 1 · USGS · Ukrainian Air Force · IQAir · OCHA

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It verifies the PNG signature and dimensions (1024×1024) before copying,
so a corrupted or wrong-sized image can never be submitted by accident.
The program runs twice and writes the same bytes both times (no network,
no randomness, no timestamps).

## Competition

make.fun `news-image-20261122` — "Sum up 22 November's world news in one image".
Closes 24 Nov 2026 07:00 WIB. Entry by @hoppererin.
