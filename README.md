# 🧮 Calculator

A clean, aesthetic calculator built with HTML, CSS, and JavaScript — based on Python arithmetic logic.

🔗 **Live Demo → [calculator-lovat-zeta-97.vercel.app](https://calculator-lovat-zeta-97.vercel.app)**

---

## ✨ Features

- ➕ Add, ➖ Subtract, ✖️ Multiply, ➗ Divide, % Modulo
- 🔗 Chained calculations (result → next operation)
- ⌨️ Full keyboard support
- 📱 Fully responsive — works on mobile, tablet & desktop
- 🚫 Divide by zero error handling
- 🎨 Clean aesthetic UI with warm color palette

---

## 📁 File Structure

```
Calculator/
├── index.html     → HTML structure
├── style.css      → All styling & responsive design
├── script.js      → Calculator logic (based on Python if/elif)
└── main.py        → Original Python version of the logic
```

---

## 🐍 Python Origin

This project started as a simple Python script:

```python
a = int(input("Enter Your Number : "))
b = int(input("Enter Your Number : "))
c = input("Enter Your Operator : ")

if c == '+':
    print(a + b)
elif c == '-':
    print(a - b)
elif c == '*':
    print(a * b)
elif c == '/':
    print(a / b)
else:
    print("Something went wrong....❌")
```

The same `if/elif/else` logic is mirrored inside `script.js`.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0–9` | Enter digits |
| `+ - * /` | Operators |
| `Enter` or `=` | Calculate |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

---

## 🚀 Run Locally

```bash
# Just open in browser — no install needed
open index.html
```

Or clone it:

```bash
git clone https://github.com/amber-arya/Calculator.git
cd Calculator
open index.html
```

---

## 🛠️ Built With

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Python 3 (original logic)
- Deployed on **Vercel**

---

## 👤 Author

**Amber Arya**
- GitHub: [@amber-arya](https://github.com/amber-arya)

---

> *Started as a Python terminal script. Turned into a deployed web app.*
