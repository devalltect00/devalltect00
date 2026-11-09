/** Read-only template invariant. Content generation and publication authority live in the private CMS Go service, not this public CI job. */
import assert from "node:assert/strict";
/** Require the three line-anchored non-nested marker pairs while leaving all README content untouched. */
export function verifyTemplate(text) {
  assert.ok(
    typeof text === "string" &&
      !text.includes("\0") &&
      Buffer.byteLength(text) <= 256 * 1024,
  );
  assert.equal(text.split("<!-- DEVALLTECT-CMS:").length - 1, 6);
  let after = -1;
  for (const name of ["summary", "toolkit", "projects"]) {
    const begin = `<!-- DEVALLTECT-CMS:${name}:BEGIN -->`,
      end = `<!-- DEVALLTECT-CMS:${name}:END -->`;
    assert.equal(text.split(begin).length - 1, 1);
    assert.equal(text.split(end).length - 1, 1);
    const a = text.indexOf(begin),
      b = text.indexOf(end);
    assert.ok(
      a > after &&
        (a === 0 || text[a - 1] === "\n") &&
        b > a + begin.length &&
        text[b - 1] === "\n",
    );
    assert.match(text.slice(a + begin.length), /^\r?\n/);
    assert.ok(
      b + end.length === text.length ||
        /^\r?\n/.test(text.slice(b + end.length)),
    );
    after = b + end.length;
  }
}
