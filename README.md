# Portfolio

Static site — no build step. Open `index.html` in a browser, or host the folder anywhere (GitHub Pages, Netlify, etc.).

```
index.html          page content (all sections)
css/
  base.css          design tokens, light/dark/gloomy themes, reset, buttons
  layout.css        nav, hero, section scaffolding, contact, footer
  projects.css      project entries, NDA badge/notice, expandable details
  demo.css          connection-lifetime simulation
  skills.css        skills list and fact cards
js/
  theme.js          theme switcher (loaded in <head> to avoid a flash)
  details.js        "Technical details" expand/collapse
  demo.js           pipeline simulation
```

## Editing tips
- Add a project: copy an `<article class="project">` block in `index.html`.
- Mark a project as NDA: add `<span class="badge-nda">NDA</span>` to its `<h3>` and a `<p class="nda-note">` under the result line.
- Colors live in `css/base.css` as CSS variables, one block per theme.
