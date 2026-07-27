# Fahim Rana — Developer Portfolio

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
</p>

My personal developer portfolio — a single-page React application showcasing who I am, what I've
built, and how to reach me. Instead of a generic template look, it follows a **"Build Log"** design
direction: a git-commit inspired visual identity with diff-style skill tags, monospace commit-hash
labels, and a scroll-linked commit-graph line running through the page.

## 📌 Live Site

🔗 **[fahimrana.vercel.app](https://fahimrana.vercel.app/)**

## ✨ Features

- 🖥️ **Fully responsive** — clean layout across mobile, tablet, and desktop.
- 🧬 **"Build Log" design system** — a git/commit-inspired visual language instead of a generic
  template: diff-style `+ skill` tags, monospace commit hashes, and a scroll-linked vertical
  commit-graph line that draws in as you scroll through the page.
- 🎬 **Scroll-triggered animations** — every section reveals smoothly on scroll via Framer Motion,
  with a one-time animated hero intro.
- 🧭 **Smooth-scroll navigation** — a responsive navbar with a collapsible mobile menu that jumps to
  any section instantly.
- 📄 **One-click resume download** — a dedicated button that downloads the resume directly rather
  than opening it in a new tab.
- 🗂️ **Project case-study pages** — each project card links to its own detail page with tech stack,
  description, live/GitHub links, challenges faced, and future improvements.
- 🧩 **Data-driven content** — all personal info, skills, education, and project details live in
  plain JS data files, so updating content never requires touching component code.

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS (custom design tokens) |
| Animation | Framer Motion |
| Icons | React Icons |
| Hosting | Vercel |

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/          # Profile photo
│   │   └── projects/         # Project screenshots
│   └── Fahim_Rana_Resume.pdf
├── src/
│   ├── data/
│   │   ├── profile.js         # Name, contact, skills, education
│   │   └── projects.js        # All project details — single source of truth
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── BuildLogRail.jsx    # Signature scroll-linked commit line
│   │   ├── SectionTag.jsx      # "commit <hash> · Section" eyebrow + node
│   │   ├── ProjectCard.jsx
│   │   └── sections/           # Hero, About, Skills, Education, Projects, Contact
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx    # /projects/:slug — case-study page
│   └── index.css
└── vercel.json                  # SPA rewrite rules
```

## 🚀 Getting Started Locally

```bash
git clone <this-repo-url>
cd portfolio
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## ➕ Adding a New Project

No component code needs to change:

1. Drop screenshots into `public/images/projects/`.
2. Add a new object to the array in `src/data/projects.js`:

```js
{
  slug: 'my-new-project',
  name: 'My New Project',
  hash: 'g100',
  tagline: 'One-line description for the card.',
  cover: '/images/projects/my-new-project-home.png',
  gallery: ['/images/projects/my-new-project-home.png'],
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

## ✏️ Updating Personal Info / Resume

Edit `src/data/profile.js` — name, photo, contact info, socials, skills, and education all live
there. To update the resume, replace `public/Fahim_Rana_Resume.pdf` with the new file (same name),
or update `resumeLink` if the filename changes.

## ☁️ Deployment

Deployed on **Vercel**. `vercel.json` handles SPA client-side routing so deep links (e.g.
`/projects/boibazaar`) don't 404 on refresh. Push to `main` to trigger an automatic redeploy.

## 📄 License

MIT