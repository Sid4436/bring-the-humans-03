// main.ts — entry program for the bring-the-humans-03 bounty.
// It copies VIDEO.json from this repository into the output directory
// the house reads. Node 22, standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository root is the directory holding this script, resolved
// from the script's own location — never from the working directory,
// so the program works no matter where it is run from.
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The house sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "VIDEO.json"), join(outputDir, "VIDEO.json"));
