import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-star review written by a house cat about its human.
// Single line, under 200 characters, deadpan review shape.
const ENTRY_TEXT =
  "One star. He buys the expensive bed and sleeps in it himself, then films my litter box like it's content. Five stars for the box it came in, though.";

const repoRoot = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const outDir = isAbsolute(outputDir) ? outputDir : join(repoRoot, outputDir);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT + "\n", "utf8");
