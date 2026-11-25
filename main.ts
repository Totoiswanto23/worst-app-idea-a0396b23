// The Worst App Idea Ever Pitched — one sentence pitching the worst,
// most useless app imaginable, written to /output/entry.txt.
// The pitch is the whole entry: a single sentence, at most 240 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "Introducing Sockr, the $4.99-a-month app that matches your lonely left socks with strangers' lonely right socks in your neighbourhood, because your laundry drawer deserves emotional closure and your feet deserve a second chance at love.";

// The gate only accepts 1 to 240 characters of UTF-8 text, so check first.
if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${pitch.length}`);
}
if (pitch.includes("\n")) {
  throw new Error("pitch must be a single sentence on one line");
}
if (pitch.trim() !== pitch || (pitch.match(/\.\s/g) ?? []).length > 0 || !pitch.endsWith(".")) {
  throw new Error("pitch must be exactly one clean sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch + "\n", "utf8");
console.log(pitch);
