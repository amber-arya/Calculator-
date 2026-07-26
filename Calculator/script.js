/* ============================================
  script.js — Calculator Logic
  Python if/elif logic translated to JS
   ============================================ */

// State
// Same as Python:  a, b, c  variables
let numA       = '';   // Python: a  (first number)
let numB       = '';   // Python: b  (second number)
let operator   = '';   // Python: c  (the operator)
let justResult = false;

// ── Symbol display map 
const SYMBOLS = { '+': '+', '-': '−', '*': '×', '/': '÷', '%': '%' };

// ── DOM References 
const $display = document.getElementById('display');
const $expr    = document.getElementById('expr');

// ── Display helpers
function setDisplay(value, state = '') {
  $display.textContent = value;
  // Reset classes
  $display.className = 'display__value';
  if (state) $display.classList.add('is-' + state);

  // Auto-shrink long numbers
  const len = String(value).length;
  if (len > 14) $display.classList.add('is-sm');
  else if (len > 9) $display.classList.add('is-md');
}

function setExpr(text) {
  $expr.textContent = text;
}

// ── Input: digit or decimal 
// Python equivalent: a = int(input(...))  or  b = int(input(...))
function pressDigit(ch) {
  // After a result, typing a new digit starts fresh
  if (justResult) {
    numA = ''; numB = ''; operator = '';
    justResult = false;
    setExpr('');
  }

  if (!operator) {
    // Building first number (Python: a)
    if (ch === '.' && numA.includes('.')) return;
    if (ch === '.' && numA === '')        numA = '0';
    numA += ch;
    setDisplay(numA);
  } else {
    // Building second number (Python: b)
    if (ch === '.' && numB.includes('.')) return;
    if (ch === '.' && numB === '')        numB = '0';
    numB += ch;
    setDisplay(numB);
  }
}

// Input: operator
// Python equivalent: c = input("Enter Your Operator : ")
function pressOperator(sym) {
  if (numA === '') return;

  // Chain: if both numbers are ready, calculate first
  if (operator && numB !== '') {
    const mid = compute();
    if (mid === null) return;
    numA = String(mid);
    numB = '';
  }

  if (justResult) justResult = false;

  operator = sym;
  setExpr(numA + ' ' + SYMBOLS[sym]);
  setDisplay(numA);
}

// Core compute — mirrors Python if/elif 
function compute() {
  // Python: a = ..., b = ..., c = ...
  const a = parseFloat(numA);
  const b = parseFloat(numB);

  if (isNaN(a) || isNaN(b)) return null;

  let result;

  // ── Python: if c == '+' ──
  if (operator === '+') {
    result = a + b;

  // ── Python: elif c == '-' ──
  } else if (operator === '-') {
    result = a - b;

  // ── Python: elif c == '*' ──
  } else if (operator === '*') {
    result = a * b;

  // ── Python: elif c == '/' ──
  } else if (operator === '/') {
    if (b === 0) {
      // Python: else → "Something went wrong....❌"
      setExpr(a + ' ÷ 0');
      setDisplay('Cannot divide by zero ❌', 'error');
      resetState();
      return null;
    }
    result = a / b;

  // ── Bonus: modulo ──
  } else if (operator === '%') {
    result = a % b;

  // ── Python: else → "Something went wrong....❌" ──
  } else {
    setDisplay('Something went wrong ❌', 'error');
    resetState();
    return null;
  }

  // Fix floating point noise (0.1 + 0.2 = 0.3 not 0.30000000004)
  return parseFloat(parseFloat(result).toPrecision(12));
}

// Equals 
function pressEquals() {
  if (!numA || !operator || !numB) return;

  const result = compute();
  if (result === null) return;

  const answer = String(result);
  setExpr(numA + ' ' + SYMBOLS[operator] + ' ' + numB + ' =');
  setDisplay(answer, 'result');

  // Save result as new first number (for chaining)
  numA = answer;
  numB = '';
  operator = '';
  justResult = true;
}

// Backspace 
function pressBack() {
  if (justResult) { clearAll(); return; }

  if (operator && numB) {
    numB = numB.slice(0, -1);
    setDisplay(numB || '0');
  } else if (operator && !numB) {
    operator = '';
    setExpr('');
  } else if (numA) {
    numA = numA.slice(0, -1);
    setDisplay(numA || '0');
  }
}

// Clear All 
function clearAll() {
  resetState();
  setDisplay('0');
  setExpr('');
}

function resetState() {
  numA = ''; numB = ''; operator = '';
  justResult = false;
}

// Event Delegation (single listener for all buttons)
document.querySelector('.grid').addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const digit  = btn.dataset.digit;
  const op     = btn.dataset.op;
  const action = btn.dataset.action;

  if (digit  !== undefined)  pressDigit(digit);
  else if (op !== undefined) pressOperator(op);
  else if (action === 'clear')  clearAll();
  else if (action === 'back')   pressBack();
  else if (action === 'equals') pressEquals();
});

// Keyboard Support 
document.addEventListener('keydown', function (e) {
  if ('0123456789.'.includes(e.key))             pressDigit(e.key);
  else if (e.key === '+')                        pressOperator('+');
  else if (e.key === '-')                        pressOperator('-');
  else if (e.key === '*')                        pressOperator('*');
  else if (e.key === '/') { e.preventDefault();  pressOperator('/'); }
  else if (e.key === '%')                        pressOperator('%');
  else if (e.key === 'Enter' || e.key === '=')   pressEquals();
  else if (e.key === 'Backspace')                pressBack();
  else if (e.key === 'Escape')                   clearAll();
});