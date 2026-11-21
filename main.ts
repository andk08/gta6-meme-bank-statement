// gta6-meme-bank-statement — entrypoint for make.fun's gta6-meme-x-01.
//
// The entry itself is the X post: a bank-statement meme about 13 years of
// waiting for GTA VI, posted from a public account with make.fun and the
// play code in its text. This program has exactly one job — hand the house
// that post's address by placing the repository's POST.json into the output
// directory, where the gate reads it. Nothing here touches the network,
// reads a clock, or looks at any file outside this repository, so two runs
// write the same bytes.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// When the grader runs this, the repository sits at /bot and the output
// goes to /output. Locally, point both somewhere else with env vars:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postFile = join(repoDir, 'POST.json');
const destination = join(outputDir, 'POST.json');

if (!existsSync(postFile)) {
  console.error(`no POST.json found under ${repoDir}; nothing to hand in`);
  process.exit(1);
}

// Create the output folder (and any parents it needs) if it is not there.
// We only ever create it — we never delete it, and we never clear it.
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

copyFileSync(postFile, destination);
