# Ardra K J — Developer Portfolio

A modern, animated, fully responsive portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animations)
- React Icons

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — no environment variables are required for the current build.

## Where to add your own content

All text content lives in one place: `src/data/portfolio.js`
- Name, role, tagline, email, GitHub, LinkedIn, resume path → `profile`
- Nav labels → `navLinks`
- About focus tags → `aboutFocus`
- Skills → `skillGroups`
- Projects (name, description, tech, features, links, image) → `projects`
- Work experience → `experience`
- Education → `education`

### Assets (in `public/`)
- `public/profile.jpg` — replace with your headshot (used in Hero and About).
- `public/resume.pdf` — replace with your real resume PDF (currently a placeholder file). This powers both "Download Resume" and "View Resume".
- `public/projects/cinemashow.jpg`, `public/projects/calculator.jpg` — add real project screenshots/thumbnails here (referenced from `src/data/portfolio.js`). If a project has no image, the card shows a "preview coming soon" placeholder instead of breaking.
- `public/favicon.svg` — swap for your own mark if you'd like.

### GitHub stats
The "Developer Activity" section calls the public GitHub API (`api.github.com/users/<username>`) client-side to show live repo/follower counts, and fails gracefully with a message if the API is unreachable or rate-limited. No token or key is required or exposed.

### Contact form
`src/components/ContactForm.jsx` currently simulates a submit (loading → success/error states, full validation). To make it actually send messages, wire `handleSubmit` to a backend endpoint or a form service such as Formspree — **never place a private API key directly in frontend code**; use a serverless function or backend proxy instead.

## Project structure

```
src/
├── components/      # Reusable UI: Navbar, Button, SectionHeading, ProjectCard, SkillCard,
│                       TimelineItem, SocialLinks, ContactForm, Footer
├── sections/         # Page sections: Hero, About, Skills, Projects, Experience,
│                       Education, ResumeCTA, GithubActivity, Contact
├── data/
│   └── portfolio.js  # All editable content
├── App.jsx
├── main.jsx
└── index.css         # Design tokens (colors, fonts) + global styles
```

## Notes
- Fully responsive from 320px up to large desktop screens; tested breakpoints at 375 / 768 / 1024 / 1440px.
- Respects `prefers-reduced-motion`.
- Semantic HTML, labeled form fields, visible focus states, alt text on all images.
