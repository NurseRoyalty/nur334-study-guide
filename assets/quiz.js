/* ============================================================
   quiz.js — "Build Your Own Exam" page controller.
   Renders a topic x question-set table from window.QUIZ_BANK (rows =
   topics, columns = the three question sets, plus a per-row "Count"
   column). On Start, whichever cells are checked are assembled —
   sampled down to each row's chosen count — shuffled, set as
   window.EXAM_DATA, and handed off to the shared exam engine
   (assets/exam.js) for rendering, grading, rationales, and the score
   history (saved under "quiz").

   A topic whose questions carry more than one distinct `topic` field
   (see quiz-bank.js's "mergedSubtopics" topics, e.g. "Fundamentals
   Review" pooling all 11 lecture sections into one row) gets special
   sampling on Start: once more than 11 [the number of distinct
   sub-topics] questions are requested from that row, the count is
   split as evenly as possible across those sub-topics instead of one
   flat random draw — see distributeEvenly. Detected automatically
   from the data, no per-row configuration needed.
   ============================================================ */
// Cache-bust token read off our own <script src="assets/quiz.js?v=…">, so the
// exam engine injected on Start shares the page's version automatically.
const QUIZ_VER = (function () {
  const s = document.currentScript || document.querySelector('script[src*="assets/quiz.js"]');
  const m = s && /[?&]v=([^&]+)/.exec(s.src || "");
  return m ? m[1] : "";
})();

(function () {
  const bank = window.QUIZ_BANK;
  const sel = document.getElementById("quiz-select");
  if (!bank || !sel) return;
  const topics = bank.topics;
  const topicById = {};
  topics.forEach(t => { topicById[t.id] = t; });

  /* The three question-set columns. Both the column headings and the
     legend beneath the intro line come from data/quiz-bank.js, so the
     page can be relabelled for a different course without touching this
     file. Rename, reorder, or drop a column by editing `columns` there.
     If the third set has no source for your course, just leave every
     topic's third set empty and the column renders greyed out. */
  const SET_COLUMNS = bank.columns || [
    { key: "mustKnow",      label: "Must Know",      blurb: "Everything the lectures explicitly stated or heavily hinted will be tested." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from your publisher's question bank, sorted by topic, with duplicates removed." }
  ];
  function setQuestions(topic, key) { return (topic.sets && topic.sets[key]) || []; }
  function countOf(topic, key) { return setQuestions(topic, key).length; }
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Split `total` as evenly as possible across `ids`, each capped by
  // availFn(id). Any remainder — and any shortfall from an id running out
  // of room — is handed to randomly chosen ids with room left, so a total
  // that isn't a multiple of the group size still comes out fair rather
  // than always favoring the same ids.
  function distributeEvenly(total, ids, availFn) {
    const result = {};
    ids.forEach(id => { result[id] = 0; });
    let remaining = Math.max(0, total);
    let active = shuffled(ids.filter(id => availFn(id) > 0));
    while (remaining > 0 && active.length) {
      const share = Math.floor(remaining / active.length);
      if (share === 0) {
        shuffled(active).slice(0, remaining).forEach(id => { result[id] += 1; });
        remaining = 0;
        break;
      }
      active.forEach(id => {
        const room = availFn(id) - result[id];
        const give = Math.min(share, room);
        result[id] += give;
        remaining -= give;
      });
      active = active.filter(id => availFn(id) - result[id] > 0);
    }
    return result;
  }

  let html = '<div class="quiz-picker">';
  html += '<p class="note">Select any combination of question sets from the below table to build a custom practice exam. Once a topic has anything checked, use its <b>Count</b> box to pull fewer than every available question from it.</p>';
  html += '<ul class="qb-legend">' +
    SET_COLUMNS.filter(c => c.blurb).map(c => `<li><b>${c.label}:</b> ${c.blurb}</li>`).join("") +
    '</ul>';
  html += '<div class="quiz-actions-top"><button type="button" class="btn btn-ghost" data-pick="all">Select all</button><button type="button" class="btn btn-ghost" data-pick="none">Clear</button></div>';

  html += '<div class="table-wrap no-stack qb-table-wrap"><table class="qb-table"><thead><tr><th>Topic</th>';
  SET_COLUMNS.forEach(c => {
    html += `<th>${c.label}</th>`;
  });
  html += '<th>Count</th>';
  html += '</tr></thead><tbody>';

  html += '<tr class="qb-selectall-row"><td class="term">Select All</td>';
  SET_COLUMNS.forEach(c => {
    html += `<td><label class="qb-cell">` +
      `<input type="checkbox" class="qb-col-all" data-set="${c.key}">` +
      `<span>Select All</span></label></td>`;
  });
  html += '<td></td>';
  html += '</tr>';

  topics.forEach(t => {
    html += `<tr>`;
    const wk = t.week ? `<span class="qb-week">Week ${t.week}</span>` : '';
    html += `<td class="term">${wk}${t.label}</td>`;
    SET_COLUMNS.forEach(c => {
      const n = countOf(t, c.key);
      const empty = n === 0;
      html += `<td><label class="qb-cell${empty ? " qb-empty" : ""}">` +
        `<input type="checkbox" class="qb-topic-check" data-topic="${t.id}" data-set="${c.key}"${empty ? " disabled" : ""}>` +
        `<span>${n}</span></label></td>`;
    });
    html += `<td class="qb-qty-cell">` +
      `<input type="number" class="qb-qty-input" data-topic="${t.id}" min="1" step="1" inputmode="numeric" disabled>` +
      `<span class="qb-qty-max"></span>` +
      `</td>`;
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  html += '<div class="quiz-start-bar">';
  html += '<span class="quiz-summary">No question sets selected</span>';
  html += '<button type="button" class="btn btn-primary" data-act="start" disabled>Start exam</button>';
  html += '</div>';
  sel.innerHTML = html;

  const boxes = Array.from(sel.querySelectorAll('.qb-table input.qb-topic-check'));
  const colAllBoxes = Array.from(sel.querySelectorAll('.qb-table input.qb-col-all'));
  const qtyInputs = {}; // topicId -> <input class="qb-qty-input">
  const qtyMaxLabels = {}; // topicId -> <span class="qb-qty-max">
  Array.from(sel.querySelectorAll('.qb-table input.qb-qty-input')).forEach(inp => {
    qtyInputs[inp.dataset.topic] = inp;
    qtyMaxLabels[inp.dataset.topic] = inp.closest('.qb-qty-cell').querySelector('.qb-qty-max');
  });
  const startBtn = sel.querySelector('[data-act="start"]');
  const summary = sel.querySelector(".quiz-summary");
  const rowTouched = new Set(); // topic ids whose Count box the person has edited themselves

  // How many questions are currently available for a topic — the sum of
  // whichever of its sets are checked.
  function rowAvailable(topicId) {
    return boxes.filter(b => b.dataset.topic === topicId && b.checked)
      .reduce((s, b) => s + countOf(topicById[topicId], b.dataset.set), 0);
  }

  // How many questions to actually pull from a topic: the person's chosen
  // count for that row (clamped to [1, available]), or everything
  // available if they haven't touched that row's Count box.
  function rowDesired(topicId) {
    const avail = rowAvailable(topicId);
    if (avail === 0) return 0;
    if (!rowTouched.has(topicId)) return avail;
    const v = parseInt(qtyInputs[topicId].value, 10);
    if (!Number.isFinite(v) || v < 1) return 1;
    return Math.min(v, avail);
  }

  function totalDesired() {
    return topics.reduce((s, t) => s + rowDesired(t.id), 0);
  }

  function refreshSummaryAndButton() {
    const n = totalDesired();
    const chosenTopicCount = topics.filter(t => rowAvailable(t.id) > 0).length;
    summary.textContent = chosenTopicCount
      ? `${chosenTopicCount} topic${chosenTopicCount > 1 ? "s" : ""} · ${n} question${n !== 1 ? "s" : ""} selected`
      : "No question sets selected";
    startBtn.disabled = n === 0;
    startBtn.textContent = n ? `Start exam (${n})` : "Start exam";
  }

  function syncColumnCheckbox(colAllBox) {
    const key = colAllBox.dataset.set;
    const colBoxes = boxes.filter(b => b.dataset.set === key && !b.disabled);
    if (!colBoxes.length) {
      colAllBox.checked = false;
      colAllBox.indeterminate = false;
      return;
    }
    const checkedCount = colBoxes.filter(b => b.checked).length;
    colAllBox.checked = checkedCount === colBoxes.length;
    colAllBox.indeterminate = checkedCount > 0 && checkedCount < colBoxes.length;
  }

  function update() {
    colAllBoxes.forEach(syncColumnCheckbox);

    topics.forEach(t => {
      const avail = rowAvailable(t.id);
      const input = qtyInputs[t.id];
      const maxLabel = qtyMaxLabels[t.id];
      if (avail > 0) {
        input.disabled = false;
        input.max = String(avail);
        // Default to the full row unless the person has customized it;
        // if they have, only clamp down when it now exceeds availability
        // (checking/unchecking a different row shouldn't reset this one).
        if (!rowTouched.has(t.id) || !input.value) {
          input.value = String(avail);
        } else if (parseInt(input.value, 10) > avail) {
          input.value = String(avail);
        }
        maxLabel.textContent = `of ${avail}`;
      } else {
        input.disabled = true;
        input.value = "";
        maxLabel.textContent = "";
        rowTouched.delete(t.id); // fully unchecked -> forget any custom count, start fresh next time
      }
    });

    refreshSummaryAndButton();
  }

  sel.addEventListener("change", e => {
    if (e.target.matches('.qb-table input.qb-topic-check')) {
      update();
      return;
    }
    if (e.target.matches('.qb-table input.qb-col-all')) {
      const key = e.target.dataset.set;
      const checked = e.target.checked;
      boxes.filter(b => b.dataset.set === key && !b.disabled).forEach(b => { b.checked = checked; });
      update();
    }
  });
  sel.addEventListener("click", e => {
    const pick = e.target.closest("[data-pick]");
    if (pick) {
      boxes.forEach(b => { if (!b.disabled) b.checked = pick.dataset.pick === "all"; });
      update();
    }
  });
  sel.addEventListener("input", e => {
    if (e.target.matches('.qb-qty-input')) {
      rowTouched.add(e.target.dataset.topic);
      refreshSummaryAndButton();
    }
  });
  // focusout (not blur) so it bubbles and delegation works.
  sel.addEventListener("focusout", e => {
    if (!e.target.matches('.qb-qty-input')) return;
    const topicId = e.target.dataset.topic;
    const avail = rowAvailable(topicId);
    if (avail === 0) return;
    const v = parseInt(e.target.value, 10);
    e.target.value = String(!Number.isFinite(v) || v < 1 ? 1 : Math.min(v, avail));
    refreshSummaryAndButton();
  });

  startBtn.addEventListener("click", () => {
    const chosenTopicIds = topics.map(t => t.id).filter(id => rowAvailable(id) > 0);
    if (!chosenTopicIds.length) return;
    let finalQs = [];
    chosenTopicIds.forEach(topicId => {
      const t = topicById[topicId];
      const pool = [];
      boxes.filter(b => b.dataset.topic === topicId && b.checked)
        .forEach(b => setQuestions(t, b.dataset.set).forEach(q => pool.push(q)));
      const want = rowDesired(topicId);

      // A row can internally span more than one original sub-topic (see
      // quiz-bank.js's "mergedSubtopics" topics — e.g. "Fundamentals
      // Review" pooling 11 lecture sections into one row, each question
      // still tagged with its own specific `topic`). Detected here purely
      // from the data: if the checked pool has more than one distinct
      // `topic` value, split the row's count evenly across them instead
      // of one flat random draw, so a large exam still samples every
      // sub-topic rather than skewing toward whichever the shuffle favors.
      const subTopics = Array.from(new Set(pool.map(q => q.topic).filter(Boolean)));
      if (subTopics.length > 1) {
        const bySubtopic = {};
        subTopics.forEach(st => { bySubtopic[st] = pool.filter(q => q.topic === st); });
        const dist = distributeEvenly(want, subTopics, st => bySubtopic[st].length);
        subTopics.forEach(st => {
          finalQs.push(...shuffled(bySubtopic[st]).slice(0, dist[st] || 0));
        });
      } else {
        // Shuffle this topic's pool, then take only as many as its Count
        // box asks for — a random subset, not always the same first few.
        finalQs.push(...shuffled(pool).slice(0, want));
      }
    });
    if (!finalQs.length) return;
    // Shuffle again across topics so the exam doesn't run section-by-section.
    finalQs = shuffled(finalQs);
    // A page can set window.QUIZ_EXAM_ID / QUIZ_EXAM_TITLE before this
    // script loads to keep its score history separate from other pages
    // that also use quiz.js. Defaults match the original Build Your Own
    // Exam behavior.
    window.EXAM_DATA = { id: window.QUIZ_EXAM_ID || "quiz", title: window.QUIZ_EXAM_TITLE || "Custom Exam", questions: finalQs, history: false };
    sel.classList.add("hidden");
    const s = document.createElement("script");
    s.src = "assets/exam.js" + (QUIZ_VER ? "?v=" + QUIZ_VER : "");
    document.body.appendChild(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  update();
})();
