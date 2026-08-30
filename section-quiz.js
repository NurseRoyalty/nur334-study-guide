/* ============================================================
   section-quiz.js — embeds a fixed practice-question set on a single
   Fundamentals Review page.

   Pulls live from data/quiz-bank.js instead of duplicating question
   content into a per-page file — quiz-bank.js is the one source of
   truth, also used by quiz-builder.html's "Build Your Own Exam"
   picker, so editing a question there updates it everywhere.

   Set these two globals before this script loads (data/quiz-bank.js
   must already be loaded too):
     window.SECTION_QUIZ_TOPIC   the exact `topic` field these
                                  questions carry in quiz-bank.js
                                  (e.g. "Cardiovascular")
     window.SECTION_QUIZ_ID      short id for this page's own score
                                  history key (e.g. "fund-cardiovascular")
   ============================================================ */
(function () {
  const wantedTopic = window.SECTION_QUIZ_TOPIC;
  const bank = window.QUIZ_BANK;
  const root = document.getElementById("exam-root");
  if (!wantedTopic || !bank || !root) return;

  const all = [];
  bank.topics.forEach(t => {
    ["mustKnow", "extraPractice", "eaq"].forEach(key => {
      ((t.sets && t.sets[key]) || []).forEach(q => { if (q.topic === wantedTopic) all.push(q); });
    });
  });
  if (!all.length) return;

  // Shuffle once per page load — copies each question (so the shared
  // quiz-bank.js objects are never mutated) and drops the `topic` field,
  // since every question on this page is already the same topic as the
  // page itself; keeping it would just render a single redundant badge
  // in exam.js's topic-breakdown strip.
  const qs = all.slice();
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }

  window.EXAM_DATA = {
    id: (window.SECTION_QUIZ_ID || wantedTopic.toLowerCase().replace(/[^a-z0-9]+/g, "-")) + "-review",
    title: wantedTopic + " — Practice Questions",
    questions: qs.map(q => ({ ...q, topic: undefined }))
  };

  // Cache-bust token read off our own <script src="assets/section-quiz.js?v=…">,
  // so the exam engine we inject shares the page's version automatically.
  const selfScript = document.currentScript || document.querySelector('script[src*="assets/section-quiz.js"]');
  const m = selfScript && /[?&]v=([^&]+)/.exec(selfScript.src || "");
  const s = document.createElement("script");
  s.src = "assets/exam.js" + (m ? "?v=" + m[1] : "");
  document.body.appendChild(s);
})();
