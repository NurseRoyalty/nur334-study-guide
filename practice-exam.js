/* ============================================================
   practice-exam.js — embeds the fixed all-sections Fundamentals
   Review practice exam (item 12 in the Fundamentals Review group).

   Pulls every Must Know + Extra Practice question from every one of
   the 11 Fundamentals Review sections live from data/quiz-bank.js —
   same 220-question bank Build Your Own Exam and the 11 individual
   section pages use — so nothing is duplicated. Freshly shuffled on
   every page load (not a fixed set), so each visit is a new run.
   Each question keeps its own `topic` field (unlike section-quiz.js,
   which strips it) so exam.js's topic-breakdown strip reports a
   per-section score across all 11 sections.
   ============================================================ */
(function () {
  const bank = window.QUIZ_BANK;
  const root = document.getElementById("exam-root");
  if (!bank || !root) return;

  // Only the Fundamentals Review row — the bank also holds the Week 1
  // topics (and will hold later weeks), and this exam is the fundamentals
  // one. Overridable per page via window.PRACTICE_EXAM_TOPIC_ID.
  const wantedId = window.PRACTICE_EXAM_TOPIC_ID || "fundamentals-review";
  const all = [];
  bank.topics.filter(t => t.id === wantedId).forEach(t => {
    ["mustKnow", "extraPractice", "eaq"].forEach(key => {
      ((t.sets && t.sets[key]) || []).forEach(q => all.push(q));
    });
  });
  if (!all.length) return;

  // Shuffle a copy — never mutate the shared quiz-bank.js objects.
  const qs = all.slice();
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }

  window.EXAM_DATA = {
    id: "fund-review-practice-exam",
    title: "Fundamentals Review — Practice Exam (All Sections)",
    questions: qs
  };

  // Cache-bust token read off our own <script src="assets/practice-exam.js?v=…">,
  // so the exam engine we inject shares the page's version automatically.
  const selfScript = document.currentScript || document.querySelector('script[src*="assets/practice-exam.js"]');
  const m = selfScript && /[?&]v=([^&]+)/.exec(selfScript.src || "");
  const s = document.createElement("script");
  s.src = "assets/exam.js" + (m ? "?v=" + m[1] : "");
  document.body.appendChild(s);
})();
