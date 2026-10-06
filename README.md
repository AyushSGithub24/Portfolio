# Ayush Gupta — Terminal Portfolio

An interactive, terminal-style portfolio for exploring Ayush Gupta’s experience, skills, projects, education, and contact information. The page includes a 3D animated background, quick command buttons, and light, dark, and forest themes.

## Run locally

No build step or package installation is required. Clone or download the repository, then open `index.html` in a browser. For a local web server, run:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

The Three.js library and Google Fonts are loaded from external CDNs, so those features need an internet connection.

## Explore the portfolio

Type `help` in the terminal or use the quick command buttons. Available commands:

- `about` — introduction
- `experience` — work history
- `skills` — technologies and proficiency
- `projects` — selected projects
- `show <name>` — open a project’s live demo or source link
- `education` — education
- `honors` — achievements
- `contact` — contact details and profile links
- `theme` — cycle through the available themes
- `clear` — clear the terminal output

## Customize

- Edit the `CFG` object near the top of `script.js` to update the name, bio, links, skills, projects, experience, education, and honors.
- Update `index.html` to change page metadata or the page structure.
- Update `styles.css` to change colors, layout, typography, and animations.

## Files

- `index.html` — page structure and metadata
- `styles.css` — layout, themes, and visual effects
- `script.js` — portfolio content and terminal interactions
