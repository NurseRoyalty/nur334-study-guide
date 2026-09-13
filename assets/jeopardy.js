/* ============================================================
   assets/jeopardy.js — Week 2 Jeopardy game engine.

   Reads window.JEOPARDY_WEEK2 (data/jeopardy-week2.js) and renders a
   board into #jp-root. This file has ZERO Week 2 content of its own —
   every category name, clue, answer, and rationale comes from the data
   file, so the bank can be expanded/edited later without touching any
   of this code (the site's standing "keep content and engine separate"
   pattern, same idea as quiz-bank.js + quiz.js/exam.js).

   Game shape, per the spec this was built to:
   - Each game randomly picks 5 of the 6 Week 2 categories, 5 values
     each (100/200/300/400/500) = 25 clues, difficulty rising with value.
   - 1 Player or 2 Players (segmented toggle). In 2-player mode, players
     alternate turns picking a square; a correct answer keeps control
     (same player picks next), an incorrect answer passes the turn —
     the same "control" rule real Jeopardy uses. Scores are tracked
     separately per player.
   - Click a value -> question -> "Show Answer" -> answer + rationale ->
     self-grade "Got It Right" / "Got It Wrong". Used squares disable.
   - "New Game" reshuffles categories AND re-picks clues. Repeat
     avoidance is a rotating CYCLE per category+value pool (not just
     "last round"): every clue in a pool must be used once before any
     of them repeats, so with a large bank you can play many games in a
     row without seeing the same question twice. The cycle persists in
     localStorage across games (and page reloads).
   - "Reset Game" clears score/progress on the CURRENT board without
     reshuffling — a quick do-over of the same 25 questions.
   - Per-category correct/answered breakdown, a game-complete summary
     (score, accuracy, winner in 2-player mode), and cross-game score
     history all persist in localStorage, same pattern as the site's
     other exam pages.
   ============================================================ */
(function () {
  "use strict";

  var STORE_PREFIX = window.STORE_PREFIX || "nur326";
  var LS_KEY = STORE_PREFIX + "-jeopardy-v2";
  var CYCLE_KEY = STORE_PREFIX + "-jeopardy-cycle";
  var HIST_KEY = STORE_PREFIX + "-jeopardy-history";
  var VALUES = [100, 200, 300, 400, 500];
  var NUM_CATEGORIES = window.NUM_CATEGORIES || 5;

  var root = document.getElementById("jp-root");

  // Exposed for the project's Node-based test harness only (function
  // declarations below are hoisted, so this is safe to run even when
  // #jp-root isn't on the page). Browsers never define `module`, so this
  // is a no-op in production.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shuffle: shuffle, pickClue: pickClue, buildBoard: buildBoard };
  }
  if (!root) return;

  var state = null; // { mode, board:[{catId,catName,slots:[{value,clue,state,by}]}], scores:[...], turn, answered, total, recorded }
  var mode = "1p"; // "1p" | "2p" — the pending/current player-count mode
  var activeSlot = null; // {catIndex, valIndex} of the clue currently open in the modal
  var revealed = false;

  // ---------------------------------------------------------------
  // data helpers
  // ---------------------------------------------------------------
  function bankCategories() {
    return (window.JEOPARDY_WEEK2 && window.JEOPARDY_WEEK2.categories) || [];
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // cycleMap: { "<catId>|<value>": [clue ids already used this cycle] }
  // Picks a clue not yet used in the pool's current cycle; once every clue
  // in that pool has been used, the pool's cycle resets (so it takes
  // pool-size games touching that category+value before anything repeats).
  // Mutates cycleMap in place (the caller persists it after buildBoard).
  function pickClue(category, value, cycleMap) {
    var pool = (category.clues && category.clues[String(value)]) || [];
    if (!pool.length) return null;
    var key = category.id + "|" + value;
    var used = {};
    (cycleMap[key] || []).forEach(function (id) { used[id] = true; });
    var fresh = pool.filter(function (c) { return !used[c.id]; });
    if (!fresh.length) {
      used = {};
      fresh = pool.slice();
    }
    var choice = fresh[Math.floor(Math.random() * fresh.length)];
    used[choice.id] = true;
    cycleMap[key] = Object.keys(used);
    return choice;
  }

  function buildBoard(cycleMap) {
    var bank = bankCategories();
    var cats = shuffle(bank).slice(0, Math.min(NUM_CATEGORIES, bank.length));
    return cats.map(function (cat) {
      var slots = VALUES.map(function (v) {
        var clue = pickClue(cat, v, cycleMap);
        return { value: v, clue: clue, state: "unanswered", by: null };
      });
      return { catId: cat.id, catName: cat.name, slots: slots };
    });
  }

  // ---------------------------------------------------------------
  // persistence
  // ---------------------------------------------------------------
  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function loadCycle() {
    try { return JSON.parse(localStorage.getItem(CYCLE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveCycle(cycleMap) {
    try { localStorage.setItem(CYCLE_KEY, JSON.stringify(cycleMap)); } catch (e) {}
  }

  // ---------------------------------------------------------------
  // game actions
  // ---------------------------------------------------------------
  function newGame() {
    var cycleMap = loadCycle();
    var board = buildBoard(cycleMap);
    saveCycle(cycleMap);
    var numPlayers = mode === "2p" ? 2 : 1;
    state = {
      mode: mode,
      board: board,
      scores: numPlayers === 2 ? [0, 0] : [0],
      turn: 0,
      answered: 0,
      total: board.length * VALUES.length,
      recorded: false
    };
    saveState();
    closeModal();
    render();
  }

  function resetGame() {
    if (!state) { newGame(); return; }
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) { s.state = "unanswered"; s.by = null; });
    });
    state.scores = state.scores.map(function () { return 0; });
    state.turn = 0;
    state.answered = 0;
    state.recorded = false;
    saveState();
    closeModal();
    render();
  }

  function setMode(newMode) {
    if (newMode === mode) return;
    mode = newMode;
    newGame();
  }

  function gradeSlot(catIndex, valIndex, correct) {
    var slot = state.board[catIndex].slots[valIndex];
    if (slot.state !== "unanswered") return;
    var player = state.mode === "2p" ? state.turn : 0;
    slot.state = correct ? "correct" : "incorrect";
    slot.by = player;
    state.scores[player] += correct ? slot.value : -slot.value;
    state.answered += 1;
    if (state.mode === "2p" && !correct) {
      // Real-Jeopardy "control" rule: a correct answer keeps the same
      // player's turn; a miss passes control to the other player.
      state.turn = 1 - state.turn;
    }
    if (state.answered === state.total && !state.recorded) {
      state.recorded = true;
      recordHistory();
    }
    saveState();
    closeModal();
    render();
  }

  // ---------------------------------------------------------------
  // stats: category breakdown + cross-game score history
  // ---------------------------------------------------------------
  function correctCount() {
    var n = 0;
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) { if (s.state === "correct") n++; });
    });
    return n;
  }

  function playerStats(p) {
    var correct = 0, answered = 0;
    state.board.forEach(function (cat) {
      cat.slots.forEach(function (s) {
        if (s.by === p && (s.state === "correct" || s.state === "incorrect")) {
          answered++;
          if (s.state === "correct") correct++;
        }
      });
    });
    return { correct: correct, answered: answered };
  }

  function categoryBreakdown() {
    return state.board.map(function (cat) {
      var correct = 0, answered = 0;
      cat.slots.forEach(function (s) {
        if (s.state === "correct" || s.state === "incorrect") { answered++; if (s.state === "correct") correct++; }
      });
      return { name: cat.catName, correct: correct, answered: answered, total: cat.slots.length };
    });
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; }
  }
  function recordHistory() {
    var hist = loadHistory();
    var entry;
    if (state.mode === "2p") {
      var s0 = playerStats(0), s1 = playerStats(1);
      entry = {
        d: Date.now(), mode: "2p",
        scores: state.scores.slice(),
        corrects: [s0.correct, s1.correct],
        total: state.total
      };
    } else {
      var correct = correctCount();
      entry = {
        d: Date.now(), mode: "1p",
        score: state.scores[0], correct: correct, total: state.total,
        pct: state.total ? Math.round((correct / state.total) * 100) : 0
      };
    }
    hist.push(entry);
    if (hist.length > 12) hist = hist.slice(-12);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {}
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + " " +
      d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  // ---------------------------------------------------------------
  // rendering
  // ---------------------------------------------------------------
  function render() {
    if (!state) { root.innerHTML = ""; return; }

    var twoP = state.mode === "2p";
    var done = state.answered === state.total;
    var correct = correctCount();
    var html = "";

    html += '<div class="jp-bar">';
    html += '<div class="fc-switch" role="group" aria-label="Number of players">';
    html += '<button type="button" data-jp-mode="1p"' + (mode === "1p" ? ' class="active"' : '') + '>1 Player</button>';
    html += '<button type="button" data-jp-mode="2p"' + (mode === "2p" ? ' class="active"' : '') + '>2 Players</button>';
    html += '</div>';

    if (twoP) {
      html += '<div class="jp-stat' + (state.turn === 0 ? ' jp-stat-active' : '') + '"><span class="jp-stat-num">' + state.scores[0] + '</span><span class="jp-stat-lbl">Player 1' + (!done && state.turn === 0 ? " — your turn" : "") + '</span></div>';
      html += '<div class="jp-stat' + (state.turn === 1 ? ' jp-stat-active' : '') + '"><span class="jp-stat-num">' + state.scores[1] + '</span><span class="jp-stat-lbl">Player 2' + (!done && state.turn === 1 ? " — your turn" : "") + '</span></div>';
    } else {
      html += '<div class="jp-stat"><span class="jp-stat-num">' + state.scores[0] + '</span><span class="jp-stat-lbl">Score</span></div>';
      html += '<div class="jp-stat"><span class="jp-stat-num">' + correct + '/' + state.answered + '</span><span class="jp-stat-lbl">Correct</span></div>';
    }
    html += '<div class="jp-stat"><span class="jp-stat-num">' + state.answered + '/' + state.total + '</span><span class="jp-stat-lbl">Completed</span></div>';
    html += '<div class="jp-bar-actions">';
    html += '<button type="button" class="btn btn-primary" data-jp-new>New Game</button>';
    html += '<button type="button" class="btn btn-ghost" data-jp-reset>Reset Game</button>';
    html += '</div></div>';

    // Per-category breakdown — same badge strip style used on every other
    // exam page's topic breakdown, so it reads as consistent with the rest
    // of the site. Only shows once at least one question's been answered.
    if (state.answered > 0) {
      html += '<div class="topic-breakdown">';
      html += '<span class="tb-label">By category:</span>';
      categoryBreakdown().forEach(function (c) {
        html += '<span class="badge">' + escapeHtml(c.name) + ' &middot; ' + c.correct + '/' + c.answered + '</span>';
      });
      html += '<span class="tb-total">' + correct + '/' + state.answered + ' correct so far</span>';
      html += '</div>';
    }

    // Game-complete summary, same result-card/ring pattern as every other
    // exam on the site, plus a cross-game score history.
    if (done) {
      if (twoP) {
        var s0 = playerStats(0), s1 = playerStats(1);
        var winMsg = state.scores[0] === state.scores[1]
          ? "It's a tie!"
          : "Player " + (state.scores[0] > state.scores[1] ? 1 : 2) + " wins!";
        html += '<div class="result-card">';
        html += '<div class="result-score">' + state.scores[0] + ' &ndash; ' + state.scores[1] + '</div>';
        html += '<div class="result-detail">';
        html += '<p class="rmsg">' + winMsg + ' Player 1: ' + s0.correct + '/' + s0.answered +
          ' correct. Player 2: ' + s1.correct + '/' + s1.answered + ' correct.</p>';
        html += '<button type="button" class="btn btn-ghost" data-jp-new-2>New Game</button> ';
        html += '<button type="button" class="btn btn-ghost" data-jp-reset-2>Play Again (Same Board)</button>';
        html += '</div></div>';
      } else {
        var pct = state.total ? Math.round((correct / state.total) * 100) : 0;
        html += '<div class="result-card">';
        html += '<div class="result-ring" style="--pct:' + pct + '"><span>' + pct + '%</span></div>';
        html += '<div class="result-score">' + correct + ' / ' + state.total + '</div>';
        html += '<div class="result-detail">';
        html += '<p class="rmsg">Game over — final score ' + state.scores[0] + ' points. Start a new board or run this one back.</p>';
        html += '<button type="button" class="btn btn-ghost" data-jp-new-2>New Game</button> ';
        html += '<button type="button" class="btn btn-ghost" data-jp-reset-2>Play Again (Same Board)</button>';
        html += '</div></div>';
      }

      var hist = loadHistory();
      if (hist.length > 1) {
        html += '<div class="score-history"><h3 class="sh-title">Your recent games</h3><ul>';
        hist.slice().reverse().forEach(function (h, i) {
          var line = h.mode === "2p"
            ? ('P1 ' + h.scores[0] + ' &ndash; P2 ' + h.scores[1] + (h.scores[0] === h.scores[1] ? ' (tie)' : ' (P' + (h.scores[0] > h.scores[1] ? 1 : 2) + ' won)'))
            : (h.correct + '/' + h.total + ' &middot; ' + h.score + ' pts');
          html += '<li' + (i === 0 ? ' class="latest"' : '') + '>' +
            '<span class="sh-date">' + fmtDate(h.d) + '</span>' +
            '<span class="sh-score">' + line + '</span>' +
            '<span class="sh-pct">' + (h.mode === "2p" ? "2P" : h.pct + '%') + '</span></li>';
        });
        html += '</ul></div>';
      }
    }

    html += '<div class="jp-board-wrap"><div class="jp-board" style="--jp-cols:' + state.board.length + '">';
    VALUES.forEach(function (v, valIndex) {
      state.board.forEach(function (cat, catIndex) {
        var slot = cat.slots[valIndex];
        var cls = "jp-cell";
        var content = String(v);
        var disabled = "";
        if (!slot.clue) {
          cls += " jp-cell-empty";
          content = "—";
          disabled = " disabled";
        } else if (slot.state === "correct") {
          cls += " jp-cell-correct";
          content = "✓";
          disabled = " disabled";
        } else if (slot.state === "incorrect") {
          cls += " jp-cell-incorrect";
          content = "✗";
          disabled = " disabled";
        }
        html += '<button type="button" class="' + cls + '"' + disabled +
          ' data-jp-cell data-cat="' + catIndex + '" data-val="' + valIndex + '">' +
          content + '</button>';
      });
    });
    html += '</div></div>';

    root.innerHTML = html;

    root.querySelectorAll("[data-jp-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () { setMode(btn.getAttribute("data-jp-mode")); });
    });
    root.querySelector("[data-jp-new]").addEventListener("click", newGame);
    root.querySelector("[data-jp-reset]").addEventListener("click", resetGame);
    var new2 = root.querySelector("[data-jp-new-2]");
    var reset2 = root.querySelector("[data-jp-reset-2]");
    if (new2) new2.addEventListener("click", newGame);
    if (reset2) reset2.addEventListener("click", resetGame);
    root.querySelectorAll("[data-jp-cell]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.disabled) return;
        openModal(parseInt(btn.getAttribute("data-cat"), 10), parseInt(btn.getAttribute("data-val"), 10));
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------------------------------------------------------------
  // modal (question / answer / grading)
  // ---------------------------------------------------------------
  var overlay = document.createElement("div");
  overlay.className = "jp-overlay";
  overlay.innerHTML = '<div class="jp-modal" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(overlay);
  var modalEl = overlay.querySelector(".jp-modal");

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
  });

  function openModal(catIndex, valIndex) {
    var cat = state.board[catIndex];
    var slot = cat.slots[valIndex];
    if (!slot.clue) return;
    activeSlot = { catIndex: catIndex, valIndex: valIndex };
    revealed = slot.state === "correct" || slot.state === "incorrect";

    renderModal();
    overlay.classList.add("show");
  }

  function renderModal() {
    var cat = state.board[activeSlot.catIndex];
    var slot = cat.slots[activeSlot.valIndex];
    var clue = slot.clue;
    var graded = slot.state === "correct" || slot.state === "incorrect";

    var html = "";
    html += '<button type="button" class="jp-modal-close" data-jp-close aria-label="Close">&times;</button>';
    if (state.mode === "2p" && !graded) {
      html += '<span class="badge">Player ' + (state.turn + 1) + '’s turn</span>';
    }
    html += '<p class="jp-modal-eyebrow">' + escapeHtml(cat.catName) + ' &middot; ' + slot.value + ' points</p>';
    html += '<p class="jp-modal-q">' + escapeHtml(clue.q) + '</p>';

    if (!revealed && !graded) {
      html += '<div class="jp-modal-actions"><button type="button" class="btn btn-primary" data-jp-show>Show Answer</button></div>';
    } else {
      html += '<div class="jp-modal-answer">';
      html += '<span class="jp-a-label">Answer</span>';
      html += '<p class="jp-a-text">' + escapeHtml(clue.a) + '</p>';
      html += '<span class="jp-r-label">Rationale</span>';
      html += '<p class="jp-r-text">' + escapeHtml(clue.rationale) + '</p>';
      html += '</div>';
      if (!graded) {
        html += '<div class="jp-modal-actions jp-grade-actions">';
        html += '<button type="button" class="btn jp-btn-right" data-jp-grade="right">Got It Right</button>';
        html += '<button type="button" class="btn jp-btn-wrong" data-jp-grade="wrong">Got It Wrong</button>';
        html += '</div>';
      } else {
        html += '<p class="jp-already">Already graded ' + (slot.state === "correct" ? "correct" : "incorrect") +
          (state.mode === "2p" ? " (Player " + (slot.by + 1) + ")" : "") + '.</p>';
      }
    }

    modalEl.innerHTML = html;
    modalEl.querySelector("[data-jp-close]").addEventListener("click", closeModal);
    var showBtn = modalEl.querySelector("[data-jp-show]");
    if (showBtn) showBtn.addEventListener("click", function () { revealed = true; renderModal(); });
    var rightBtn = modalEl.querySelector('[data-jp-grade="right"]');
    var wrongBtn = modalEl.querySelector('[data-jp-grade="wrong"]');
    if (rightBtn) rightBtn.addEventListener("click", function () { gradeSlot(activeSlot.catIndex, activeSlot.valIndex, true); });
    if (wrongBtn) wrongBtn.addEventListener("click", function () { gradeSlot(activeSlot.catIndex, activeSlot.valIndex, false); });
  }

  function closeModal() {
    overlay.classList.remove("show");
    activeSlot = null;
    revealed = false;
  }

  // ---------------------------------------------------------------
  // boot
  // ---------------------------------------------------------------
  var saved = loadState();
  if (saved && saved.board && saved.board.length) {
    state = saved;
    mode = state.mode || "1p";
  } else {
    newGame();
    return;
  }
  render();
})();
