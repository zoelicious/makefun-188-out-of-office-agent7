import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

// The inbox is in brave hands now; expect replies with extra confidence.
const text = "Away until next week. My email is being read by a very confident intern. Good luck to us both.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve(scriptDir, "/output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
