const form = document.querySelector('#guessForm');
const input = document.querySelector('#valorUsuario');
const restartButton = document.querySelector('#reiniciar');
const statusBox = document.querySelector('#statusBox');
const statusIcon = document.querySelector('#statusIcon');
const statusTitle = document.querySelector('#statusTitle');
const statusMessage = document.querySelector('#statusMessage');
const inputError = document.querySelector('#inputError');
const attemptCount = document.querySelector('#attemptCount');
const bestScore = document.querySelector('#bestScore');
const gameState = document.querySelector('#gameState');
const guessHistory = document.querySelector('#guessHistory');
const historyCount = document.querySelector('#historyCount');

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;
let secretNumber;
let attempts;
let guesses;
let gameOver;

function getBestScore() {
  return Number(localStorage.getItem('juegoSecretoMejorPuntaje')) || null;
}

function updateStats() {
  attemptCount.textContent = attempts;
  bestScore.textContent = getBestScore() ?? '—';
  historyCount.textContent = `${guesses.length}/${MAX_NUMBER}`;
}

function setStatus(type, icon, title, message) {
  statusBox.className = `status-box status-${type}`;
  statusIcon.textContent = icon;
  statusTitle.textContent = title;
  statusMessage.textContent = message;
}

function renderHistory() {
  if (guesses.length === 0) {
    guessHistory.innerHTML = '<span class="empty-history">Todavía no has probado ningún número.</span>';
    return;
  }

  guessHistory.innerHTML = guesses
    .map((guess) => `<span class="history-number" title="Número probado: ${guess}">${guess}</span>`)
    .join('');
}

function showError(message) {
  inputError.textContent = message;
  input.setAttribute('aria-invalid', 'true');
  input.focus();
}

function clearError() {
  inputError.textContent = '';
  input.removeAttribute('aria-invalid');
}

function startGame() {
  secretNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  attempts = 0;
  guesses = [];
  gameOver = false;
  input.disabled = false;
  form.querySelector('button[type="submit"]').disabled = false;
  gameState.textContent = 'En juego';
  clearError();
  input.value = '';
  renderHistory();
  updateStats();
  setStatus('neutral', '?', 'Haz tu primer intento', 'Escribe un número entero entre 1 y 10.');
  input.focus();
}

function finishGame() {
  gameOver = true;
  input.disabled = true;
  form.querySelector('button[type="submit"]').disabled = true;
  gameState.textContent = 'Completado';
}

function handleGuess(event) {
  event.preventDefault();
  if (gameOver) return;

  clearError();
  const value = Number(input.value);

  if (!input.value.trim()) {
    showError('Escribe un número antes de intentarlo.');
    return;
  }
  if (!Number.isInteger(value)) {
    showError('Introduce un número entero, sin decimales.');
    return;
  }
  if (value < MIN_NUMBER || value > MAX_NUMBER) {
    showError('El número debe estar entre 1 y 10.');
    return;
  }
  if (guesses.includes(value)) {
    showError('Ya probaste ese número. Elige otro.');
    return;
  }

  attempts += 1;
  guesses.push(value);
  input.value = '';
  renderHistory();
  updateStats();

  if (value === secretNumber) {
    const oldBest = getBestScore();
    if (!oldBest || attempts < oldBest) {
      localStorage.setItem('juegoSecretoMejorPuntaje', attempts);
    }
    setStatus('success', '✓', '¡Número correcto!', `Lo descubriste en ${attempts} ${attempts === 1 ? 'intento' : 'intentos'}.`);
    updateStats();
    finishGame();
    restartButton.focus();
    return;
  }

  const direction = value < secretNumber ? 'mayor' : 'menor';
  setStatus('error', '!', 'Aún no es ese', `Pista: el número secreto es ${direction}.`);
  input.focus();
}

form.addEventListener('submit', handleGuess);
restartButton.addEventListener('click', startGame);
startGame();
