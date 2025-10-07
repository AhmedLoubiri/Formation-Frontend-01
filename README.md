Beginner Portfolio (HTML • CSS • JS)
===================================

This is a very simple, beginner-friendly portfolio. It uses only basic HTML, CSS, and a tiny bit of JavaScript.

What you get
------------

- Sticky header with a mobile menu button
- Sections: Hero, About, Skills, Projects, Contact
- Simple project cards
- Contact form that opens your email app with mailto (no backend needed)

Quick start
----------

1. Open `index.html` in your browser.
2. Edit the text in `index.html` (your name, about, skills, and projects).
3. (Important) In the Contact form, change `youremail@example.com` in the `action` attribute to your email.

How it’s built (short version)
------------------------------

- `index.html`: the content of the page (text, images, links).
- `style.css`: the look (colors, layout, spacing). One simple mobile breakpoint.
- `script.js`: only two things — toggle the mobile menu and set the current year in the footer.
- `assets/`: a few SVG images you can replace.

Project structure
-----------------

```
Formation-Frontend-01/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── avatar.svg
    ├── favicon.svg
    ├── logo.svg
    └── project.svg
```

Customize
---------

- Site name/logo: change the text near the logo in the header or replace `assets/logo.svg`.
- Projects: update titles, descriptions, and links in the Projects section.
- Colors: tweak the CSS variables at the top of `style.css`.
- Contact email: in `index.html`, update `action="mailto:youremail@example.com"`.

Deploy
------

Static hosting options:

- GitHub Pages: push to GitHub and enable Pages in repo settings.
- Netlify/Vercel: drag and drop the folder or connect your repository.

Notes
-----

- No build tools needed. Just open `index.html`.
- The menu becomes a dropdown on small screens; clicking a link closes it.
