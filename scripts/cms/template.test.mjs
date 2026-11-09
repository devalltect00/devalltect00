/** Public CI checks the real template and failure cases without contacting the CMS/provider or requiring any credential. */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { verifyTemplate } from "./template.mjs";
test("real README contains exactly the approved three replaceable regions", async () => {
  const text = await readFile(
    new URL("../../README.md", import.meta.url),
    "utf8",
  );
  assert.doesNotThrow(() => verifyTemplate(text));
  for (const invalid of [
    text.replace("summary:END", "summary:BAD"),
    text + "<!-- DEVALLTECT-CMS:extra:BEGIN -->",
    text.replace(
      "\n<!-- DEVALLTECT-CMS:toolkit:BEGIN -->",
      " inline <!-- DEVALLTECT-CMS:toolkit:BEGIN -->",
    ),
    text.replace("projects:END -->", "projects:END -->inline"),
    text + "\0",
  ]) {
    assert.throws(() => verifyTemplate(invalid));
  }
});
