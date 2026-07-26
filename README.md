# 🧮 Calculator

> A minimal, aesthetic calculator coded from scratch with Python logic at its core.

🔗 **Live Demo → [calczen.vercel.app](https://calczen.vercel.app)**

---

## 💡 About This Project

I started this project by writing the core arithmetic logic in **Python** — completely on my own, from scratch. Once the logic was solid, I converted it into a web app using **HTML5, CSS3, and Vanilla JavaScript**, and used **AI assistance for the web styling** to get a clean, aesthetic UI.

It's a simple project, but it taught me how the same logic can live in a terminal script *and* a deployed web app.

---

## ✨ Features

- ➕ ➖ ✖️ ➗ Basic arithmetic Add, Subtract, Multiply, Divide
- **%** Modulo support
- 🔗 Chained calculations
- 🚫 Divide by zero — handled gracefully
- ⌨️ Full keyboard support
- 📱 Responsive — mobile, tablet & desktop ready
- 🎨 Warm, minimal aesthetic design

---

## 📁 File Structure

```
CalcZen/
├── index.html     → Page structure
├── style.css      → All styling & responsive layout
├── script.js      → Calculator logic (translated from Python)
└── main.py        → Original Python script I wrote myself
```

---

## 🐍 Where It Started — Python

I wrote this logic myself in Python first:

```python
a = int(input("Enter Your Number : "))
b = int(input("Enter Your Number : "))
c = input("Enter Your Operator : ")

if c == '+':
    print(a + b)       # add
elif c == '-':
    print(a - b)       # subtract
elif c == '*':
    print(a * b)       # multiply
elif c == '/':
    print(a / b)       # divide
else:
    print("Something went wrong....❌")
```

The exact same `if / elif / else` structure powers the `script.js` logic.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0 – 9` | Enter digits |
| `+ − * /` | Operators |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear all |

---

## 🚀 Run Locally

No setup needed — just open in a browser:

```bash
git clone https://github.com/amber-arya/Calculator.git
cd Calculator
open index.html
```

---

## 🛠️ Built With

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (Grid, Flexbox, Custom Properties) |
| Logic | Vanilla JavaScript |
| Origin | Python 3 |
| Deployed | Vercel |

---

## 🤝 Honest Note

- 🧠 **Python logic** — written by me, independently
- 🎨 **Web styling** — done with AI assistance
- 💻 **JS logic** — translated from my own Python code

---

## 👤 Author

**Amber Arya**
[![GitHub](https://img.shields.io/badge/GitHub-amber--arya-181717?style=flat&logo=github)](https://github.com/amber-arya)
[![Live](https://img.shields.io/badge/Live-calczen.vercel.app-00C7B7?style=flat&logo=vercel)](https://calczen.vercel.app)

---

> *"Started as 10 lines of Python. Became a deployed web app."*
