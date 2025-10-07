# Portfolio Template (HTML/CSS/JS)

A modern, responsive portfolio template with placeholder content. Replace the fake data with your own.

## Features

- Semantic HTML with accessible navigation and form labels
- Responsive layout (CSS Grid/Flexbox)
- Light/Dark theme with toggle and `prefers-color-scheme`
- Intersection Observer reveal animations
- Smooth scrolling and mobile nav
- Demo contact form validation (no backend)

## Structure

- `index.html` – Main page
- `styles.css` – Styles and theming
- `script.js` – Interactions (menu, theme, reveals, form)
- `assets/` – SVG logo and avatar placeholders

## Edit placeholders

Search and replace these values:

- Name: "John Doe"
- Bio, stats, job titles, locations, social links
- Project cards (title, description, tags, links)

## Run locally

Just open `index.html` in your browser. If you prefer a local server:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customize

- Colors: edit CSS variables in `:root` and `.theme-*`
- Sections: add/remove project cards or timeline entries in `index.html`
- Components: reuse `.card`, `.btn`, `.chip`, `.grid-2`, `.skills-grid`

## License

This template is provided under the MIT license. Replace placeholders before publishing.
