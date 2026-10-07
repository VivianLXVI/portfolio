# Vivianahil Philip Ilango Portfolio Website

The source code for my personal developer portfolio website. This site acts as a performance-driven engineering hub showcasing my work across AI systems, data generation, and full-stack engineering.

🔗 **Live Link:** [https://portfolio-eta-sage-18.vercel.app](https://portfolio-eta-sage-18.vercel.app)

## 🚀 Performance & Design Architecture
* **Stack:** Pure semantic HTML5, modular CSS3, and vanilla asynchronous JavaScript (ES6+).
* **No Build Step:** Zero dependencies, zero framework overhead, and instant load times.
* **Theme Persistence:** A lightweight, non-blocking script loaded in the document head prevents styling flashes (FOUC) while transitioning between Light, Dark, and Gloomy modes.
* **Interactive Telemetry Simulation:** Contains a client-side database connection-lifetime simulation demonstrating asynchronous chunking logic optimizations.

---

## 📁 Repository Structure

```text
index.html          Page content and semantic markup structure
css/
  base.css          Design tokens, system color palettes, typography, and theme blocks
  layout.css        Navigation header, hero section scaffolding, contact forms, and footers
  projects.css      Project entries, NDA badge layouts, and expandable structural detail blocks
  demo.css          Connection-lifetime simulation UI styles
  skills.css        Technical skills distribution arrays and experiential fact cards
js/
  theme.js          Decoupled theme-switcher controller (loaded upfront to prevent flash)
  details.js        Interactive expand/collapse engine for deep-dive technical specs
  demo.js           Pipeline simulation state logic and batch processing simulator
```

---

## 🛠️ Local Development & Deployment
Since this is a clean, static site with no compiler overhead, you can run or deploy it natively:
1. **Local Server:** Clone the repository and run a local file server (`npx serve .` or VS Code Live Server).
2. **Production Hosting:** Fully optimized for immediate serverless edge delivery via Vercel, Netlify, or GitHub Pages.

---

## 📌 Maintenance & Content Maintenance Rules

### Adding a New Project
1. Open `index.html`.
2. Locate the `<section id="work">` block.
3. Copy an existing `<article class="project">` node and update the content schema.

### Flagging Projects Under Non-Disclosure Agreements (NDA)
* To append a restricted badge, insert `<span class="badge-nda">NDA</span>` inside the target project's `<h3>` block.
* Document explicit constraints by placing a `<p class="nda-note">` element immediately underneath the operational result section.

### Overriding Global Visual States
Global structural design tokens, color matrix parameters, and active theme variables map directly to specific root pseudo-classes inside `css/base.css`.
