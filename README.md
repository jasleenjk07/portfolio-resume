# Jasleen Kaur — Portfolio

Personal portfolio website showcasing ML/AI, computer vision, and full-stack projects, skills, achievements, education, and contact information.

**Live site:** Deploy `dist/` after building, or run locally at [http://localhost:5173](http://localhost:5173).

## Features

- **Hero** — Introduction, tagline, social links, resume download
- **About** — Background and focus areas (ML/AI, computer vision, full-stack)
- **Skills** — Grouped technical and soft skills
- **Projects** — Featured work with GitHub and live demo links
- **Achievements** — GSSoC, LeetCode, Dean's List, SAP coordinator
- **Education** — Academic timeline and certifications
- **Contact** — Email, phone, LinkedIn, GitHub
- Responsive layout with mobile navigation
- Dark theme with emerald accent styling

## Featured projects

| Project | Highlights |
|---------|------------|
| [IntenseOS Air Mouse](https://github.com/jasleenjk07/intenseos-air-mouse) | Webcam gesture control with OpenCV & MediaPipe |
| [Cravix Platform](https://github.com/jasleenjk07/Cravix-platform) | Campus food pre-ordering (KMP + FastAPI) |
| [Transliteration Consistency Pipeline](https://github.com/jasleenjk07/translit-consistency) | English–Hindi canonical mapping pipeline |
| [Patient Segmentation System](https://github.com/jasleenjk07/patient-segmentation-system) | NHANES clustering + Q-learning recommendations |
| [BlinkIt Analytics — BIOG](https://github.com/jasleenjk07/ML_Project) | Streamlit BI dashboard and demand forecasting |

## Tech stack

| Layer | Technologies |
|-------|----------------|
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Fonts | DM Sans, Fraunces, JetBrains Mono |

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/         # Navbar, Hero, About, Skills, Projects, etc.
│   ├── data/
│   │   └── resume.ts       # Single source of truth for site content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## Getting started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm

### Install and run

```bash
git clone https://github.com/jasleenjk07/portfolio-resume.git
cd portfolio-resume
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other scripts

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

## Deployment

1. Run `npm run build`.
2. Deploy the `dist/` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com).

**GitHub Pages:** If the site is served from a project subdirectory (e.g. `/portfolio/`), set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/portfolio-resume/',
  // ...
})
```

## Customize content

All copy, projects, skills, achievements, and contact links live in **`src/data/resume.ts`**. Update that file and refresh — no need to edit individual components for most changes.

To replace the downloadable resume, update **`public/resume.pdf`**.

## Contact

- **Email:** kaurjasleen6104@gmail.com
- **LinkedIn:** [linkedin.com/in/jasleenkaur31](https://www.linkedin.com/in/jasleenkaur31)
- **GitHub:** [github.com/jasleenjk07](https://github.com/jasleenjk07)

## License

Personal portfolio — all rights reserved unless otherwise noted.
