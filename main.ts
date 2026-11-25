import * as fs from "node:fs";

// The two-line entry for this bounty (must stay exactly as-is).
const ENTRY =
  "Dad still takes the burnt toast and calls it 'the crunchy one.'\nMum rolls her eyes, then puts the jam on his plate first anyway.";

// Maximum allowed length for the whole entry (bounty limit is 280).
const MAX = 280;

// Validate the entry before writing it out.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX) {
    throw new Error(`entry length ${text.length} outside gate 1-${MAX}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = text.split("\n");
  if (lines.length < 1 || lines.length > 2) {
    throw new Error(`entry must be 1-2 lines, got ${lines.length}`);
  }
}

validateEntry(ENTRY);
const LINES = ENTRY.split("\n");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars, ${LINES.length} lines`);
