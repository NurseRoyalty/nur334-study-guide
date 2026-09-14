/* ============================================================
   site.js — shared per-page bootstrap for every page.
   Responsibilities:
     • the top navigation bar (single source of truth = SITE below),
       active-page highlighting, and the prev/next footer links
     • site chrome shared by all pages: dark-mode toggle, reading
       progress bar, back-to-top button, and the site search
     • an auto "On this page" table of contents on long content pages

   Desktop: Home + one top-level item per group; each group's pages
   appear in a hover dropdown. Mobile: a hamburger toggles a slide-
   down menu; tapping a group expands its pages.

   TO ADD A NEW PAGE (e.g. a new topic or practice exam):
     1. Create the .html file (copy an existing topic/exam page).
     2. Add one entry to the matching group's `items` array below.
   Everything else (menu, active state, prev/next) updates itself.
   The site search reads a prebuilt index from data/search-index.js;
   regenerate that after big content changes (see CLAUDE.md).
   ============================================================ */
/* Prefix for every localStorage key this site writes (exam scores,
   flashcard progress, in-progress exam answers). Change it per course so
   two study guides opened in the same browser never collide. site.js
   loads before exam.js and study.js on every page, so setting it here is
   enough. */
window.STORE_PREFIX = "nur334";

const SITE = {
  /* ---- EDIT THESE TWO for your course ---- */
  brand: "NUR334 Med Surg I",  // big text, top-left of the nav bar
  course: "Study Guide",              // small text under it

  home: { id: "home", title: "Home", file: "index.html" },

  /* ---- ONE ENTRY PER PAGE. This is the only place pages are listed. ----
     Adding an entry here wires up: the desktop dropdown, the mobile
     accordion, the "you are here" highlight, and the prev/next footer
     links. Order inside a group is the order they appear.
       id    - must match the page's <body data-page="..."> (and is used
               by search + per-page CSS hooks)
       num   - the little number badge in the dropdown
       title - display name; use &amp; for an ampersand
       file  - the filename, relative to this folder                     */
  groups: [
    {
      label: "Week 1",
      items: [
        { id: "week1-upper-respiratory", num: "1", title: "Upper Respiratory
