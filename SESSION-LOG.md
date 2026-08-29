# Session Log

Append a dated entry after every working session — what changed, what was
decided and on whose authority, what was verified, and what's still open.
Standing rules and conventions belong in `CLAUDE.md` instead; this file is
history, not instruction.

---

### Template origin

This template was distilled from a finished study guide site (NUR 332,
Maternal-Newborn Nursing) built across roughly forty sessions and used by
much of that class. The architecture, content rules, and tooling in
`CLAUDE.md` all come from that project — each rule exists because breaking
it cost real work to undo.

The log of those sessions isn't carried over; it's about a course that isn't
yours. Your entries start below.

---

### 2026-08-18 — Course setup: NUR 334

Set this template up for the first real course.

- **Branding** (`site/assets/site.js`): `SITE.brand` → "NUR 334 · Med-Surg I",
  `SITE.course` → "Study Guide". User's request was "NUR334- Med Surg I Study
  Guide"; split into a big-text/subtitle pair following the template's
  existing pattern. Flag this split for confirmation next session if it
  doesn't read right.
- **`window.STORE_PREFIX`** → `"nur334"`, so exam scores/flashcard progress
  won't collide with any other study guide in the same browser.
- **Palette** (`site/assets/styles.css`): switched from the default Slate +
  Teal to **Indigo + Rose** (the original NUR 332 look) — user's choice from
  the four ready-made swatches. Both the light and dark `:root` blocks were
  swapped; nothing else touched.
- **Ran `node tools/version.js stamp`** — bumped `?v=` on 21 asset
  references across 7 pages to `20260818`.
- **Ran `node tools/verify.js`** — Tier 1 (syntax, question data, links,
  cache-bust) passed clean. **Tier 2 (jsdom render + exam-grading pass) did
  not run** — `npm install jsdom` failed in this cloud session with a 403
  from the npm registry (a sandbox network restriction, not a project
  problem). Since this session only touched branding/CSS and no question
  data, Tier 1 passing is sufficient for now — but **Tier 2 needs to run
  before real exam content ships**, since it's the check that proves answer
  indices are wired correctly. Next session: try `npm install jsdom` again
  (may have been transient), or run it from the user's own machine
  (`node .claude/serve.js` environment) where there's no sandbox
  restriction.

Lecture materials are staged on the user's machine under
`Fall 2026/NUR334/Week 1/VO transcripts/` (11 PDFs, corrected from an
earlier miscount of 13) and `Week 2/` (empty so far), sitting alongside the
template folder rather than inside it — fine where they are, nothing here
depends on their location.

---

### 2026-08-18 (same day, later) — First real topic page: Respiratory Labs & Diagnostics

Built the first real content page, replacing the template demo content in
Week 1.

- **Source:** two VO transcripts that are clearly one two-part lecture —
  `13167772_English (1).pdf` ("nursing implications for labs and diagnostic
  tests related to the respiratory system") and `13167843_English.pdf`
  ("moving on to more respiratory labs and diagnostics"), both in
  `Fall 2026/NUR334/Week 1/VO transcripts/`. Combined into one topic page
  since they're one continuous lecture split across two recordings, not two
  separate topics.
- **New page:** `site/week1-respiratory-labs-diagnostics.html` — pulse
  oximetry (incl. the instructor's bus/seats/passengers analogy as a
  MNEMONIC callout), sputum tests (C&S, cytology, AFB), imaging (CXR, CT,
  MRI, PET — contrast/renal-function/shellfish-myth notes), TB skin test
  vs. IGRA, bronchoscopy, four lung biopsy methods, thoracentesis, and PFTs
  (total lung capacity, FEV1, peak flow meter). 12 flashcards, exactly per
  rule 3.
- **Deliberate omission — ABG interpretation:** the lecture explicitly says
  ABG interpretation is "saved for block two" and only briefly mentions
  that ABGs are drawn arterially (by the respiratory therapist at UK). Per
  rule 1, the page reflects that — a plain note only, no ABG interpretation
  content added.
- **Nav/index/search wiring:** `SITE.groups` (Week 1) and `index.html`'s
  Week 1 tile now point at the real page instead of `topic-template.html`.
  `topic-template.html` itself is untouched and stays on disk — it's the
  reusable copy-this-file template, not content, so it's not deleted, just
  no longer linked from the nav or the home page.
- **Search index regenerated properly** — served the site locally
  (`node .claude/serve.js`) and drove `build-search-index.html` with a real
  headless Chromium (Playwright, already available in this environment),
  same as a human would via "Click Build, then Download," rather than
  regex-parsing the pages. **Finding, not a bug in this session's work:**
  running the unmodified extractor against the unmodified `must-know.html`
  demo page is *not* byte-identical to the `search-index.js` that shipped
  with the template — the live-rendered version picks up a trailing "▾"
  caret character on collapsible `h2.block` headings (added by `site.js`'s
  collapse-toggle UI) and, because of that, a few extra duplicate keywords
  in the page-head section. This means the template's shipped demo
  `search-index.js` was not actually generated by this tool as currently
  written — it was likely hand-authored, or generated before the collapse-
  caret feature existed. Not fixed here (out of scope, and the extractor
  itself wasn't touched) — flagging so a future session doesn't mistake it
  for new breakage. It's cosmetic: search still finds the right terms, just
  with a little harmless duplication.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean (still no jsdom in this sandbox, see above). Additionally
  spot-checked the new page's rendered DOM directly with headless Chromium
  (nav active-state, 12 flashcards, 6 tables each got exactly one eye
  button, the auto TOC matches the page's headings, no console errors, no
  broken images) since Tier 2 couldn't run.
- **Flagged for the user, not yet resolved:** the transcript mentions three
  on-screen visuals that weren't reproduced — (1) a diagram of the four
  lung biopsy methods, (2) a chest X-ray comparing a normal lung to one
  with a pleural effusion, (3) a picture of a patient set up for a PFT.
  Asked whether these exist in the slide deck and are worth adding; not
  answered yet as of this entry.

### 2026-08-18 (same day, still later) — Images added; user's local setup issue resolved

- **User sent 6 images** in response to the 3 flagged asks above. 5 matched
  and were added to `week1-respiratory-labs-diagnostics.html` behind
  lightbox pills: the bronchoscopy overview diagram, and all four lung
  biopsy methods (transbronchial, trans-thoracic needle aspiration, open,
  VATS). Resized/compressed with `sharp` (originals were 400&ndash;700KB
  PNGs; now 50&ndash;100KB JPGs) before adding to
  `site/images/respiratory-labs-diagnostics/`. Verified both lightboxes
  actually open and load their images via headless Chromium, not just that
  the markup exists.
- **The "lung x-ray" image was a mismatch** — it's actually a pacemaker/ICD
  lead-placement X-ray, not a pleural-effusion comparison. Not used. Flagged
  to the user rather than guessing/mislabeling it.
- **The PFT picture never actually arrived** — user described 7 images but
  only 6 files came through. Flagged; not chased further this session.
- **Unrelated user-side issue, resolved:** user reported the site "looks
  like typed papers." Verified from this session that the files on disk
  are correct (styles.css has the right palette, both pages link to it
  correctly) — the cause was that double-clicking `.html` files on her Mac
  opens them in a text editor instead of a browser (a file-association
  issue, not a site bug). Told her to right-click &rarr; Open With &rarr;
  her browser, and how to make that the default via "Always Open With."
  **Also clarified a misunderstanding:** she thought she needed to
  "download" files from the chat — she doesn't; this session writes
  directly into her actual project folder on her Mac via the device
  bridge, and the files shown in chat are just previews.

### 2026-08-18 (same day, later still) — Second real topic page: Upper Respiratory Problems

- **Source:** four short VO transcripts, all from the same tightly-
  clustered file-ID range as the labs/diagnostics pair (`13168020`,
  `13168021`, `13168022`, `13168024` — note `13168023` doesn't exist in the
  folder). Combined into one topic page, mirroring the labs/diagnostics
  decision: `13168020` (epistaxis) opens with "nursing care of the patient
  with upper respiratory problems" as an explicit umbrella statement, and
  the other three are short, related upper-airway topics recorded back to
  back in the same block.
  - `13168020_English.pdf` — Epistaxis (anterior vs. posterior nosebleed).
  - `13168021_English.pdf` — Obstructive Sleep Apnea / CPAP &amp; BiPAP.
  - `13168022_English.pdf` — Tracheostomy care (explicitly framed as a
    revisit of prior-semester content, not new — kept it that way).
  - `13168024_English.pdf` — Acute pharyngitis.
- **Judgment call, flagged for review:** `13168604` (head &amp; neck
  cancer) was *not* included in this page, despite also being upper-airway
  content. Its file ID jumps far ahead of this tight cluster (020&ndash;024
  vs. 604), suggesting a separate recording session, and it opens with no
  umbrella tie-in ("Let's talk about head and neck cancer") the way
  epistaxis explicitly had one. Treating it as its own topic page next,
  but this is a judgment call, not something stated outright in the
  lecture — revisit if it turns out to belong here instead.
- **New page:** `site/week1-upper-respiratory-problems.html` — epistaxis
  (anterior/posterior comparison cards, anticoagulant antidotes), OSA
  (risk factors, CPAP vs. BiPAP comparison), trach care revisit (Shiley vs.
  Jackson, the re-insertion steps), acute pharyngitis (viral vs. bacterial
  vs. fungal, rapid strep test, treatment by type). 12 flashcards.
- **Images:** asked about four candidates (nosebleed pinch-point,
  epistaxis balloon, OSA airway diagram, trach parts). User wanted the
  epistaxis balloon and OSA airway/oral-appliance diagram; skipped the
  pinch-point photo and trach diagram. Both added behind lightbox pills in
  `week1-upper-respiratory-problems.html`, resized/compressed with `sharp`
  (~130KB/100KB JPGs), lightboxes verified opening and loading via headless
  Chromium.
- **Nav/index/search wiring:** added to `SITE.groups` Week&nbsp;1, the
  home page tile, and `build-search-index.html`'s `PAGES` array; search
  index regenerated the same way as before (served locally, driven with
  headless Chromium against the real `build-search-index.html` tool) — 0
  bad anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean. DOM/console spot-check via headless Chromium: 12
  flashcards, 5 tables each with exactly one eye button, correct prev/next
  links, TOC matches headings, no console errors, no failed requests.

**Open:** ask about the images flagged for this page.

### 2026-08-18 (same day, later still) — Third topic page: Head & Neck Cancer

- **Resolved the placement question from the previous entry:** asked the
  user directly whether `13168604` belongs on the Upper Respiratory page
  or stands alone; she confirmed she'd just jumped ahead in her own notes
  and hadn't meant to skip it — it's its own topic page, as originally
  planned.
- **Source:** `13168604_English.pdf` only, in full this time (previously
  only page 1 had been read).
- **New page:** `site/week1-head-neck-cancer.html` — risk factors (85%
  tobacco, HPV link if &lt;50), surgical options, what changes after a
  laryngectomy (air only via the stoma now — a DANGER callout on bagging
  the stoma, not the mouth/nose, in a code), the three voice-restoration
  methods, and radical neck dissection post-op care. 12 flashcards.
- **One cross-reference added, not a violation of "one place":** the
  post-op note that blood-tinged sputum is an expected finding after a
  radical neck dissection links back to the same principle already taught
  on the Labs &amp; Diagnostics page (blood-tinged mucus after a
  bronchoscopy) — same underlying clinical principle recurring in a new
  procedural context, so cross-linked per the "genuine exception" carve-out
  in rule 2, not retaught.
- **Verified:** stamp + `node tools/verify.js` (Tier 1 clean, 46 refs
  across 10 pages, including the new cross-reference anchor resolving
  correctly) + DOM/console spot-check via headless Chromium (12
  flashcards, 3/3 tables got an eye button, TOC matches headings, correct
  prev/next, no errors).
- **Nav/index/search wiring:** same pattern as the previous two pages — 0
  bad anchors in the regenerated index (4 pages, 28 sections now).

**Images resolved same session:** user wanted 3 of the 4 candidates —
the head/neck anatomy diagram, the pre-op vs. post-laryngectomy airway
comparison (the one the instructor emphasized most), and a post-radical-
neck-dissection patient illustration (NG tube, incision, drain,
tracheotomy). Skipped the artificial larynx device photo. All three added
behind lightbox pills, resized/compressed with `sharp`, lightboxes
verified opening and loading via headless Chromium.

**Open:** continue Stage 1 through the remaining Week 1 transcripts
(pneumonia, COPD, TB, lung cancer — the user has confirmed these are
next, grouped as "Lower Respiratory") before touching Must Know / exam
banks (those wait for the Week 1 live lecture).

### 2026-08-18 (same day, later still) — Fourth topic page: Lower Respiratory Problems

- **Source:** four VO transcripts, all read in full — `13168605_English.pdf`
  (Pneumonia), `13168606_English.pdf` (COPD), `13168610_English.pdf`
  (Tuberculosis), `13168611_English.pdf` (Lung Cancer). User grouped these
  under "lower respiratory... pneumonia and tuberculosis and stuff" as one
  request, and the four diseases share no umbrella statement the way the
  labs/diagnostics or upper-respiratory transcripts did — but they're
  clearly meant as one page per the user's own framing, so built as one
  page with four major sections rather than four separate pages.
- **New page:** `site/week1-lower-respiratory-problems.html` —
  - **Pneumonia:** risk factors, CAP vs. HAP vs. VAP, types, aspiration/NG-
    tube risk, atypical presentation in the elderly (confusion, not fever),
    S&amp;S, a leukocytosis/leukopenia MNEMONIC callout (the instructor's own
    memory device for what each means and why), diagnostic findings, and
    prevention/nursing care.
  - **COPD:** emphysema vs. chronic bronchitis compared side by side,
    exam findings, nursing problems, interventions, drug classes, MDI vs.
    nebulizer, and a DANGER callout on CO2 narcosis — giving a COPD patient
    too much oxygen can suppress their drive to breathe, a true priority
    safety point, not just a fact worth knowing.
  - **Tuberculosis:** risk factors, primary/latent/active TB compared,
    induration reading and thresholds, the diagnosis pathway, drug side
    effects, directly observed therapy (DOT), and precautions/home care
    (including the negative-pressure room).
  - **Lung Cancer:** overview, lung-cancer-specific facts, nursing
    problems, surgical options, and post-pneumonectomy assessment. Per rule
    1, chemo/radiation mechanism-level detail was explicitly deferred by
    the instructor to the oncology unit — the page reflects that with a
    plain note, nothing filled in.
  - 12 flashcards, rebalanced across all four diseases (4/3/3/2) — the
    leukocytosis/leukopenia distinction and the CO2-narcosis safety point
    were prioritized as cards since both are exactly the kind of
    single-step, testable fact rule 3 calls for.
- **Two cross-references added, not new content (rule 2):** TB skin test
  injection technique (bleb, 48–72 hour reading) already lives on the Labs
  &amp; Diagnostics page's "TB Testing" section — this page's TB section
  links back to it (`#tb-testing`) rather than re-explaining it, and covers
  only what's new here (disease staging, drug side effects, precautions).
  Likewise, imaging/biopsy types for diagnosing lung cancer already live on
  that same page's "Imaging" section — linked (`#imaging`) rather than
  repeated. Both anchor slugs were confirmed to match the target page's
  actual `h2.block` text verbatim ("TB Testing" → `tb-testing`, "Imaging" →
  `imaging`) before shipping, and `verify.js`'s link checker confirmed both
  resolve (55 references across 11 pages, 0 broken).
- **Nav/index/search wiring:** added as item 4 in `SITE.groups` Week&nbsp;1
  (`site/assets/site.js`), a matching 4th home-page tile
  (`site/index.html`), and appended to `build-search-index.html`'s `PAGES`
  array. Search index regenerated the same way as every prior page (served
  locally, driven with real headless Chromium against
  `build-search-index.html`, not regex-parsed) — 5 pages, 34 sections, 0
  bad anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean. **Tier 2 still did not run** — `npm install jsdom` was
  attempted again this session and still gets a 403 from the npm registry;
  this is a standing sandbox limitation in this cloud environment, not
  something new or something the user needs to act on. DOM/console
  spot-check via headless Chromium in place of Tier 2: 12 flashcards, all
  10 tables got exactly one eye button, TOC matches the four disease
  headings, both cross-reference links present and correct, prev/next
  wired correctly (Head &amp; Neck Cancer → this page → Must Know), no
  console errors, no failed requests. No images added yet — this page has
  none behind lightboxes as of this entry.
- **Images not yet resolved:** scanned all four source transcripts for
  visual cues before calling the page done. Found three real candidates —
  the instructor showing an MDI next to a nebulizer (COPD), a chest X-ray
  of a pneumonectomy patient with one lung absent (Lung Cancer), and an
  illustration of a negative-pressure isolation room (TB) — plus one that
  actually belongs on a *different* page: what a TB skin test bleb looks
  like, which is part of the TB Testing section already living on the
  Labs &amp; Diagnostics page, not here. Asking the user about all four
  next, flagging the last one's correct destination page.

**Resolved same session:** user chose to skip all three image candidates
for this page (MDI/nebulizer, post-pneumonectomy X-ray, negative-pressure
room). No images added to `week1-lower-respiratory-problems.html`. The
fourth flagged item — the TB skin test bleb, which belongs on the Labs &amp;
Diagnostics page's "TB Testing" section, not here — was mentioned to her
but not yet asked as its own question; still open if she wants to revisit
it later.

**Open:** Week 1's pre-lecture (Stage 1) topic pages are now complete per
the transcripts identified so far (11 VO transcripts, all accounted for
across the four pages). Next real step is the Week 1 live lecture (Stage
2: Must Know entries, exam bank questions, Lecture Review page), which
waits for the user to hand over that transcript and hasn't been discussed
yet.

### 2026-08-18 (same day, later still) — First-time publishing walkthrough

- User asked how to share the site with other people. Walked her through
  "Walking a user through first-time publishing" from `CLAUDE.md`: created
  a free GitHub account, a new public repo
  (`https://github.com/NurseRoyalty/nur334-study-guide.git`, no README), and
  a fine-grained personal access token scoped to just that repo with
  Contents: Read and write.
- **Wrote `deploy.local.json`** at the project root with her repo URL and
  token, then ran `node tools/deploy.js` per the documented automated path.
- **Finding — this cloud sandbox cannot reach github.com:** the push failed
  with `remote: request blocked: no rule allows host "github.com"` (a 403
  from this session's own network policy, not a GitHub-side or credential
  problem — the token and repo config are both valid). Same category of
  environment limitation as the jsdom npm-registry 403 noted earlier in
  this log: not fixable from inside this session. `tools/deploy.js` itself
  is untouched and should work fine if ever run somewhere with real network
  access — e.g. from the user's own Terminal on her Mac, where
  `deploy.local.json` is now saved and ready, if she ever wants to try that
  route with guidance.
- **Fell back to the manual path** per `CLAUDE.md` ("Manual (fallback
  only)"): walking her through GitHub's web uploader instead — drag the
  *contents* of `site/` (not the `site` folder itself) into the repo's
  "uploading an existing file" page, commit, then enable Pages (Settings →
  Pages → Deploy from a branch → `main` → `/ (root)`).
- **`deploy.local.json` was sent to and saved on her machine** (project
  root, not inside `site/`) per "Setting this up for someone" in
  `CLAUDE.md`, in case automated deploys become usable later (her own
  Terminal, or a future session with different network access). Per
  `CLAUDE.md`, this file and any future `site/.git` are tied to her GitHub
  account specifically and must be deleted before this folder is ever
  handed to someone else or reused for another course.

**Open:** confirm the manual upload + Pages steps finish and the live
`https://nurseroyalty.github.io/nur334-study-guide/` link actually loads
before calling this done.

### 2026-08-19 — Week 2 begins: first page, Hematology Labs & Diagnostics

- **Week 2 started.** User is working ahead of her actual class schedule —
  no lecture has happened yet, she's pre-loading Week 2 VO transcripts as
  they're released. Confirmed the site's Stage 1 workflow applies exactly
  the same way for a future week as it did for Week 1.
- **File location changed from Week 1's pattern:** Week 2's 8 transcripts
  landed in `lecture-materials/Fall 2026/NUR334/Week 2/` (no `VO
  transcripts` subfolder this time, and nested under `lecture-materials/`
  rather than at the project root the way Week 1's `Fall 2026/NUR334/`
  folder was). Both are fine locations per `CLAUDE.md` — content under
  `lecture-materials/` is never deployed either way — but flagging the
  inconsistency in case it's confusing when looking for Week 3's files
  later, or worth standardizing on her end.
- **Topic grouping set by the user, confirmed before building:** she wants
  Week 2's 8 files grouped into 4 topic pages rather than 8 — (1)
  Hematology Labs & Dx + Hematologic Problems (RBCs), (2) Anemias +
  Nursing Care of the Anemic Patient + Polycythemia, (3) the two Blood
  Component files (nursing implications + transfusion reactions), (4)
  Central Venous Catheters standalone. Confirmed this reading with her
  before starting; she agreed. Recorded here since it determines page
  boundaries for the rest of the week.
- **Source:** `Wk2-hematology labs and dx.pdf` and `wk2- hematologic
  problems (RBC's).pdf`, both read in full. The two transcripts overlap
  heavily on purpose — the instructor explicitly repeats the CBC/RBC/WBC
  material "because I don't think repetition is always a bad thing" — so
  content was merged into one coherent page rather than shown twice.
- **New page:** `site/week2-hematology-labs-diagnostics.html` — the CBC and
  WBC/platelet terminology (leukopenia, leukocytosis, neutropenia,
  thrombocytopenia, "shift to the left," the Never Let Monkeys Eat Bananas
  differential mnemonic), RBC morphology (MCV/MCHC, the bus analogy
  mnemonic extended from H&H to RBC size/color), hemoglobin & hematocrit
  normal ranges and the "trend it, don't read it standalone" case example,
  false-high/false-low hematocrit, iron studies (ferritin vs. transferrin
  mnemonic), the rest of the anemia diagnostic workup (intrinsic factor
  antibody/pernicious anemia, Coombs direct vs. indirect, guaiac/frank
  blood/melena, bone marrow biopsy, EGD/colonoscopy), anemia's three
  etiologic categories (decreased production, blood loss, increased
  destruction), and severity grading with the pathophysiology behind each
  symptom (including a DANGER callout on the findings that can turn
  life-threatening, and a mnemonic callout on CO = HR × SV / BP as an
  indirect measure of cardiac output, since the instructor flagged it as
  something that "comes up repeatedly all semester"). 12 flashcards.
- **Judgment call, not yet a rule 2 conflict — flagging for the next
  page:** this page briefly defines polycythemia (too many RBCs, in the
  false-high-hematocrit discussion) but doesn't teach it — the instructor
  herself said "we will talk about that when we get to some of the other
  voiceovers." The full disease content belongs on the upcoming Anemias /
  Polycythemia page (section 2 of this week). When that page is built,
  check whether it needs to link back here for the base definition rather
  than restate it, the same way Head & Neck Cancer cross-referenced
  Respiratory Labs & Diagnostics.
- **Nav/index/search wiring:** added a new **Week 2** group to
  `SITE.groups` in `site/assets/site.js` (this is the first page in it —
  previously there was only a comment placeholder for "Week 2, Week 3...").
  Added a matching Week 2 row to `site/index.html`'s home page. Appended to
  `build-search-index.html`'s `PAGES` array. Search index regenerated the
  same way as every page this project — 6 pages, 43 sections, 0 bad
  anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean, 59 references across 12 pages, 0 broken links. Tier 2 still
  not run (jsdom still blocked in this sandbox, unchanged from every prior
  entry). DOM/console spot-check via headless Chromium: 12 flashcards, all
  8 tables got exactly one eye button, TOC matches the 7 content headings,
  prev/next wired correctly (Lower Respiratory Problems → this page → Must
  Know), the new Week 2 nav entry renders, the home page's new Week 2 row
  shows the correct tile, no console errors, no failed requests.
- **Images:** not yet discussed for this page — the transcripts mentioned
  a few things shown on screen (e.g. RBC morphology comparison images,
  a picture of a centrifuged blood tube, a typical bone-marrow-biopsy
  positioning picture) that are worth scanning for and asking about, same
  as every prior page. Not done yet as of this entry.

**Resolved same session — images added:** user sent 4 images from the
actual slide deck. 3 were added behind lightbox pills:
`wbc-types-mnemonic.jpg` (five WBC types + Never Let Monkeys Eat Bananas +
normal differential percentages, in "The CBC" section),
`bone-marrow-biopsy-position.jpg` (patient positioning at the iliac crest,
in "Other Anemia Diagnostics"), and `causes-of-anemia.jpg` (the three
etiologic categories, in "Anemia — Classification by Cause"). All three
resized/compressed with `sharp`, lightboxes verified opening and loading
via headless Chromium.
- **The 4th image was not used** — an "Anemia" morphology comparison
  graphic (normal/microcytic/macrocytic/hypochromic) that turned out to be
  a Shutterstock stock photo with a visible tiled watermark and an
  "IMAGE ID / www.shutterstock.com" footer bar across it, not original
  slide content. Using a watermarked, seemingly-unlicensed stock image on
  a site that gets pushed to a public GitHub Pages URL is both a
  copyright/licensing risk and would look unprofessional with the
  watermark showing. Skipped rather than used as-is; flagged to the user
  in case she has the clean, non-watermarked original from the actual
  slide deck to send instead.
- **Also clarified with the user:** she separately mentioned a jugular CVC
  image and a blood salvage system diagram — those belong on later Week 2
  pages (Central Venous Catheters, and the Blood Component section
  respectively), not this one. Held onto that context; not acted on yet
  since those pages don't exist yet.
- **Re-verified after adding images:** stamp + `node tools/verify.js` —
  Tier 1 clean, 62 references across 12 pages, 0 broken links. Search
  index regenerated (image captions/alt text are intentionally excluded
  from the index the same way they are on every other page — figures live
  inside `.fig-store`, which the extractor skips by design).

**Open:** move to Week 2 section 2 (Anemias + Nursing Care of the Anemic
Patient + Polycythemia) whenever the user's ready. If she sends a clean
version of the RBC morphology comparison image, add it to this page's
"RBC Morphology" section at that point.

**Pre-staged for a future page:** user sent 2 more images ahead of when
they'll actually be used — `cvc-internal-jugular.jpg` and
`cvc-subclavian.jpg`, both labeled anatomy diagrams for central venous
catheter placement. These belong on the not-yet-built **Central Venous
Catheters** page (Week 2, section 4), not the current page. Resized/
compressed with `sharp` and saved to
`site/images/central-venous-catheters/` now so they're not lost between
sessions, but **not yet wired into any page** — no `.fig-trigger`/
`.fig-store` markup added, since the page they belong to doesn't exist
yet. When that page is built, use these two files directly rather than
asking the user to resend them.

Two more pre-staged the same way right after: `cell-salvage-machine.jpg`
("Cell saver" intraoperative blood salvage system diagram) saved to
`site/images/blood-component-nursing/` for the future **Blood Component**
page (section 3), and `powerport-implantable-port.jpg` (PowerPort
implantable port placement diagram) saved to
`site/images/central-venous-catheters/` alongside the two CVC images
above, for the **Central Venous Catheters** page (section 4). Neither
wired into a page yet for the same reason — those pages don't exist yet.

### 2026-08-19 — Week 2, section 2: Anemias & Polycythemia

- **Source:** `wk2- anemias.pdf`, `wk2-nursing care anemic pt.pdf`, and
  `wk2-polycythemia.pdf`, all read in full — the three files the user
  grouped as one section back when Week 2 started.
- **New page:** `site/week2-anemias-polycythemia.html` — iron deficiency,
  B12 (cobalamin) deficiency, folate deficiency, and aplastic anemia in
  depth (all four fall under "decreased RBC production," the causal
  category already introduced on the Hematology Labs & Diagnostics page);
  shared nursing problems and collaborative care (the fatigue vs. activity
  intolerance distinction, the aplastic-anemia patient's three concurrent
  nursing problems); medications (iron, B12, folic acid, epoetin) with
  nursing implications; nutrition teaching; general nursing care; then
  polycythemia's three types, manifestations, and phlebotomy-centered
  collaborative care. 12 flashcards.
- **Rule 2 cross-references, not new content:** the bone marrow biopsy
  (for aplastic anemia) and the stool-guaiac/EGD/colonoscopy workup (for
  blood-loss anemia) both link back to Hematology Labs & Diagnostics'
  "Other Anemia Diagnostics" section rather than re-explaining either
  procedure. Relative polycythemia links back to that same page's
  "Hemoglobin & Hematocrit (H&H)" section, since it's the identical
  false-high-hematocrit concept already taught there, just given its
  formal name here. All three anchors were confirmed to exist on the
  target page (`other-anemia-diagnostics`, `hemoglobin-hematocrit-h-h`)
  before shipping, and `verify.js` confirmed 0 broken references (69
  across 13 pages).
- **Flagging a likely transcript error, not silently resolved either
  way:** the audio for folate deficiency says its morphology is
  "microcytic normalchromic... just like the other megaloblastic
  anemias" — but B12 deficiency (also megaloblastic) was described two
  sentences earlier as large/macrocytic, and megaloblastic anemias are
  classically macrocytic by definition (impaired DNA synthesis produces
  abnormally large, fragile cells). This page teaches folate deficiency as
  **megaloblastic (macrocytic), normochromic** — matching both the
  instructor's own "just like the other megaloblastic anemias" framing and
  standard morphology — rather than the literal "microcytic" the audio
  says, which reads as a speech/transcription slip (possibly "macrocytic"
  misheard). **Worth the user double-checking against her actual slide**
  for this one value, since it wasn't safe to silently pick either
  reading without flagging it — this is exactly the kind of judgment call
  that should be verified against the source material rather than trusted
  from audio alone.
- **Nav/index/search wiring:** added as item 2 in the Week 2 group
  (`site/assets/site.js`), a matching second tile on the home page
  (`site/index.html`), and appended to `build-search-index.html`'s
  `PAGES` array. Search index regenerated the same way as every page this
  project — 7 pages, 54 sections, 0 bad anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean. Tier 2 still not run (jsdom still blocked in this sandbox).
  DOM/console spot-check via headless Chromium: 12 flashcards, 7 of 8
  tables got an eye button (the 8th — fatigue vs. activity intolerance —
  is intentionally `data-nohide`, a 2-row glossary meant to stay fully
  visible rather than collapse), TOC matches the 9 content headings, both
  cross-reference anchors confirmed to exist on the target page, prev/next
  wired correctly (Hematology Labs & Diagnostics → this page → Must Know),
  no console errors, no failed requests.
- **Images:** not yet discussed for this specific page. The user has
  already sent images for three *other* upcoming Week 2 pages (CVC, Blood
  Component) proactively, pre-staged and not yet asked about for this one.

**Resolved same session:** scanned all three transcripts for visual cues
and asked the user about the conjunctiva pallor-assessment photo, the
spoon-shaped nail (koilonychia) photo, and the swallowed-objects X-ray
(the pica patient who ingested 1,446 items). She chose to skip all three.
No images added to `week2-anemias-polycythemia.html`.

**Corrected same session:** user clarified the transcript reading —
megaloblastic applies to B12 deficiency (confirmed correct as already
written), and for folate deficiency the instructor did mean **microcytic,
normochromic**, not macrocytic. Edited the page to match. Left an
on-page note flagging this as worth double-checking against the slide
deck, since folate deficiency is more commonly taught as macrocytic
outside this specific course — the user is emailing to verify and will
follow up if it needs to change again. Re-verified, search index
regenerated (7 pages, 54 sections, 0 bad anchors), re-shipped.

**Open:** if the user's email verification comes back saying folate
deficiency should be macrocytic after all, revert this note and the
morphology line. Otherwise move to Week 2 section 3 (Blood Component —
nursing implications + transfusion reactions) whenever the user's ready.
Section 4 (Central Venous Catheters) already has 3 images pre-staged and

## Week 2, Section 3 — Blood Component Therapy (built)

- **Sources:** `wk2-blood component nursing implications.pdf` +
  `wk2-blood component transfusion rxns.pdf`, both read in full.
- **Structure (8 sections + flashcards):** Blood Types & Compatibility
  (ABO/Rh, universal donor/recipient) → PRBCs — Pre-Transfusion
  Responsibilities (H&H threshold table, 72-hour type & cross-match
  window, pre-medication, 20-gauge-or-larger IV rule, Y-tubing/normal
  saline only, a DANGER callout on the strict 30-minute-to-start / 4-hour
  max-hang rule, a bedside monitoring-schedule table) → Platelets, FFP &
  Albumin (comparison table) → Responding to a Suspected Transfusion
  Reaction (stop the transfusion, prime new NS at the same site, assess,
  notify provider + blood bank, save the bag/tubing, monitor urine
  output, document) → Types of Transfusion Reactions (6-row table: Acute
  Hemolytic, Febrile Non-Hemolytic, Mild Allergic, Severe
  Allergic/Anaphylactic, Bacterial Sepsis, TACO) → Leukocyte-Reduced
  Products → Minimizing Reaction Risk — Autologous Donation &
  Autotransfusion → 12 flashcards.
- **Cross-references (rule 2 — each topic taught once, linked
  elsewhere):** the indirect Coombs/cross-match connection links to
  Hematology Labs & Diagnostics' `#other-anemia-diagnostics`; "third
  spacing" (mentioned for albumin) links to Week 1's Respiratory Labs &
  Diagnostics page `#thoracentesis` rather than re-explaining it here;
  BP as an indirect measure of cardiac output (used to explain TACO)
  links back to `#anemia-severity-why-the-symptoms-happen`. All three
  anchors confirmed to exist on their target pages before shipping.
- **Framing choice:** the instructor said students don't need to
  memorize population-level ABO blood-type percentages for the test, so
  the page states the compatibility rules (who can donate/receive to
  whom) without a percentages table — matching what she said would
  actually be tested.
- **Image:** `cell-salvage-machine.jpg` (pre-staged earlier this
  session) added to the Autologous Donation & Autotransfusion section —
  confirmed against the transcript's own description ("this patient is
  having open-heart surgery... I think I have a picture of it").
  Lightbox-tested: opens, image loads at its real resolution, caption
  correct.
- **Nav/index/search wiring:** added as item 3 in the Week 2 group
  (`site/assets/site.js`), a matching third tile on the home page
  (`site/index.html`), and appended to `build-search-index.html`'s
  `PAGES` array. Search index regenerated — 8 pages, 63 sections, 0 bad
  anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean (77 references across 14 pages, all resolve). Tier 2
  still not run (jsdom still blocked in this sandbox). DOM/console
  spot-check via headless Chromium: 12 flashcards, 4 of 5 tables got an
  eye button (the 5th is intentionally `data-nohide`), TOC matches all 8
  headings, all three cross-reference anchors resolve, prev/next wired
  correctly (Anemias & Polycythemia → this page → Must Know), no console
  errors, no failed requests. Home page tile and nav dropdown both
  confirmed to include the new page.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.
- **Images:** both transcripts were scanned for visual cues. One
  candidate found — a Y-tubing photo, explicitly described in the
  nursing-implications transcript ("this on the left is a picture of Y
  tubing, and you can see why we call it Y tubing"). Asked the user; she
  chose to skip it (the page's text already covers the tubing set —
  filter, roller clamp, saline priming — without the photo). No
  additional images added to this page.

## Week 2, Section 4 — Central Venous Catheters (built)

- **Source:** `wk2-central venous catheters.pdf`, read in full.
- **Structure (9 sections + flashcards):** Why a Patient Needs a CVC
  (TPN, vesicant chemo, long-term antibiotics, loss of peripheral
  access) → Non-Tunneled ("Deep") Lines (subclavian vs. IJ, pneumothorax
  risk, chest X-ray after insertion, RN can remove) → Tunneled CVCs
  (Hickman/Groshong/Broviac, placed by the surgeon, provider-only
  removal) → Implantable Ports (Portacath/PowerPort, Huber needle,
  2,000/750 puncture rating, surgeon-only removal) → PICC (threaded to
  the SVC, no BP/draws in that arm, RN can remove) → General CVC
  Complications & CLABSI → Removing a Non-Tunneled CVC or PICC (RN
  scope — INR check, Valsalva maneuver, post-removal measurement) → Who
  Removes Which Line (quick-reference table) → Nursing Student Scope of
  Practice (what's off-limits at UK Healthcare vs. the one exception —
  hanging a secondary line with the instructor/RN present) → 12
  flashcards.
- **No cross-references needed** — this topic is self-contained and
  doesn't overlap with earlier Week 1/Week 2 content.
- **Images:** all 3 pre-staged images added — `cvc-subclavian.jpg` and
  `cvc-internal-jugular.jpg` in the Non-Tunneled Lines section,
  `powerport-implantable-port.jpg` in the Implantable Ports section.
  Lightbox-tested individually: all three open, load at real resolution,
  and show the correct caption.
- **Additional visual cues found but not used:** the transcript also
  describes pictures of a general/triple-lumen deep-line, a tunneled
  CVC exit site, the Huber needle accessing a port, and PICC
  insertion/removal — none of which the user had sent. Asked her
  directly; she confirmed the page is good as-is with the 3 images
  already added.
- **Nav/index/search wiring:** added as item 4 in the Week 2 group
  (`site/assets/site.js`), a matching fourth tile on the home page
  (`site/index.html`), and appended to `build-search-index.html`'s
  `PAGES` array. Search index regenerated — 9 pages, 74 sections, 0 bad
  anchors.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js` —
  Tier 1 clean (84 references across 15 pages, all resolve). Tier 2
  still not run (jsdom still blocked in this sandbox). DOM/console
  spot-check via headless Chromium: 12 flashcards, TOC matches all 10
  headings, prev/next wired correctly (Blood Component Therapy → this
  page → Must Know), no console errors, no failed requests. Home page
  tile and nav dropdown both confirmed to include the new page.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Week 2 (Hematology unit) is now complete** — all 4 sections built,
verified, and shipped: Hematology Labs & Diagnostics, Anemias &
Polycythemia, Blood Component Therapy, Central Venous Catheters.

**Open:** if the user's email verification on folate deficiency's
morphology comes back saying macrocytic after all, revert the note and
morphology line in `week2-anemias-polycythemia.html` (see the Anemias &
Polycythemia entry above for the exact reversion condition). Otherwise,
next steps are whatever the user directs — a new week, or Stage 2 work
(Must Know entries, exam bank questions, Lecture Review) for Week 1,
which hasn't been started yet and would need the live-lecture
transcript.

## Fundamentals Review — new content group, kicked off

The user provided a "Fundamentals Review" folder — `.docx` transcripts
(with embedded lecture slides) for **Fundamentals 1**, **Fundamentals 2**,
and a **Palliative/Hospice/EOL** guest lecture — everything for the
fundamentals-level content tested on Exam 1 alongside Week 1 & 2.

**Scope, once read:** Fundamentals 1 covers 4 distinct topics (Legal &
Ethical Issues; Nursing Process & Clinical Judgment Model; SBAR; Obesity
& Metabolic Syndrome). Fundamentals 2 covers 12 body-system/skill topics
(Oxygenation, Tracheostomy, Cardiovascular, Diabetic Care, Nutrition,
Urinary Elimination, Bowel Elimination, Integumentary, Neurosensory,
Pain, Older Adults, Discharge Planning). Palliative/EOL is one cohesive
44-slide guest lecture. That's too many natural topics for one page
each, so — mirroring how Week 2 was grouped — proposed a condensed
structure to the user and got it confirmed, merging Diabetic Care with
Nutrition and Neurosensory with Pain to land on exactly **11 sections**:

1. Legal & Ethical Issues
2. Nursing Process, Clinical Judgment & SBAR
3. Obesity & Metabolic Syndrome
4. Oxygenation & Tracheostomy
5. Cardiovascular
6. Diabetic Care & Nutrition
7. Urinary & Bowel Elimination
8. Integumentary
9. Neurosensory & Pain
10. Older Adults & Discharge Planning
11. Palliative, Hospice & End of Life

**New nav structure:** added a `Fundamentals Review` group in
`site/assets/site.js` (sits after Week 2, before Exam Prep) and a
matching `Fundamentals Review` section on the home page
(`site/index.html`), using the same `.tile-grid` layout as Exam Prep
rather than the week-badge/`.wk-row` layout, since this content isn't
tied to a specific week. Building one section at a time, same pipeline
as every topic page this project — only wiring in nav/index/search
entries for pages that actually exist yet, to avoid dead links.

### Section 1 — Legal & Ethical Issues (built)

- **Source:** `Fundamentals 1 VO Transcripts - with Pics.docx`, first
  topic (Legal and Ethical Issues pt 1 & pt 2), read in full via
  `python-docx`. Confirmed via image/paragraph mapping that this
  topic's slides don't include any embedded images — the doc's first 2
  images belong to the next topic (Nursing Process), so no images
  needed on this page.
- **Structure (8 sections + flashcards):** Scope of Practice & the
  Nurse Practice Act → HIPAA (Privacy/Security/Breach
  Notification/Safety, with a note flagging that the "11 categories of
  PHI" the instructor mentions weren't spelled out in the audio — the
  page tells the user to check the textbook/slide for the exact list
  rather than guessing at it) → Patient Self-Determination Act,
  Advance Directives & Living Wills → Informed Consent → DNR Orders
  (callout-danger on the "DNR ≠ do not care" point) → Other Legal Acts
  to Know (EMTALA, ADA, Mental Health Parity, OBRA, Good Samaritan Law,
  Public Health Law, Uniform Determination of Death Act — reference
  table) → Ethics Fundamentals (values, ethical dilemma, values
  clarification, moral distress — including the instructor's own
  Jehovah's Witness/blood-product anecdote) → Professional Nursing Code
  of Ethics → 12 flashcards.
- **No cross-references yet** — this is the first Fundamentals Review
  page built, so there's nothing to link back to. Later sections may
  link back to this one once it exists as a target.
- **Verified:** `node tools/version.js stamp` + `node tools/verify.js`
  — Tier 1 clean (88 references across 16 pages, all resolve). Tier 2
  still not run (jsdom still blocked in this sandbox). DOM/console
  spot-check via headless Chromium: 12 flashcards, both tables got an
  eye button, TOC matches all 9 headings, prev/next wired correctly
  (Central Venous Catheters → this page → Must Know), no console
  errors, no failed requests. Home page tile and nav dropdown both
  confirmed to include the new page.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`. Search index now
  10 pages, 84 sections, 0 bad anchors.

### Section 2 — Nursing Process, Clinical Judgment Model & SBAR (built)

- **Source:** `Fundamentals 1 VO Transcripts - with Pics.docx`, second
  and third topics (Intro to the Nursing Process and Clinical Judgement
  Model pt 1 & pt 2, plus SBAR), read in full.
- **Images:** the 2 embedded slide images that belonged to this topic
  were extracted directly from the docx (via `python-docx`/zip, since
  the "with Pics" doc has slide screenshots inserted inline at each
  reference point) rather than needing the user to resend anything —
  `nursing-process-cjm-overlay.jpg` (the side-by-side Nursing
  Process/CJM diagram) and `cjm-steps.jpg` (the CJM's 6 steps alone),
  compressed with `sharp` and added to the Clinical Judgment Model
  section. Lightbox-tested: both open, load at real resolution, correct
  captions.
- **Structure (4 sections + flashcards):** The Nursing Process (5
  steps) → The Clinical Judgment Model / CJM (6 steps, with an
  explicit note on which single nursing-process step — Planning —
  splits into two CJM steps, and the tachypnea/laceration cue-clustering
  example from lecture) → SBAR — Preparing to Call (the 5 prep steps)
  → SBAR — The Four Components (Situation/Background/Assessment/
  Recommendation, each with the instructor's own Mr. Brown pulmonary-
  embolism example carried through all four) → 12 flashcards.
- **No cross-references** — doesn't overlap with Legal & Ethical Issues
  or any Week 1/2 content.
- **Verified:** Tier 1 clean (94 references across 17 pages, all
  resolve). DOM/console spot-check: 12 flashcards, both tables got an
  eye button, TOC matches all 5 headings, prev/next correct (Legal &
  Ethical Issues → this page → Must Know), no console errors, no failed
  requests. Search index regenerated — 11 pages, 90 sections, 0 bad
  anchors.
- **Shipped:** page + both images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

### Section 3 — Obesity & Metabolic Syndrome (built)

- **Source:** `Fundamentals 1 VO Transcripts - with Pics.docx`, fourth
  and final topic, read in full. **This completes Fundamentals 1** —
  all 4 of its topics are now built as Fundamentals Review sections 1–3
  (Nursing Process & SBAR were combined into one section).
- **Images:** all 3 of this topic's embedded slide images extracted
  and used — `obesity-classifications-bmi-chart.jpg` (BMI formula +
  chart, in Classifying Obesity), `metabolic-syndrome-criteria.jpg`
  (the exact diagnostic thresholds table, in Metabolic Syndrome), and
  `metabolic-syndrome-nursing-interventions.jpg` (personalized-therapy
  diagram, in Nursing Interventions for Metabolic Syndrome). The
  criteria slide let the page state exact numeric thresholds (waist
  circumference, triglycerides, HDL, BP, fasting glucose) that the
  audio alone didn't fully spell out — a case where the slide image
  filled in detail the transcript was vague on, worth flagging since
  it's a deviation from relying on audio alone, but the numbers come
  directly from the instructor's own slide, not an outside source.
  Lightbox-tested: all three open, load at real resolution.
- **Structure (7 sections + flashcards):** Classifying Obesity (BMI,
  waist circumference, waist-to-hip ratio, apple/pear shape) →
  Contributors to Obesity (primary/secondary, genetics ~70–75%,
  environmental, sleep, psychosocial, childhood obesity) → Health Risks
  of Obesity → Nursing Assessment & Communication (non-judgmental care,
  readiness-to-change timing) → Nursing Interventions: Lifestyle &
  Nutrition (modest 3–5% weight loss framing, nutrition specifics,
  exercise, behavior modification, drug/surgical therapy) → Metabolic
  Syndrome (1 in 3 adults, insulin resistance, the "3 of 5 criteria"
  rule) → Nursing Interventions for Metabolic Syndrome → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 2
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (101 references across 18 pages, all
  resolve). DOM/console spot-check: 12 flashcards, TOC matches all 8
  headings, prev/next correct (Nursing Process & SBAR → this page →
  Must Know), no console errors, no failed requests. Search index
  regenerated — 12 pages, 99 sections, 0 bad anchors.
- **Shipped:** page + all 3 images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

### Section 4 — Oxygenation & Tracheostomy (built)

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  first 6 sub-lectures (Oxygenation pts 1–5, Tracheostomy), read in
  full. Mapped all 33 of this doc's embedded images to their owning
  sub-lecture via paragraph-index proximity (same technique used for
  Fundamentals 1) so future sections can reuse the same map without
  re-deriving it — see the annotated extraction for the full list.
- **Images:** of the 14 images belonging to this topic group, selected
  the 10 most distinct/testable and skipped 4 that were redundant or
  lower-value for a fundamentals-level page (an alveoli close-up that
  overlapped conceptually with the breathing diagram already used, a
  multi-position postural-drainage chart that's more detail than the
  page's single worked example needs, a surgical-insertion diagram, and
  a second cuff-inflation-mechanism diagram redundant with the cuff
  cross-section already included) — not a hard exclusion, just an
  editorial call to keep an already-large page from becoming
  overwhelming; flagging here in case the user wants any of the
  skipped ones added later. Used: breathing in/out, respiratory pattern
  alterations table, breath sounds chart, RATBED hypoxia mnemonic,
  endotracheal vs. percutaneous diagram, tracheostomy tube parts
  diagram, Shiley photo, Jackson photo, cuffed trach cross-section, and
  the passive mirror (speaking) valve photo. All lightbox-tested —
  open, load at real resolution.
- **Content-accuracy flag (not silently corrected):** the audio says
  the phrenic nerve arises from "T3 to T5," which doesn't match the
  standard nursing/anatomy teaching (C3, C4, C5 — "C3, 4, 5 keeps the
  diaphragm alive"). The page uses the standard C3–C5 teaching but
  includes an explicit on-page note flagging the discrepancy from the
  audio, the same treatment given to the folate-deficiency morphology
  question earlier this project — worth the user double-checking
  against the slide if she wants full certainty.
- **Structure (11 sections + flashcards) — unusually large since it
  condenses 6 sub-lectures:** Ventilation/Diffusion/Perfusion →
  Assessing Breathing (rate/depth/pattern) → Breath Sounds → Oxygen
  Saturation & Diagnostic Tests → Work of Breathing & Factors Affecting
  Oxygenation → Hypoxia (RATBED, central vs. peripheral cyanosis,
  chronic hypoxia changes) → Airway Clearance (cough, splinting,
  mobilization, chest physiotherapy/postural drainage, suctioning,
  incentive spirometer) → Oxygen Therapy Devices (full device
  comparison table + a callout-danger on oxygen toxicity) →
  Tracheostomy Overview/Indications/Tube Types (Shiley vs. Jackson
  comparison table) → Tracheostomy Cuff Management & Communication →
  Tracheostomy Nursing Care & Emergency Response (decannulation
  steps) → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 3
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (115 references across 19 pages, all
  resolve). DOM/console spot-check: 12 flashcards, all 10 images
  lightbox-tested individually (all open, load, correct src), TOC
  matches all 12 headings, prev/next correct (Obesity & Metabolic
  Syndrome → this page → Must Know), no console errors, no failed
  requests. Search index regenerated — 13 pages, 112 sections, 0 bad
  anchors.
- **Shipped:** page + all 10 images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 7 more Fundamentals Review sections to go, all still from
Fundamentals 2. Next up: Section 5, Cardiovascular (pts 1–4) — text
not yet read; images already mapped (image15–17 → Cardiovascular pt1,
image18–20 → pt2, image21–22 → pt4, pt3 has none) from this session's
paragraph/image mapping pass, so no need to redo that step.

## Fundamentals Review — Section 5: Cardiovascular

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Cardiovascular pts 1–4, read in full (paragraphs 92–131 of the
  annotated extraction). Covers perfusion/cardiac output/ejection
  fraction/BP basics (pt1); hypertension and hypotension including the
  full orthostatic hypotension diagnostic protocol (pt2);
  hyperlipidemia and VTE/DVT/PE (pt3); and diagnostics (H&H, fasting
  lipid profile, chest X-ray, EKG vs. telemetry, heart sounds, nursing
  assessment/care wrap-up) (pt4). Reading this section's text also
  incidentally covered the start of Diabetic Care pt1–pt3 (paragraphs
  132–147) since they share the same document — that content is not
  used yet but confirms the image mapping already on file (image23 →
  Diabetic Care 1 diagnostic-criteria chart; image24 → Diabetic Care 2
  basal/bolus insulin-release graph; image25 → Diabetic Care 2 Slide
  18 insulin-types chart) is correct, so no re-derivation needed when
  Section 6 is built.
- **Images:** all 8 mapped images (image15–17 for pt1, image18–20 for
  pt2, image21–22 for pt4) were used — no exclusions this time, since
  each was a distinct, testable slide (perfusion loop, cardiac output
  formula, ejection fraction chart, AHA BP categories table, DASH diet
  wheel, orthostatic hypotension diagnostic chart, EKG waveform
  diagram, and the S3/S4 gallop timing diagram from "Slide 61"). All
  lightbox-tested — open, load at real resolution.
- **Structure (8 sections + flashcards):** Perfusion, Cardiac Output &
  Ejection Fraction → Hypertension (staging table + DASH diet +
  hypertensive-crisis callout-danger) → Hypotension & Orthostatic
  Hypotension (diagnostic protocol) → Hyperlipidemia (lipid target
  table) → Venous Thromboembolism: DVT & PE (risk factors, s/sx,
  TED hose/SCDs/calf pumping/IVC filter) → Diagnostics: Labs, Chest
  X-ray & EKG (H&H table, EKG vs. telemetry, electrode mnemonic) →
  Heart Sounds (S1/S2, S3/S4 gallops, murmurs/clicks/rubs) → Nursing
  Assessment & Care of the Cardiovascular Patient → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 4
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (127 references across 20 pages, all
  resolve). DOM/console spot-check: 12 flashcards, all 8 images
  lightbox-tested individually (all open, load, correct src), TOC
  matches all 9 headings (8 content + flashcards), prev/next correct
  (Oxygenation & Tracheostomy → this page → Must Know), no console
  errors, no failed requests. Search index regenerated — 14 pages,
  122 sections, 0 bad anchors.
- **Shipped:** page + all 8 images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 6 more Fundamentals Review sections to go. Next up: Section
6, Diabetic Care & Nutrition — text partially read already (Diabetic
Care pt1–pt3, paragraphs 132–147, covered incidentally while reading
Cardiovascular; Diabetic Care pt4 and all of Nutrition still unread).
Images already mapped from this session's earlier pass: image23 →
Diabetic Care 1, image24–25 → Diabetic Care 2, image26–28 → Nutrition
(not yet re-confirmed against text) — no need to redo the mapping
step, just confirm against the unread portions when reached.

## Fundamentals Review — Section 6: Diabetic Care & Nutrition

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Diabetic Care pt1–pt4 and Nutrition pt1–pt5, read in full
  (paragraphs 131–179 of the annotated extraction). This is the
  largest content merge yet — two full sub-lecture sets combined per
  the user's 11-section condensing request. Reading this section's
  text also carried into the start of Urinary Elimination pt1–pt3
  (paragraphs 180–189), which will be used unmodified when Section 7
  is built — no need to re-read that portion.
- **Images:** 6 mapped (image23–25 → Diabetic Care, image26–28 →
  Nutrition). Used 5, skipped 1: image25 (a second insulin-types
  chart, an intensity-over-time curve) was skipped as redundant with
  image24 (an onset/peak/duration table with named drug examples —
  lispro, aspart, regular, NPH, glargine/detemir — kept instead since
  it carries more testable detail). Used: ADA diagnostic-criteria
  table, insulin onset/peak/duration table, clear liquid diet options,
  full liquid diet examples, and a dysphagia food/liquid texture
  scale. All lightbox-tested — open, load at real resolution.
- **Structure (11 sections + flashcards):** Type 1 vs. Type 2 Diabetes
  → Diagnostic Labs & Criteria → Prediabetes & Pharmacologic/Sick-Day
  Management → Insulin Therapy (callout-danger on insulin as a
  high-alert medication) → Hypoglycemia, Hyperglycemia & Insulin Pumps
  → Chronic Complications & Diabetic Foot Care → GI Basics,
  Malnutrition & Factors Affecting Nutrition → Nutritional Assessment:
  Labs & the Nursing Process (albumin/prealbumin/hemoglobin) → Diet
  Types & Progression (regular/modified-texture/clear-full-liquid/
  therapeutic diets/NPO/TPN) → Dysphagia & Feeding Assistance →
  Enteral & Parenteral Nutrition (tube types, placement confirmation,
  intolerance signs, med administration) → 12 flashcards.
- **Content note:** normal fasting glucose was stated two ways in the
  same lecture ("less than 100" on one slide's table, "less than 126"
  verbally elsewhere) — the page's table follows the ADA slide's
  numbers (matching the image) and adds a parenthetical noting the
  lecture's verbal "&lt;126" framing, rather than silently picking one.
- **No cross-references** — doesn't overlap with the other 5
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (136 references across 21 pages, all
  resolve). DOM/console spot-check: 12 flashcards, all 5 images
  lightbox-tested individually (all open, load, correct src), TOC
  matches all 12 headings, prev/next correct (Cardiovascular → this
  page → Must Know), no console errors, no failed requests. Search
  index regenerated — 15 pages, 135 sections, 0 bad anchors.
- **Shipped:** page + all 5 images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 5 more Fundamentals Review sections to go. Next up: Section
7, Urinary & Bowel Elimination — Urinary Elimination pt1–pt3 already
read in full (paragraphs 180–189, covered incidentally while reading
Section 6); Bowel Elimination content not yet read/scoped. No image
mapping done yet for this section — need to check whether the
Urinary/Bowel Elimination portion of the document has any embedded
images (image29–33 were tentatively assigned to Integumentary and
Neurosensory/Pain in an earlier full-document pass, which would mean
Urinary/Bowel has none — needs confirming when reached).

## Fundamentals Review — Section 7: Urinary & Bowel Elimination

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Urinary Elimination pt1–pt3 and Bowel Elimination pt1–pt2, read in
  full (paragraphs 180–194 of the annotated extraction). Confirmed
  this span has <b>no embedded images</b> — image29–33 belong entirely
  to Integumentary/Neurosensory/Pain as expected. Reading this
  section's text also carried into the start of Integumentary pt1–pt2
  (paragraphs 195–202), which will be used unmodified when Section 8
  is built — no need to re-read that portion.
- **Images:** none — this is the first Fundamentals Review section
  with no figures, since the source lecture had none embedded here.
- **Structure (11 sections + flashcards):** Urinary Elimination Basics
  & Factors Affecting It → Urinary Retention & UTIs/CAUTIs → Urinary
  Incontinence (overflow/stress/urge/functional) → Urinary Assessment:
  I&O, Urine Characteristics & Testing → Nursing Care for Urinary
  Problems → Urinary Catheters: Types & Nursing Care → Bowel
  Elimination Basics & Factors Affecting It → Constipation & Impaction
  (laxative safety, enema/NMA care) → Diarrhea & C. difficile (spore
  precautions) → Bowel Incontinence, Flatulence & Hemorrhoids → Colon
  Cancer Screening & GI Assessment (Bristol chart, FOBT) → NG Tubes &
  Bowel Training → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 6
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (140 references across 22 pages, all
  resolve). DOM/console spot-check: 12 flashcards, TOC matches all 12
  headings, prev/next correct (Diabetic Care & Nutrition → this page →
  Must Know), no console errors, no failed requests, no images to
  lightbox-test. Search index regenerated — 16 pages, 149 sections, 0
  bad anchors.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 4 more Fundamentals Review sections to go. Next up: Section
8, Integumentary — Integumentary pt1–pt2 already partially read
(paragraphs 195–202, covered incidentally while reading Section 7);
more of Integumentary and all of Neurosensory/Pain still unread.
Images already mapped from this session's earlier full-document pass:
image29–30 → Integumentary, image31 → Neurosensory, image32–33 → Pain
— no need to redo the mapping step, just confirm against the unread
portions when reached. Per the confirmed 11-section plan, Section 9
(Neurosensory & Pain) is a separate page from Section 8
(Integumentary), so don't merge them even though they're read in the
same sitting.

## Fundamentals Review — Section 8: Integumentary

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Integumentary pt1–pt4, read in full (paragraphs 195–218 of the
  annotated extraction). Reading this section's text also carried
  into the start of Neurosensory pt1 (paragraphs 219–222, through the
  GCS slide/image31), which will be used unmodified when Section 9 is
  built — no need to re-read that portion.
- **Images:** both mapped images used — image29 (wound measurement
  clock-position diagram, including an actual open-wound photo) and
  image30 (the 4-type drainage-on-gauze comparison: serosanguineous,
  serous, purulent, sanguineous). Both are unusually high-value,
  directly matching worked examples/definitions in the transcript, so
  no exclusions this time. Both lightbox-tested — open, load at real
  resolution.
- **Structure (8 sections + flashcards) — smaller than the last few
  merged sections since Integumentary stands alone this time:** Skin
  Assessment Basics → Skin Color Changes (pallor/cyanosis/jaundice/
  erythema, with dark-skin-tone assessment notes) → Pressure Injuries:
  Risk Factors & Staging (Braden Scale, blanchable vs. non-blanchable,
  DTI, unstageable) → Other Skin Damage & Prevention Interventions
  (MASD, intertrigo, periwound) → Wound Types & Factors Affecting
  Healing (acute vs. chronic, nutrition/perfusion/infection/age) →
  Wound Assessment: Color, Measurement & Drainage (both images + a
  drainage-type table) → Wound Dressings (gauze through wound VAC) →
  Surgical Wound Complications (callout-danger on evisceration;
  hemorrhage, dehiscence, infection) → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 7
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (146 references across 23 pages, all
  resolve). DOM/console spot-check: 12 flashcards, both images
  lightbox-tested individually (open, load, correct src), TOC matches
  all 8 headings, prev/next correct (Urinary & Bowel Elimination →
  this page → Must Know), no console errors, no failed requests.
  Search index regenerated — 17 pages, 159 sections, 0 bad anchors.
- **Shipped:** page + both images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 3 more Fundamentals Review sections to go. Next up: Section
9, Neurosensory & Pain — Neurosensory pt1 already partially read
(paragraphs 219–222, through the GCS slide/image31, covered
incidentally while reading Section 8); the rest of Neurosensory and
all of Pain still unread. Images already mapped: image31 → GCS chart
(Neurosensory), image32–33 → Pain — no need to redo the mapping step.

## Fundamentals Review — Section 9: Neurosensory & Pain

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Neurosensory pt1–pt4 and Pain pt1–pt3, read in full (paragraphs
  219–252 of the annotated extraction). This is the last of the
  Fundamentals 2 document's merged-topic sections. Reading this
  section's text also carried into the start of Older Adults pt1
  (paragraphs 253–256), which will be used unmodified when Section 10
  is built — no need to re-read that portion.
- **Images:** all 3 mapped images used — image31 (full Glasgow Coma
  Scale table), image32 (Response to Acute Pain → Adaptation
  diagram), image33 (PCA dosing chart for hydromorphone/morphine
  across 3 patient categories). All directly match worked
  examples/definitions in the transcript, so no exclusions. All
  lightbox-tested — open, load at real resolution.
- **Structure (11 sections + flashcards):** Neuro Assessment Basics:
  ABCs, GCS & LOC → Neuro Diagnostics: X-ray, CT, MRI & EEG → Neuro
  Patient Safety & Care → Sensory Deprivation & Overload → Sensory
  Deficits & Nursing Care (vision/hearing/taste-smell/tactile/
  communication) → Headaches & Migraines → Pain Basics: Physiology &
  Types → Pain Assessment (PQRSTU) → Non-Pharmacological Pain
  Management → Pharmacological Pain Management (callout-danger on
  opioid respiratory depression) → PCA & Epidural Analgesia → 12
  flashcards.
- **No cross-references** — doesn't overlap with the other 8
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (153 references across 24 pages, all
  resolve). DOM/console spot-check: 12 flashcards, all 3 images
  lightbox-tested individually (open, load, correct src), TOC matches
  all 11 headings, prev/next correct (Integumentary → this page →
  Must Know), no console errors, no failed requests. Search index
  regenerated — 18 pages, 172 sections, 0 bad anchors.
- **Shipped:** page + all 3 images + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** 2 more Fundamentals Review sections to go. Next up: Section
10, Older Adults & Discharge Planning — Older Adults pt1 already
partially read (paragraphs 253–256, covered incidentally while
reading Section 9); the rest of Older Adults and all of Discharge
Planning content still unread/unscoped. No image mapping done yet for
this section — the Fundamentals 2 document's images all fell within
image1–33 (fully accounted for across Sections 1–9), so Older Adults &
Discharge Planning likely has no embedded images, but this needs
confirming as the remaining text is read. After Section 10, only
Section 11 (Palliative, Hospice & End of Life) remains, sourced from
the separate `Palliative EOL - transcript with slides.docx` — that
document's own image mapping pass (44 slides, not yet done) will be
needed when that section is reached.

## Fundamentals Review — Section 10: Older Adults & Discharge Planning

- **Source:** `Fundamentals 2 vo transcripts - with pics (1).docx`,
  Older Adults pt1–pt2 and Discharge Planning pt1–pt2, read in full
  (paragraphs 253–264 of the annotated extraction) — this is the
  **end of the Fundamentals 2 document** (263 total paragraphs,
  confirmed no content remains unread in this file). Confirmed **no
  embedded images** in this span — all 33 of this document's images
  were fully accounted for across Sections 1–9.
- **Images:** none.
- **Structure (11 sections + flashcards):** Aging Myths, Ageism & Body
  System Changes (condensed across cardiovascular/respiratory/GI/
  urinary/integumentary/musculoskeletal/immune, since each is a brief
  lecture point rather than deep content) → Functional & Cognitive
  Changes → Care Settings & Acute Care Basics → Acute Care
  Complications in Older Adults (delirium, dehydration/malnutrition,
  HAIs, incontinence) → Leading Health Concerns & Nutrition → Falls:
  Risk Factors & Prevention → Polypharmacy, Assessment & Atypical
  Illness Presentation (callout-danger on new confusion as an
  infection sign) → Psychosocial Health: Elder Mistreatment,
  Communication & Teaching (reality orientation vs. validation
  therapy) → Discharge Planning Basics → Critical Aspects of Discharge
  Teaching (medication reconciliation, diagnosis, procedures, diet,
  activity) → Coordinating Discharge: Case Management, Social Services
  & Follow-Up → 12 flashcards.
- **No cross-references** — doesn't overlap with the other 9
  Fundamentals Review sections built so far.
- **Verified:** Tier 1 clean (157 references across 25 pages, all
  resolve). DOM/console spot-check: 12 flashcards, TOC matches all 11
  headings, prev/next correct (Neurosensory & Pain → this page → Must
  Know), no console errors, no failed requests, no images to
  lightbox-test. Search index regenerated — 19 pages, 185 sections, 0
  bad anchors.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

## Fundamentals Review — Section 11: Palliative, Hospice & End of Life (FINAL SECTION)

- **Source:** `Palliative EOL - transcript with slides.docx` — a
  single guest-lecture transcript (Dr. Abigail Latimer, clinical
  social worker), 295 paragraphs, read in full. Image-annotated
  extraction initially produced 0 image matches despite the doc
  containing 44 embedded images (confirmed via `word/media/` zipfile
  listing and raw `a:blip` XML tag counts). Diagnosed by parsing
  `word/document.xml` directly with `lxml` and tracing the ancestor
  chain of every `a:blip`: all 44 sit at the ordinary
  `body > p > r > drawing > ... > blip` depth, no text boxes or table
  nesting involved — i.e. the same `python-docx` paragraph-walk
  technique that worked for Fundamentals 1/2 should have worked here
  too. Re-running the identical extraction script from scratch found
  all 44 images correctly (44/44, 0 missing relationship IDs); the
  original failed run is unexplained (most likely an environmental
  hiccup — file not fully staged, or similar) rather than a real bug
  in the technique. No code changes were needed.
- **Images:** 12 of 44 selected editorially. Kept every slide that is
  a genuine chart/diagram/mnemonic with test-relevant structure;
  skipped plain title cards, pure photo/form screenshots (Kentucky
  Living Will and Five Wishes form images), and dense bullet-text
  slides whose content is fully captured in prose (e.g. "ACP" feelings
  list, "The Dying Experience" weeks-months-year bullet list, "Silence
  is Empathic," "Morphine and Hastened Death" — all covered in text
  instead). The "I Worry" statement slide was skipped as
  structurally redundant with "I Wish" (same slide format, parallel
  content) — "I Worry" is still fully covered in prose. Saved to
  `site/images/palliative-hospice-eol/`: `palliative-hospice-
  comparing-services.jpg`, `is-it-palliative-or-hospice-chart.jpg`,
  `interdisciplinary-team.jpg`, `three-conversations-model.jpg`,
  `nurse-statements-mnemonic.jpg`, `i-wish-statement.jpg`, `acp-
  whats-what-definitions.jpg`, `hot-button-ethical-issues.jpg`,
  `what-influences-eol-care.jpg`, `maid-definition.jpg`, `syndrome-
  of-imminent-dying.jpg`, `dual-process-model-of-grief.jpg`.
- **Structure (11 sections + flashcards):** Palliative vs. Hospice: Key
  Distinctions → Eligibility, Payment & the "Live Discharge" →
  The Interdisciplinary Team → Why Communication Is Hard & the
  Nurse's Central Role → Responding to Emotions: NURSE Statements →
  "I Wish"/"I Worry" Statements & the Power of Silence → Advance Care
  Planning & Legal Documents (living will vs. last will vs. MOST form,
  Kentucky-specific docs) → Ethical Issues in Serious Illness & EOL
  Care (incl. coercive DNR-conversation language) → Factors
  Influencing EOL Care & Medical Aid in Dying → The Dying Experience &
  Syndrome of Imminent Dying (death rattle, apnea timing, mottling) →
  Family Concerns, Morphine, Grief & Bereavement (morphine/hastened-
  death myth, Kübler-Ross critique, dual process model) → 12
  flashcards. No callout-danger used on this page — nothing in the
  lecture rose to the med-safety-emergency framing that class is
  reserved for; the morphine-myth content was handled in prose instead
  since it's reassurance rather than a hazard warning.
- **No cross-references** — this is a standalone guest lecture, no
  overlap with the other 10 Fundamentals Review sections.
- **Verified:** Tier 1 clean (173 references across 26 pages, all
  resolve). DOM/console/lightbox check: 12 flashcards, 12 fig-triggers,
  TOC matches all 11 headings, prev/next correct (Older Adults &
  Discharge Planning → this page → Must Know, since this is now the
  last Fundamentals Review topic), no console errors, no failed
  requests, all 12 lightboxes opened with the correct image and
  `naturalWidth: 1000`. Search index regenerated — 20 pages, 198
  sections, 0 bad anchors.
- **Shipped:** page + `site.js` + `index.html` +
  `build-search-index.html` + `data/search-index.js` + 12 images (17
  files total) sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** All 11 Fundamentals Review sections are now complete — this
was the final section of the plan the user approved. Nothing else is
queued for this initiative. Per earlier direction, GitHub Pages has
not been touched and shouldn't be until she asks. Worth flagging to
her directly that the full Fundamentals Review is done.

## Build Your Own Exam — real question bank for all 11 Fundamentals
## Review sections, plus a question-count selector

- **Ask:** advanced/complex NCLEX-style practice questions for every
  Fundamentals Review section, usable through the existing "Build Your
  Own Exam" picker, plus the ability to choose how many questions go
  into a generated exam (previously always used every question in
  every checked cell). The Torture Chamber (separate cumulative
  SATA-only exam) and `must-know.html` were explicitly out of scope —
  she chose to skip both for now.
- **Scope decisions (hers, confirmed):** Build Your Own Exam content
  only. Skip the "mustKnow maps 1:1 to a must-know.html bullet"
  invariant documented in `quiz-bank.js` — built strong Must Know /
  Extra Practice sets by judgment instead of against that page's
  bullets, since `must-know.html` is still placeholder-only. Volume:
  **moderate** — exactly 10 Must Know + 10 Extra Practice questions per
  section (not the 15+15 "thorough" option), 220 questions total
  across the 11 sections.
- **Content:** `data/quiz-bank.js` replaced entirely — was placeholder
  (`example-topic` etc.) only. Now 11 real topics in Fundamentals
  Review course order (Legal & Ethical Issues; Nursing Process,
  Clinical Judgment & SBAR; Obesity & Metabolic Syndrome; Oxygenation
  & Tracheostomy; Cardiovascular; Diabetic Care & Nutrition; Urinary &
  Bowel Elimination; Integumentary; Neurosensory & Pain; Older Adults
  & Discharge Planning; Palliative, Hospice & End of Life), each with
  10 mustKnow + 10 extraPractice questions (`eaq` left empty — no
  outside question-bank source configured for this course). Every
  question is a vignette/clinical-judgment stem grounded strictly in
  that section's already-published page content — not simple recall.
  Authored via one subagent per topic, each held to the same rules:
  exactly 1 SATA per set, interleaved correct-answer position (no
  slot over ~35% of a set), no duplicate stems, plausible near-miss
  distractors built from the same source material, non-empty
  rationale/topic/source on every question.
- **Validated programmatically before shipping:** all 220 stems
  unique file-wide; every `answer`/`answers` index in range; every
  question has topic/source/non-empty rationale; every set carries
  exactly 1 SATA + 9 single-answer; no answer slot exceeds 33% of any
  set. `node tools/verify.js` Tier 1 independently confirmed 11
  topics / 220 questions and passed clean (173 references across 26
  pages, cache-bust stamps OK).
- **New feature — question-count selector:** `assets/quiz.js` and
  `assets/styles.css` updated. A "Questions: [__] of N" number input
  now appears in the sticky start bar once at least one cell is
  checked, defaulting to the full count of everything selected. Typing
  a smaller number sends only that many to the exam — a random subset
  taken after the existing Fisher-Yates shuffle, not just the first N.
  The input is clamped to `[1, total selected]` and re-clamps down
  automatically if she unchecks cells after setting a custom count.
  Left untouched, behavior is unchanged from before (uses everything
  selected).
- **Verified functionally (Playwright, real Chromium):** table renders
  all 11 real topics with correct 10/10/0 counts; count control stays
  hidden with nothing selected; "Select all" shows "220 questions
  available" and defaults the input to 220; typing 25 updates the
  Start button to "Start exam (25)"; starting the exam actually built
  `window.EXAM_DATA` with exactly 25 questions and rendered a topic
  breakdown; answered a 5-question exam and submitted — graded
  correctly (2/5) with no console or page errors.
- **Shipped:** `data/quiz-bank.js`, `assets/quiz.js`,
  `assets/styles.css` (3 files — the only ones this task touched) sent
  to `~/Desktop/Fall 2026/Study Guide Template/site/...`.

**Open:** The Torture Chamber (`data/torture-chamber.js`,
`torture-chamber.html`) is still placeholder-only — she chose to skip
it for this pass. `must-know.html` is also still placeholder-only, and
the quiz-bank.js header comment's "mustKnow maps 1:1 to a must-know
bullet" invariant does not currently hold (by her choice) since that
page has no real bullets yet — worth revisiting together if/when
must-know.html gets built out for real, so the two can be reconciled.
GitHub Pages remains untouched per standing instruction.

## Build Your Own Exam — per-section question-count control (follow-up)

- **Ask:** the single overall "how many questions total" box from the
  previous entry wasn't enough — she wants to set the count separately
  for each section, not just one number applied across everything
  selected.
- **Change:** replaced the single global count input with a **Count**
  column added to the topic table in `assets/quiz.js` — one number box
  per topic row, enabled once anything in that row is checked,
  defaulting to the full amount available for that row's checked
  cells (e.g. Must Know + Extra Practice = 20), editable down
  independently per topic. Clamped to `[1, that row's available
  total]`; re-clamps automatically if she unchecks a cell and the
  available total drops below her custom number; forgets the custom
  number and resets to "use everything" if a row gets fully
  unchecked and later re-checked. The start-bar summary and the Start
  button now reflect the sum of every row's chosen count.
- **Sampling:** on Start, each topic's checked-cell questions are
  pooled and shuffled independently, then sliced down to that row's
  chosen count — so a small per-row number pulls a random subset of
  that topic, not always the same first few questions — and the whole
  combined exam is shuffled again afterward so topics don't run back
  to back in the same order every time.
- **Verified (Playwright, real Chromium):** checked Must Know + Extra
  Practice for one topic (20 available) and dialed it to 3; checked
  another topic and left it at its 20-question default; start button
  correctly read "23"; typing an out-of-range 999 into a row's Count
  box and blurring clamped it back to that row's max (20); started
  the exam and confirmed the actual `window.EXAM_DATA` composition
  was exactly 3 questions from the first topic and 20 from the
  second, matching the per-row choices exactly. Also re-checked
  Select all / Clear (220 ↔ 0), and re-ran a small graded exam
  end-to-end (submit → correct score, no console/page errors) to
  confirm grading wasn't affected. `node tools/verify.js` Tier 1
  still passes clean.
- **Shipped:** `assets/quiz.js`, `assets/styles.css` (only files this
  follow-up touched) sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/assets/...`.

## Build Your Own Exam — merged the 11 Fundamentals Review topics into one row

- **Ask:** she wants the 11 separate Fundamentals Review rows in the
  Build Your Own Exam table collapsed into a single row — "one big
  topic" — rather than 11 rows to check individually.
- **Change:** `data/quiz-bank.js` now has exactly one topic entry,
  `id: "fundamentals-review"`, `label: "Fundamentals Review"`, whose
  mustKnow (110) and extraPractice (110) sets are the pooled questions
  from all 11 original sections, in the same course order as before.
  Each question keeps its own specific `topic` field (e.g.
  "Cardiovascular", "Legal & Ethical Issues") rather than being
  rewritten to "Fundamentals Review" — `assets/exam.js`'s topic-
  breakdown strip reads that field directly and is independent of how
  questions are grouped into picker rows, so the generated exam still
  reports a per-section count even though the picker now shows one
  row. `window.TOPIC_ORDER` still lists the 11 original section labels
  (unchanged) so that breakdown still displays in course order.
- **New `mergedSubtopics: true` flag + tools/verify.js update:** the
  project's own question-bank checker used to hard-fail any question
  whose `topic` didn't equal its row's `label`, and expected exactly 1
  SATA per row per set — both assumptions this merge intentionally
  breaks. Added a `mergedSubtopics: true` marker on this topic and
  taught `tools/verify.js` about it: when set, the topic-must-match-
  label check is skipped (a per-question topic field is still
  required), and the "1 SATA" check runs per original subtopic instead
  of across the whole merged set. Documented the whole convention in
  quiz-bank.js's header comment for future edits.
- **Verified:** `node tools/verify.js` Tier 1 passes clean — 1 topic,
  220 questions, zero failures, zero notes (all 11 subtopics still
  carry exactly 1 SATA per set). Playwright/Chromium check confirmed
  the picker now renders exactly one row ("Fundamentals Review" ·
  110/110/0), Select all correctly totals 220, dialing the row's Count
  box to 15 produced a real 15-question exam sampled across 9 of the
  11 sections with the topic-breakdown strip still showing the correct
  specific per-section counts in course order, and a graded run (5
  Must-Know-only questions, submit) scored correctly with no console
  errors.
- **Shipped:** `data/quiz-bank.js`, `tools/verify.js` (only files this
  follow-up touched) sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/data/...` and
  `~/Desktop/Fall 2026/Study Guide Template/tools/...`.

## Build Your Own Exam — un-merged back to 11 topics, grouped under one
## "Fundamentals Review" section header, with even/randomized sampling

- **Ask:** two things. (1) Bring the topic-specific rows back — she
  wants the 11 sections distinguishable again like before the merge —
  but grouped under the Fundamentals Review section rather than flat,
  unlabeled rows. (2) When pulling more than 11 questions total from
  that section, split them evenly across the 11 categories and
  randomize which specific questions come from each, instead of one
  flat random draw from the pooled 220 (which the merged version did,
  and could land unevenly — e.g. one earlier test pulled 3 questions
  from one section and only 1 from another out of a 15-question exam).
- **Data:** `data/quiz-bank.js` is back to 11 separate topic entries
  (regenerated from the same 11 source JSON files as the original
  build — no content lost or regenerated), each question's `topic`
  field matching its own row label again — the plain, non-merged
  invariant tools/verify.js already checked for. Each of the 11 now
  also carries a new `section: "Fundamentals Review"` field.
- **New in `assets/quiz.js` — section grouping:** topics sharing a
  `section` string now render clustered under one shared header row
  in the picker table (label + a colored divider), with the 11
  individual topic rows nested visually underneath (indented, with a
  ↳ marker). This is a general mechanism — any future topic can join
  a group just by getting the same `section` value; topics without
  one render exactly as flat standalone rows, unaffected.
- **New — Section total control, with equal/randomized sampling:**
  the section header row gets its own "Section total" number box,
  usable on its own without pre-checking anything. Typing a number
  and committing it (tab/click away, or the stepper arrows)
  auto-selects every set for every topic in the group, then splits
  the total as evenly as possible across the 11 topics — e.g. 33
  produces exactly 3 from each; 15 produces a mix of 1s and 2s
  (whichever topics get the extra is randomized each time, not always
  the same ones); a total under 11 (e.g. 5) selects that many
  *distinct* topics at random, 1 question each, rather than giving
  everyone a fractional share. Each topic's own questions are then
  independently shuffled before slicing to its share, so the specific
  questions pulled from each category are randomized too — this
  reuses the per-row Count logic already built, so a person can still
  fine-tune one topic's count by hand afterward if they want, same as
  before.
- **`tools/verify.js`:** left the `mergedSubtopics` support added
  during the (now-reverted) merge in place — harmless since nothing
  currently sets that flag — in case a future course wants a
  genuinely pooled topic again.
- **Verified:** `node tools/verify.js` Tier 1 clean — 11 topics, 220
  questions, zero failures. Playwright/Chromium checks: table renders
  exactly 1 section header ("Fundamentals Review") with 11 subtopic
  rows nested under it, in the correct course order; section box
  starts enabled with nothing pre-checked; typing 33 → every one of
  the 11 topics got exactly 3 (sum 33), confirmed in the actual
  generated exam's per-topic breakdown; typing 15 → an 11-topic mix of
  1s/2s summing to 15; typing 5 → exactly 5 distinct topics, 1 each;
  typing 220 and 221 both correctly landed on the true max (220,
  20 each) since 221 exceeds what's available; a graded 6-question run
  (section total → submit) scored correctly with no console/page
  errors.
- **Shipped:** `data/quiz-bank.js`, `assets/quiz.js`,
  `assets/styles.css` (only files this follow-up touched) sent to
  `~/Desktop/Fall 2026/Study Guide Template/site/...`.

## Fundamentals Review Practice Exam — split into its own dedicated
## page, out of Build Your Own Exam entirely

- **Ask:** she corrected direction — she does not want the 220
  Fundamentals Review questions living inside the general "Build Your
  Own Exam" tool (Exam Prep group) at all, in any form. She wants a
  practice exam that lives in the Fundamentals Review section of the
  site itself.
- **New page — `fundamentals-review-exam.html`:** a dedicated practice
  exam scoped only to the 11 Fundamentals Review topics, added as
  item 12 in the Fundamentals Review nav group (`assets/site.js`) —
  right after "Palliative, Hospice & End of Life" — and as a 12th tile
  on the homepage's Fundamentals Review section (`index.html`),
  titled "Practice Exam." It is no longer reachable from, or part of,
  Exam Prep / Build Your Own Exam.
- **New data file — `data/fundamentals-review-quiz-bank.js`:** the
  same 11-topic, 220-question content (grouped under one
  "Fundamentals Review" section header with the even-split/randomized
  Section total control built last round) moved here from
  `data/quiz-bank.js`, unchanged otherwise. The new page loads only
  this file.
- **`data/quiz-bank.js` reverted:** back to the template's original
  placeholder-only content (`Example Topic` / `Topic With No
  Questions Yet` / `Other Imported Questions`) — exactly what shipped
  with the project before any Fundamentals Review content was added
  to it. Build Your Own Exam is now back to genuinely empty/example
  content, ready for real Week 1/Week 2/etc. questions whenever those
  get written, with zero Fundamentals Review overlap.
- **`assets/quiz.js`:** both pages share this one script (same picker
  + section-grouping + Count-box logic built over the last two
  rounds), so it needed a small addition — a page can now set
  `window.QUIZ_EXAM_ID` / `window.QUIZ_EXAM_TITLE` before the script
  loads to keep its generated exam's score history separate from any
  other page also using quiz.js. `fundamentals-review-exam.html` sets
  `fund-review-exam` / "Fundamentals Review Exam"; quiz-builder.html
  is unchanged and still defaults to `quiz` / "Custom Exam."
- **`tools/verify.js`:** the single quiz-bank validation block was
  generalized into a `validateQuizBank(file)` function run over a
  list (`QUIZ_BANK_FILES`) instead of hardcoded to one file, so both
  `data/quiz-bank.js` and `data/fundamentals-review-quiz-bank.js` get
  the full invariant check (well-formed questions, no duplicate
  stems, answer-position rotation, SATA-per-set) independently.
- **Verified:** `node tools/verify.js` Tier 1 clean — reports
  `data/quiz-bank.js: 3 topics, 5 questions` (placeholder) and
  `data/fundamentals-review-quiz-bank.js: 11 topics, 220 questions`
  separately, zero failures. `node tools/version.js stamp` picked up
  the new page automatically (27 pages now, was 26). Playwright/
  Chromium checks: quiz-builder.html now shows only the 3 placeholder
  rows with no section header; fundamentals-review-exam.html shows
  the "Fundamentals Review" section header with all 11 subtopic rows
  nested under it and is correctly highlighted as the active "Practice
  Exam" nav item; the Section total control still works (typing 22 →
  exactly 22 selected, confirmed via `window.EXAM_DATA`); a 5-question
  graded run scored correctly with zero console/page errors;
  `window.EXAM_DATA.id`/`.title` on the new page correctly read
  `fund-review-exam` / "Fundamentals Review Exam" instead of the
  generic `quiz` / "Custom Exam".
- **Shipped:** `fundamentals-review-exam.html` (new),
  `data/fundamentals-review-quiz-bank.js` (new), `data/quiz-bank.js`,
  `assets/quiz.js`, `assets/site.js`, `index.html`, `tools/verify.js`
  sent to `~/Desktop/Fall 2026/Study Guide Template/...`.

## Fundamentals Review — moved back into Build Your Own Exam, as one
## row, no section grouping, with equal/randomized sampling built in

- **Ask:** she reversed direction again — put it back in Build Your
  Own Exam after all, as a single row labeled "Fundamentals Review"
  (not the 11 separate topic-specific rows from two rounds ago, and
  not the visual "section header + Section total box" grouping from
  last round either — explicitly "no sections"). Still wants an equal
  pull across the 11 original categories, randomized, whenever more
  than 11 questions are requested from that row. She also referred to
  "the 110 questions" — I confirmed via a quick check-in that this was
  a miscount, not a request to drop content: the real total is 220
  (110 Must Know + 110 Extra Practice), and she confirmed keeping all
  220.
- **Removed the dedicated page from last round:** deleted
  `fundamentals-review-exam.html`, `data/fundamentals-review-quiz-
  bank.js`, the "Practice Exam" nav entry (item 12 in the Fundamentals
  Review group, `assets/site.js`) and its homepage tile (`index.html`)
  — that whole standalone-page approach is superseded by this. The two
  obsolete files couldn't be deleted directly on her Mac (the device
  bridge can only move, not delete), so they're sitting in a new
  `_to_delete/` folder at the Study Guide Template root
  (`fundamentals-review-exam.html`,
  `fundamentals-review-quiz-bank.js`) for her to delete herself.
- **`data/quiz-bank.js`:** back to one topic —
  `id: "fundamentals-review"`, `label: "Fundamentals Review"`,
  `mergedSubtopics: true` — with all 220 questions (110 Must Know +
  110 Extra Practice) in that single row's two sets. Each question
  still carries its own specific `topic` field (e.g. "Cardiovascular")
  so the exam's topic-breakdown strip still reports per-section counts
  even though the picker shows one row.
- **`assets/quiz.js` simplified, not re-complicated:** ripped out all
  the "section grouping" machinery from last round (the header row,
  the separate Section-total box, sectionGroups/sectionAvailable/etc.)
  since there's no longer more than one row to group. In its place,
  the existing per-row Start-exam sampling got smarter: it now checks
  whether the checked pool for a row contains more than one distinct
  `topic` value (i.e., the row is a merged multi-section topic like
  this one). If so, the row's requested count is split as evenly as
  possible across those distinct sub-topics (remainder handed to
  randomly chosen ones) instead of one flat random draw — reusing the
  same `distributeEvenly` helper built two rounds ago, just applied
  automatically per-row instead of via a separate UI control. A normal
  single-topic row (anything else in this bank, or a future one) is
  completely unaffected — same simple shuffle-and-slice as always.
  This is fully data-driven: no `section` field, no config, just
  however many distinct topics happen to be in a row's pool.
- **`tools/verify.js`:** the `QUIZ_BANK_FILES` list (added last round
  to check multiple quiz-bank-style files) is back down to just
  `data/quiz-bank.js`, since the dedicated second file is gone. The
  `mergedSubtopics`-aware validation from two rounds ago stayed as-is
  and applies cleanly to this row.
- **`assets/styles.css`:** removed the now-unused `.qb-section-*` /
  `.qb-subtopic-row` rules from last round.
- **Verified:** `node tools/verify.js` Tier 1 clean — 1 topic, 220
  questions, zero failures. `node tools/version.js stamp` confirms 26
  pages (back down from 27 — the dedicated page is gone;
  `fundamentals-review-exam.html` now 404s as expected).
  Playwright/Chromium checks: the picker shows exactly one row
  ("Fundamentals Review," 110/110/0) with zero section-header rows;
  typing 33 into that row's Count box and starting the exam produced
  exactly 3 questions from every one of the 11 original sections (33
  total, confirmed via the generated exam's actual per-topic
  breakdown); 15 produced an 11-way mix of 1s/2s summing to 15; 5 and
  3 produced that many distinct sections at 1 each; 11 gave exactly 1
  each; 220 gave the true max (20 each); a graded 6-question run
  scored correctly with the exam id correctly back to the plain
  `"quiz"` default, no console/page errors.
- **Shipped:** `data/quiz-bank.js`, `assets/quiz.js`,
  `assets/styles.css`, `assets/site.js`, `index.html`,
  `tools/verify.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.

---

### 2026-08-23 — Fundamentals Review: practice questions on every section page too

She confirmed Build Your Own Exam should stay exactly as it was, and
asked for the same 220 questions to *also* show up as each section's
own practice set, embedded directly on that section's page in the
site's "Fundamentals Review" nav group (the 11 lecture pages, not
Build Your Own Exam): "i want both" — BYOE unchanged, plus per-section
questions "in the area labeled 'fundamentals review' under the
weeks."

- **New `assets/section-quiz.js`:** a small controller each of the 11
  fundamentals pages loads after `data/quiz-bank.js`. It reads two
  globals set inline on the page (`window.SECTION_QUIZ_TOPIC`, the
  exact `topic` string for that section, and `window.SECTION_QUIZ_ID`,
  a short id for that page's own score-history key), filters the
  already-loaded `window.QUIZ_BANK` down to just that topic's Must
  Know + Extra Practice questions (~20/section), shuffles them,
  copies each question with its now-redundant `topic` field stripped
  (so `exam.js`'s topic-breakdown strip doesn't render one lone
  badge), sets `window.EXAM_DATA`, and injects `assets/exam.js`. No
  question content is duplicated anywhere — `data/quiz-bank.js` stays
  the single source of truth for both Build Your Own Exam and all 11
  section pages, so editing a question there updates it everywhere.
- **All 11 `fundamentals-*.html` pages edited** (Legal & Ethical
  Issues, Nursing Process/Clinical Judgment/SBAR, Obesity & Metabolic
  Syndrome, Oxygenation & Tracheostomy, Cardiovascular, Diabetic Care
  & Nutrition, Urinary & Bowel Elimination, Integumentary,
  Neurosensory & Pain, Older Adults & Discharge Planning, Palliative/
  Hospice & End of Life): each gained a "Practice Questions" heading,
  a one-line note pointing back to Build Your Own Exam as the same
  underlying bank, an `#exam-root` mount point (placed right before
  the existing page-flip nav), and closing script tags loading
  `data/quiz-bank.js`, the page's own `SECTION_QUIZ_TOPIC`/
  `SECTION_QUIZ_ID` globals, then `assets/section-quiz.js`. Each
  page's topic string was checked character-for-character against
  what's actually in `data/quiz-bank.js` before wiring it up.
- **Build Your Own Exam:** untouched this round — same merged
  "Fundamentals Review" row from last round, same `assets/quiz.js`,
  same `data/quiz-bank.js`.
- **`data/search-index.js`:** rebuilt (via the Playwright driver
  against a local server) since every fundamentals page gained a new
  "Practice Questions" section — now 209 sections across 20 pages (up
  from 198), 0 bad anchors.
- **Verified:** `node tools/verify.js` Tier 1 clean, unchanged (1
  topic, 220 questions — quiz-bank.js wasn't touched this round).
  Playwright/Chromium checks across three sample pages (Legal &
  Ethical Issues, Cardiovascular, Palliative/Hospice & EOL) confirmed
  each loaded exactly 20 questions with the correct per-page exam id/
  title and a rendered "Practice Questions" heading; a full run on the
  Cardiovascular page — answer every question, submit, grade — scored
  5/20 correctly with zero console or page errors.
- **Shipped:** `assets/section-quiz.js`, `data/search-index.js`, and
  all 11 `fundamentals-*.html` pages sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.

---

### 2026-08-23 (later) — Fundamentals Review item 12: Practice Exam, all sections

She loved the section-page practice questions and asked to leave
everything else as-is, but add a 12th item in the Fundamentals Review
nav group: one practice exam covering all 11 sections at once.
Confirmed via `AskUserQuestion`: all 220 questions (not a shorter
subset), freshly randomized on every visit (not a fixed set).

- **New `assets/practice-exam.js`:** same live-pull pattern as
  `section-quiz.js`, but pulls every question from every topic in
  `data/quiz-bank.js` instead of filtering to one. Shuffles a copy on
  every page load — nothing cached, so each visit is a new run — sets
  `window.EXAM_DATA` (220 questions), and injects `assets/exam.js`.
  Unlike `section-quiz.js`, it does **not** strip each question's
  `topic` field, since this exam spans all 11 sections and the
  topic-breakdown strip in `exam.js` is exactly what makes a
  per-section score useful here.
- **New `fundamentals-review-exam.html`:** a thin shell page (same
  pattern as `quiz-builder.html` — no lecture prose, just an
  `#exam-root` mount) titled "Practice Exam — All Sections." Loads
  `data/quiz-bank.js` then `assets/practice-exam.js`.
- **`assets/site.js`:** added item 12 to the Fundamentals Review nav
  group (`fund-review-exam`, "Practice Exam — All Sections" →
  `fundamentals-review-exam.html`) — this also auto-wires the
  prev/next page-flip footer links site-wide (item 11 → 12 → Exam
  Prep's first item), no extra code needed.
- **`index.html`:** added tile 12 to the Fundamentals Review section
  with a one-line description, matching the pattern already used in
  the Exam Prep grid.
- **Search index:** deliberately left untouched. This new page is a
  tool shell with no prose content, same as `quiz-builder.html`,
  which was never in `build-search-index.html`'s `PAGES` list either
  — re-ran the index build to confirm it still produces the same 20
  pages / 209 sections / 0 bad anchors either way.
- **Verified:** `node tools/version.js stamp` — 27 pages now stamped
  (up from 26). `node tools/verify.js` Tier 1 clean (1 topic, 220
  questions, unchanged; 213 links checked). Playwright/Chromium
  checks on the new page: `window.EXAM_DATA` has exactly 220
  questions with exactly 20 from each of the 11 sections; the
  page-flip nav shows item 12 in the right spot with correct
  prev/next; reloading the page produces a different question order
  (confirming fresh randomization, not a cached fixed set); a full
  answer-everything → submit → grade run scored 45/220 correctly with
  zero console or page errors.
- **Shipped:** `assets/practice-exam.js`, `fundamentals-review-
  exam.html`, `assets/site.js`, `index.html` sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.

---

### 2026-08-23 (later still) — Week 1 questions written; whole bank audited for giveaway answers

She asked for practice questions on every Week 1 topic — on the page
and in Build Your Own Exam — written NCLEX NGN / clinical-judgment
style at moderate-to-hard difficulty, one SATA per topic, drawn only
from what the lectures actually cover, with **no leading stems and no
giveaway options** (specifically: the correct answer must not be
longer or more descriptive than the distractors) and varied answer
positions. She also asked for the existing Fundamentals questions to
be held to the same standard.

- **80 new Week 1 questions** in `data/quiz-bank.js` — 20 per topic
  (10 Must Know + 10 Extra Practice), across four new ordinary
  (non-merged) topic rows: Respiratory Labs & Diagnostics, Upper
  Respiratory Problems, Head & Neck Cancer, Lower Respiratory
  Problems. Bank is now 5 rows / 300 questions. `window.TOPIC_ORDER`
  puts the four Week 1 labels ahead of the 11 Fundamentals sections,
  in course order.
- **One SATA per set** (so 2 per topic — one in Must Know, one in
  Extra Practice), which is the file's existing convention and what
  `tools/verify.js` checks for; the alternative, a single SATA per
  topic, would have tripped that check.
- **Content sourced only from the four lecture pages.** Where the page
  itself was internally inconsistent — the pneumothorax flashcard
  lists both an increased heart rate and abrupt shortness of breath,
  while the danger callout assigns the heart rate to hemorrhage — the
  questions follow the callout, which is the more specific statement.
- **Practice Questions embedded on all four Week 1 pages**, using the
  same `assets/section-quiz.js` controller the Fundamentals pages
  use — each page sets `SECTION_QUIZ_TOPIC` / `SECTION_QUIZ_ID` and
  the script filters the shared bank at runtime, so nothing is
  duplicated.
- **`assets/practice-exam.js` scoped to the fundamentals row.** It
  previously pulled *every* topic in the bank, which was correct when
  the bank held only Fundamentals — the moment Week 1 was added it
  would have silently absorbed those 80 questions into the
  Fundamentals practice exam. It now filters on topic id
  (`fundamentals-review`, overridable via
  `window.PRACTICE_EXAM_TOPIC_ID`). Verified the exam is still exactly
  220 questions from exactly 11 sections with no Week 1 leakage.
- **Audited all 300 questions** with a new script
  (`/tmp/audit_questions.js`, scratch — not part of the repo) that
  flags four defects: the correct option being the longest and ≥20%
  longer than the distractors, the correct option being conspicuously
  the shortest, SATA keys running long as a group, and a distinctive
  word shared by the stem and *only* the correct option.
- **The Fundamentals bank had this defect badly.** 111 questions had
  the correct answer as the longest option — median 46% longer than
  the distractors, worst case 319%. That is exactly the "pick the
  wordiest one" tell she flagged, and it was pickable without knowing
  any content. 152 Fundamentals questions were revised: options
  rebalanced to within roughly ±15% of each question's average length,
  detail trimmed out of the keyed option moved into the rationale
  where it wasn't already there. Stems, correct answers and answer
  indices were left untouched, and every change was validated
  programmatically (same option count, identical answer key, no
  duplicate options, and a word-overlap check on each keyed option to
  catch any accidental answer swap — 14 heavy rewrites were reviewed
  by hand and all preserved the original fact).
- **Remaining audit flags are false positives** — 28 questions where
  the stem and correct option share a word, but the word is just the
  question's own subject (a metabolic-syndrome question naming the
  lab values from its own stem) or the word "apply" from "Select all
  that apply." One BMI question keeps a one-word answer set
  (Overweight / Obese / Extremely obese / Normal weight) that can't be
  length-matched and carries no descriptiveness signal; the audit
  script now exempts short category-label option sets rather than
  distorting the content to satisfy a metric.
- **Answer positions:** every one of the 30 subtopic/set groups is
  spread across all four slots (typically 2/3/2/2 out of 9
  single-answer questions). No slot holds more than a third anywhere,
  so `tools/verify.js` reports no clustering.
- **Verified:** `node tools/verify.js` Tier 1 clean (5 topics, 300
  questions, 213 references across 27 pages, no SATA or clustering
  notes). Search index rebuilt — 20 pages, 213 sections (up from
  209), 0 bad anchors. Playwright/Chromium: each Week 1 page loads
  exactly 20 questions with 2 SATA, the right exam id and a rendered
  "Practice Questions" heading; Build Your Own Exam shows 5 rows
  (Fundamentals Review 110/110, then the four Week 1 topics at
  10/10); selecting everything builds a 300-question exam spanning all
  15 sections; the Fundamentals practice exam is still 220 across 11
  sections with zero Week 1 leakage; a full answer-and-submit run on
  the Lower Respiratory page graded correctly with no console or page
  errors.
- **Shipped:** `data/quiz-bank.js`, `data/search-index.js`,
  `assets/practice-exam.js`, and the four `week1-*.html` pages sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.

---

### 2026-08-23 (later still) — Fundamentals Review item 12: Big Picture Overview

She asked for a big-picture overview of the Fundamentals Review sitting
between section 11 and the practice questions, and pointed at the
`NUR326 Study Guide` project as the model. Found
`review-big-picture-overview.html` in that project on her Desktop and
built the NUR 334 equivalent to the same pattern.

- **New `fundamentals-big-picture-overview.html`**, slotted in as item
  12 of the Fundamentals Review group; the Practice Exam moved from 12
  to 13. Same structure as the NUR326 page:
  - an intro making clear the page teaches nothing new — it's a map;
  - **Five Clusters, Not Eleven Separate Topics** — the 11 sections
    grouped into The Professional Frame (Legal/Ethical + Nursing
    Process), Airway/Breathing/Circulation (Oxygenation +
    Cardiovascular + Neurosensory & Pain), Intake & Metabolism
    (Obesity + Diabetic Care), Elimination & Skin (Urinary/Bowel +
    Integumentary), and Care Beyond the Admission (Older Adults +
    Palliative);
  - **The 11 Topics at a Glance** — one-line takeaway each, linked;
  - **Ideas That Show Up in More Than One Topic** — nine recurring
    ideas, each with where it's taught in full (deep-linked to the
    exact section anchor) and where it resurfaces;
  - **High-Alert Safety Rules — All in One Place** — all 8
    `callout-danger` blocks across the 11 pages condensed to a phrase
    each, deep-linked;
  - a closing card on the patterns that repeat across those rules
    ("know the current number before you give the drug", "more isn't
    safer", "ABCs before the thing you were called about", "in an older
    adult the textbook presentation is the exception", "the
    conversation is the intervention").
- **No flashcards and no quiz questions on this page**, matching the
  NUR326 original and the Must Know exception — it isn't new lecture
  content, so there's nothing to test that isn't already tested on the
  source page.
- **Content is derived, not invented.** The cluster/at-a-glance/
  cross-reference tables were built from the actual `h2.block`
  structure of the 11 pages, and the safety table from the actual
  `callout-danger` text. Anchors were taken from the real generated
  anchors in `data/search-index.js` rather than guessed — note the
  site's slugifier drops "&" entirely (`scope-of-practice-the-nurse-
  practice-act`), it does not turn it into "and".
- **`assets/site.js`** — nav item 12 added, Practice Exam renumbered to
  13. **`index.html`** — matching homepage tile added and the exam tile
  renumbered. **`build-search-index.html`** — the new page added to
  `PAGES` (unlike the exam shell, this one has real prose worth
  indexing).
- **Verified:** `node tools/verify.js` Tier 1 clean, 256 references
  across 28 pages. Search index rebuilt — 21 pages, 218 sections, 0 bad
  anchors. Playwright/Chromium: page renders with its 4 sections, zero
  flashcards and no exam root, prev/next correctly reads Palliative →
  Big Picture Overview → Practice Exam, the nav group reads 11/12/13 in
  order, and **all 15 cross-page anchor links were resolved against the
  live DOM of their target pages** — every one lands on a real section.
  No console or page errors.
- **Shipped:** `fundamentals-big-picture-overview.html`,
  `assets/site.js`, `index.html`, `build-search-index.html`,
  `data/search-index.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.

---

### 2026-08-23 (later still) — The Torture Chamber, built on Week 1

She asked for a Torture Chamber like the NUR326 one, filled with Week 1
content: every question select-all-that-apply, NCLEX NGN /
clinical-judgment style, extremely hard, several distractors, no
leading stems, no giveaway options, lecture material only, varied
keys — "a true challenge."

- **Read the NUR326 build first** (`site/data/torture-chamber.js` in
  that project on her Desktop) rather than inventing a format. Our
  template already ships the same header — the four anti-giveaway
  rules and the ordering spec — so the rules were followed as written
  rather than rewritten.
- **`data/torture-chamber.js` rebuilt**: the 3 demo questions replaced
  with 20 real ones, 5 from each of the four Week 1 topics. All 20 are
  SATA. `torture-chamber.html` needed no change — it already loads this
  data file and carries `class="torture"`.
- **Answer-count spread** (rule 2): 1 correct x2, 2 x3, 3 x5, 4 x5,
  5 x3, plus two all-correct items (one 6-option, one 8-option).
  Option counts: 6-option x4, 7-option x9, 8-option x7 — so neither
  "pick four" nor "4 of 5" is a usable shortcut, and no answer key
  repeats more than 3 times across the exam.
- **Difficulty devices**, beyond recall: thresholds that must be
  applied rather than remembered (one question puts all three
  tuberculin induration cut-offs against eight readings, each tied to a
  different risk category); expected-versus-report discrimination
  (blood-tinged mucus and a sore throat after bronchoscopy sitting
  beside an unexplained tachycardia and abrupt dyspnea); right fact
  attributed to the wrong thing (MRI contrast called iodine-based,
  protamine offered for warfarin, the artificial larynx's advantages
  attributed to esophageal speech); and flipped signs (leukopenia for
  leukocytosis, a "shift to the left" described as mature neutrophils,
  supine positioning claimed to hold the mandible forward).
- **Validated against the file's own four rules** with a purpose-built
  checker (`/tmp/check_torture.js`, scratch — not in the repo). First
  pass flagged three questions for length bias (ratios 0.87, 1.15,
  1.18) and one stem-word echo ("retention" appearing only in a keyed
  option). All four were fixed by trimming keyed options and giving
  distractors comparable specificity; the re-run is clean — every
  question's correct-to-distractor length ratio now sits between 0.89
  and 1.10, and no stem word appears only in the key.
- **Ordering** satisfies the full spec, including the minimum-gap-3
  rule that the NUR326 build had to relax: 4 topics x 5 questions in 20
  slots makes it feasible, and the actual minimum gap is 3. No adjacent
  questions share a topic, the two all-correct items sit at positions
  10 and 14, the thirds are balanced, and the sequence is not a fixed
  rotation.
- **Verified:** `node tools/verify.js` Tier 1 clean —
  `data/torture-chamber.js: 20 questions, 20 SATA`.
  Playwright/Chromium on the live page: renders 143 checkboxes and zero
  radio buttons (confirming every question is SATA), the oxblood
  `torture` theme is applied, and the topic-breakdown strip renders.
  Two grading runs — answering every question straight from the answer
  key scored **20/20**, which proves every answer index is correct, and
  ticking only the first box of each scored **0/20**, confirming
  all-or-nothing SATA grading and that no question keys to exactly [0].
  No console or page errors.
- **Search index not rebuilt** — the torture chamber is an exam shell
  with no prose, and like `quiz-builder.html` it isn't in
  `build-search-index.html`'s `PAGES` list.
- **Shipped:** `data/torture-chamber.js` sent to
  `~/Desktop/Fall 2026/Study Guide Template/...`.
