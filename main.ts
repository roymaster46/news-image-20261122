// news-image-20261122 — "THE WORLD IN ONE DAY"
// Sunday 22 November 2026 in one broadsheet image: 44 dated stories
// (3 heroes + 12 illustrated mids + 29 briefs), a pinned world map,
// HOW SURE ARE WE? / MARKETS & MONEY / DATE CHECK boxes and a UTC timeline.
// The image was drawn with Python/PIL (see render.py in the dev folder)
// and is stored beside this file as entry.png (1024x1024 RGB, <= 1 MiB).
// This program (Node 22, standard library only) copies it to the
// output directory so the judge sees exactly those bytes.
//
// Run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);

// Verify the image before copying: PNG signature + IHDR dimensions must be
// exactly 1024x1024, so a corrupted or wrong-sized file can never be
// submitted by accident.
const bytes = readFileSync(src);
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error('entry.png is not a PNG file');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
console.log(`wrote entry.png (${width}x${height}, ${bytes.length} bytes) — THE WORLD IN ONE DAY, 44 dated stories, 22 Nov 2026`);
