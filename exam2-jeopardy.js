/* ============================================================
   Exam 2 Jeopardy Game Engine - Clean Implementation
   105 NCLEX-NGN Clinical Judgment Questions
   7 Categories × 15 Questions (5 tiers × 3 questions)
   ============================================================ */
(function() {
  "use strict";

  const VALUES = [100, 200, 300, 400, 500];
  const STORE_KEY = "nur334-exam2-jeopardy";
  let state = null;
  let currentMode = "2p";

  const boardEl = document.getElementById("jp-board");
  const modalEl = document.getElementById("jp-modal");
  const questionEl = document.getElementById("jp-question");
  const answerEl = document.getElementById("jp-answer");
  const rationaleEl = document.getElementById("jp-rationale");
  const scoreDisplay = document.getElementById("score-display");
  const correctDisplay = document.getElementById("correct-display");
  const completedDisplay = document.getElementById("completed-display");

  function initGame() {
    if (!window.JEOPARDY_EXAM2 || !window.JEOPARDY_EXAM2.categories) {
      console.error("No JEOPARDY_EXAM2 data found");
      return;
    }

    const categories = window.JEOPARDY_EXAM2.categories.slice(0, 7);
    const board = categories.map(cat => ({
      name: cat.name,
      slots: VALUES.map(value => {
        const clues = (cat.clues && cat.clues[value]) || [];
        return {
          value,
          clue: clues.length > 0 ? clues[Math.floor(Math.random() * clues.length)] : null,
          answered: false,
          correct: null
        };
      })
    }));

    state = {
      board,
      scores: [0, 0],
      turn: 0,
      answered: 0,
      total: 7 * 5,
      mode: currentMode
    };

    saveState();
    renderBoard();
  }

  function renderBoard() {
    if (!state) return;

    let html = '<div class="jp-grid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px;">';

    state.board.forEach(cat => {
      html += `<div class="jp-cat-header" style="background: #d8a8d8; color: #2d1b4e; padding: 12px; border-radius: 6px; text-align: center; font-weight: 600; font-size: 13px;">${escapeHtml(cat.name)}</div>`;
    });

    VALUES.forEach(value => {
      state.board.forEach((cat, catIdx) => {
        const slot = cat.slots.find(s => s.value === value);
        if (!slot) return;

        let cellClass = "jp-slot";
        let cellContent = String(value);
        let disabled = false;

        if (slot.answered) {
          cellClass += " used";
          if (slot.correct) cellContent = "✓";
          else cellContent = "✗";
          disabled = true;
        }

        html += `<button type="button" class="${cellClass}" ${disabled ? 'disabled' : ''} data-cat="${catIdx}" data-val="${value}" style="aspect-ratio: 1; font-size: 18px; font-weight: 700;">${cellContent}</button>`;
      });
    });

    html += '</div>';
    boardEl.innerHTML = html;

    boardEl.querySelectorAll("button[data-cat]").forEach(btn => {
      btn.addEventListener("click", () => {
        const catIdx = parseInt(btn.getAttribute("data-cat"));
        const value = parseInt(btn.getAttribute("data-val"));
        openQuestion(catIdx, value);
      });
    });

    updateStats();
  }

  function openQuestion(catIdx, value) {
    const slot = state.board[catIdx].slots.find(s => s.value === value);
    if (!slot || !slot.clue || slot.answered) return;

    questionEl.textContent = slot.clue.q;
    answerEl.textContent = slot.clue.a;
    rationaleEl.textContent = slot.clue.rationale;

    document.querySelector(".jp-modal-buttons").innerHTML = `
      <button onclick="window.jeopardyGame.markCorrect(${catIdx}, ${value})">Got It Right</button>
      <button onclick="window.jeopardyGame.markWrong(${catIdx}, ${value})">Got It Wrong</button>
    `;

    modalEl.classList.add("active");
  }

  function closeModal() {
    modalEl.classList.remove("active");
  }

  function markCorrect(catIdx, value) {
    const slot = state.board[catIdx].slots.find(s => s.value === value);
    slot.answered = true;
    slot.correct = true;
    state.scores[state.turn] += value;
    state.answered += 1;
    closeModal();
    renderBoard();
  }

  function markWrong(catIdx, value) {
    const slot = state.board[catIdx].slots.find(s => s.value === value);
    slot.answered = true;
    slot.correct = false;
    state.scores[state.turn] -= value;
    state.answered += 1;
    if (state.mode === "2p") {
      state.turn = 1 - state.turn;
    }
    closeModal();
    renderBoard();
  }

  function updateStats() {
    const correct = state.board.reduce((sum, cat) => {
      return sum + cat.slots.filter(s => s.answered && s.correct).length;
    }, 0);

    scoreDisplay.textContent = state.scores[state.turn];
    correctDisplay.textContent = `${correct}/${state.answered}`;
    completedDisplay.textContent = `${state.answered}/${state.total}`;
  }

  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY));
    } catch (e) {
      return null;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function resetBoard() {
    if (confirm("Clear the current board?")) {
      localStorage.removeItem(STORE_KEY);
      initGame();
    }
  }

  function newGame() {
    localStorage.removeItem(STORE_KEY);
    initGame();
  }

  document.querySelectorAll(".mode-button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      currentMode = e.target.getAttribute("data-mode") || "2p";
      document.querySelectorAll(".mode-button").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      newGame();
    });
  });

  document.querySelectorAll(".action-button").forEach(btn => {
    if (btn.textContent.includes("New")) btn.addEventListener("click", newGame);
    if (btn.textContent.includes("Reset")) btn.addEventListener("click", resetBoard);
  });

  document.getElementById("jp-modal").addEventListener("click", (e) => {
    if (e.target.id === "jp-modal") closeModal();
  });

  state = loadState();
  if (!state) {
    initGame();
  } else {
    renderBoard();
  }

  window.jeopardyGame = { markCorrect, markWrong, closeModal, resetBoard, newGame };
})();
