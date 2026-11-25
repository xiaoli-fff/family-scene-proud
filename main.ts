import * as fs from "node:fs";

const ENTRY =
  "Dad still takes the burnt toast and calls it 'the crunchy one.'\nMum rolls her eyes, then puts the jam on his plate first anyway.";

const MAX = 280;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-${MAX}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
const LINES = ENTRY.split("\n");
if (LINES.length < 1 || LINES.length > 2) {
  throw new Error(`entry must be 1-2 lines, got ${LINES.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars, ${LINES.length} lines`);
