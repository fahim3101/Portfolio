# Fahim Rana — Portfolio

Personal developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.
Design direction: **"Build Log"** — a git-commit-inspired visual identity (diff-style
skill tags, a scroll-linked commit graph line, monospace hash labels) instead of a
generic template look.

## Tech Stack

- React 18 + Vite
- React Router v6 (client-side routing to individual project detail pages)
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (scroll-triggered reveals, the signature commit-graph line)
- React Icons

## Run Locally

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Structure

```
src/
├── data/
│   ├── profile.js       # Name, designation, contact info, skills, education
│   └── projects.js      # All project details — single source of truth
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── BuildLogRail.jsx   # Signature scroll-linked commit line
│   ├── SectionTag.jsx     # "commit <hash> · Section Name" eyebrow + node
│   ├── ProjectCard.jsx
│   └── sections/          # Hero, About, Skills, Education, Projects, Contact
├── pages/
│   ├── Home.jsx
│   └── ProjectDetail.jsx  # /projects/:slug — detailed case study page
└── index.css
```

## Adding a New Project

No code changes needed in components. Just:

1. Drop screenshots into `public/images/projects/`.
2. Open `src/data/projects.js` and add a new object to the array:

```js
{
  slug: 'my-new-project',
  name: 'My New Project',
  hash: 'g100',
  tagline: 'One-line description for the card.',
  cover: '/images/projects/my-new-project-home.png',
  gallery: [
    '/images/projects/my-new-project-home.png',
    '/images/projects/my-new-project-details.png',
  ],
  techStack: ['React', 'Node.js', 'MongoDB'],
  mainStack: 'React + Node.js + MongoDB',
  description: '...',
  challenges: '...',
  improvements: '...',
  liveLink: 'https://...',
  githubLink: 'https://github.com/...',
}
```

The project grid and its detail page pick this up automatically.

## Updating Personal Info / Resume

Edit `src/data/profile.js`:

- `resumeLink` — currently `'#'` as a placeholder. Once the resume PDF is ready,
  either add it to `public/` (e.g. `public/resume.pdf`) and set
  `resumeLink: '/resume.pdf'`, or paste a hosted link.
- `photo`, `email`, `phone`, `whatsapp`, `socials` — update as needed.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com → Add New Project → import the repo.
3. Framework preset: Vite (auto-detected). Build command: `npm run build`,
   output directory: `dist` (defaults are already correct).
4. Deploy. `vercel.json` is already included so refreshing a project detail page
   (e.g. `/projects/boibazaar`) won't 404.

## License

MIT
