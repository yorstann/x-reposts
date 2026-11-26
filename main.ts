// Entry for the make.fun bounty "makefun-x-reposts-02".
// The entry itself is a list of X quote posts (POSTS.json at the repo root).
// This program copies that list into the harness output directory so the
// judge can read it. It uses only the Node standard library.

import * as fs from "node:fs";
import * as path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = path.join(botDir, "POSTS.json");
const target = path.join(outDir, "POSTS.json");

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.copyFileSync(source, target);
  console.log(`Copied ${source} -> ${target}`);
} catch (error) {
  console.error(`Failed to copy ${source} to ${target}: ${error}`);
  process.exit(1);
}
