// Entry program for the make.fun gta6-meme-x-01 bounty.
// The real entry is the X post; this program's single job is to hand the
// grader a copy of POST.json, which names that post. It reads POST.json
// from the bot directory and writes it into the output directory.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

if (!existsSync(source)) {
  console.error('POST.json is missing from ' + botDir);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('POST.json delivered to ' + target);
