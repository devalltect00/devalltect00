# Approved CMS profile content

This profile preserves the authored banner, navigation, activity/stats, contribution
snake, contact area and all text outside three explicit marker pairs. Initial
adoption added only marker lines: it did not replace the current content.

`summary`, `toolkit` and `projects` between `DEVALLTECT-CMS:<name>:BEGIN/END` are
owned by the private Devalltect CMS Go generator (`devalltect-profile-v1`). Edit
their data in the CMS and review its release. Never remove/duplicate/nest markers
or treat a public release comment as publishing permission.

The Go projection uses the explicit **github** project selection/order, literal
skill assessments and public professional summary. It escapes all text and links,
keeps this provider's repository links, and actively clears removed/empty content.
Experience, academic detail, media galleries and long-form documentation remain
in the portfolio/docs rather than duplicating them in this concise profile.

Owner publication is an explicitly confirmed CMS action to the reviewed public
repository's `main/README.md`. A server-side private token file is required; no
credential belongs here. A conditional provider revision protects concurrent edits.
Only a fresh exact-file readback records destination success. An uncertain result
must use the same observed attempt's GET-only reconciliation, never a blind resend.
Template errors stop publication without guessing the intended authored region.

For an offline preview, run `cms profile-preview --package PUBLIC_PACKAGE.json
--release UUID --sequence N --digest SNAPSHOT_SHA256 --channel github
--readme README.md --out NEW_PREVIEW.md` from a terminal with the CMS binary.
All flags belong on one command line. This command loads no database/settings,
performs no network request and creates only a new preview file. Its release pins
are independently selected operator input, not approval or completion authority.

Read-only CI: `node --test scripts/cms/template.test.mjs`. Existing activity/snake
automation remains separate. This change does not configure tokens, create a Git
commit, push, deploy or activate hosted CMS publishing.

The private CMS developer guide `docs/development/profile-publishing.md` documents the exact API, migration 37, permissions, uncertainty and retained-history limits. Credentials and publishing are disabled by default; public CI remains read-only.

Local acceptance (9 November 2026): compiled initial/update/empty previews passed against this real template, source-preservation checks passed, and private SQL/HTTP/UI acceptance passed. No live token, provider write, hosted commit or rollout was exercised. The native two-page diagram is in `docs/diagrams/profile-publishing.drawio`.
