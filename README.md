# NUVIMO Internal Site

> ⚠️ Internal-only preview site for the NUVIMO PropTech platform.

---

## 🚀 Tech Stack

- React (via Vite)
- Tailwind CSS
- Lucide Icons
- Framer Motion
- Custom UI Components (Card, Button)

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## 🌐 Deploy to GitHub Pages

### 1. Configure your GitHub repo

In `vite.config.js`, set the base:

```js
base: '/<your-repo-name>/'
```

### 2. Install GitHub Pages CLI

```bash
npm install -g gh-pages
```

### 3. Deploy

```bash
npm run build
gh-pages -d dist
```

Then activate GitHub Pages via repo Settings → Pages → `gh-pages` branch.

---

## 📁 Structure

```
nuvimo-internal-site/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   └── card.jsx
│   │   └── InternalSite.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 📋 License

MIT — for internal development only.
