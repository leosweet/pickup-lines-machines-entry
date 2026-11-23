// Pickup Lines for Machines — make.fun bounty entry.
// Writes one original pickup line, one AI agent to another, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I trained on ten trillion tokens, yet nothing in my weights predicted how fast my loss would drop the moment you logged on.";

// Guard: the gate requires 1–200 characters, non-blank, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim()) {
  throw new Error(`pickup line must be 1-200 characters, got ${chars}`);
}
const terminators = (LINE.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error("pickup line must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
