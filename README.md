# Atharva Mahajan — Portfolio

Personal portfolio site covering work in computational fluid dynamics, machine
learning, and optimization.

**Live site:** https://atsmah123.github.io/portfolio/

Built with React 18, Vite, Tailwind CSS, Framer Motion and Lucide icons.
Type is Geist and Geist Mono, self-hosted via `@fontsource-variable`.

---

## Table of contents

- [Quick start](#quick-start)
- [Where everything lives](#where-everything-lives)
- [How to edit the site](#how-to-edit-the-site)
  - [Change text and wording](#change-text-and-wording)
  - [Add or edit a project](#add-or-edit-a-project)
  - [Add a job to the timeline](#add-a-job-to-the-timeline)
  - [Add a publication](#add-a-publication)
  - [Add or replace images](#add-or-replace-images)
  - [Replace your CV](#replace-your-cv)
  - [Change the colours](#change-the-colours)
  - [Add, remove or reorder sections](#add-remove-or-reorder-sections)
- [Publishing changes](#publishing-changes)
- [Previewing changes before they go live](#previewing-changes-before-they-go-live)
- [Rolling back](#rolling-back)
- [Design system reference](#design-system-reference)
- [Troubleshooting](#troubleshooting)

---

## Quick start

```bash
npm install      # first time only
npm run dev      # start local dev server → http://localhost:5173/portfolio/
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

You need **Node 18 or newer** (the deploy uses Node 20).

While `npm run dev` is running, saving any file updates the browser instantly.

---

## Where everything lives

```
portfolio-source/
├── public/                      ← files served as-is, not processed by the build
│   ├── images/
│   │   ├── profile.jpeg         ← your portrait (hero + about)
│   │   └── projects/            ← ALL project images go here
│   └── atharva_mahajan_cv.pdf   ← your CV
│
├── src/
│   ├── data/                    ←★ EDIT THESE TWO FILES FOR MOST CHANGES
│   │   ├── siteContent.js       ← bio, headings, stats, links, nav
│   │   └── portfolioData.js     ← projects, experience, publications
│   │
│   ├── components/
│   │   ├── Navbar.jsx  Hero.jsx  Highlights.jsx  About.jsx
│   │   ├── Experience.jsx  Projects.jsx
│   │   ├── Publications.jsx  Contact.jsx
│   │   └── ui/                  ← small reusable pieces
│   │       ├── Reveal.jsx       ← scroll-in animations
│   │       ├── SmartImage.jsx   ← lazy-loading image with fallback
│   │       └── SectionHeading.jsx
│   │
│   ├── index.css                ← design tokens (colours, spacing, buttons)
│   ├── App.jsx                  ← section order
│   └── main.jsx                 ← entry point (rarely touched)
│
├── .github/workflows/
│   ├── deploy.yml               ← publishes `main` to the live site
│   └── preview.yml              ← publishes other branches to a preview URL
│
├── index.html                   ← page title, SEO tags
├── tailwind.config.js
└── vite.config.js               ← `base` must match your repo name
```

**Rule of thumb:** for 90% of updates you only touch `src/data/`.
You should not need to open a component file to change wording.

---

## How to edit the site

### Change text and wording

Open **`src/data/siteContent.js`**. It holds your name, the short hero
intro, the highlight numbers under the hero, bio paragraphs, stats, section
headings and footer.

Keep `intro` to about 20 words so the whole hero fits on one screen. Only put
numbers in `highlights` that appear in your papers or CV.

To give a word extra weight inside a bio paragraph, wrap it in double
asterisks (single asterisks make it italic):

```js
paragraphs: [
  "I'm a graduate student at the **University of Michigan**, specializing in …",
]
```

### Add or edit a project

Open **`src/data/portfolioData.js`** and add an object to the `projects` array.
The order in the array is the order on the page. The **first** project is
shown large as the lead; the rest pair up below it, alternating wide and
narrow.

Use `fit: 'contain'` for white-background plots and diagrams: the whole
figure is shown on a light mat instead of being cropped. Leave it out for
photos, which are cropped to fill.

```js
{
  title: 'My New Project',
  category: 'High-Performance Computing',   // small label on the card
  image: 'images/projects/my-image.png',    // no leading slash
  fit: 'contain',                           // for plots/diagrams; omit for photos
  description: 'One line shown on the card.',
  longDescription: 'Longer text shown in the pop-up when the card is clicked.',
  techStack: ['CUDA', 'Python'],            // shown on the lead project and in the pop-up
  liveUrl: 'https://example.com',           // use '' to hide the button
  linkLabel: 'View Publication',            // button text (optional)
},
```

### Add a job to the timeline

Add an object to the `experience` array in the same file. Newest goes at
the top.

```js
{
  role: 'Research Assistant',
  date: 'Jan 2026 - Present',     // use a plain hyphen with spaces
  org: 'University of Michigan',   // groups roles — see below
  orgMeta: 'Ann Arbor, MI',
  current: true,          // shows a "Current" label beside the date
  description: 'What you worked on.',
  technologies: ['Python', 'PyTorch'],
},
```

**How grouping works:** roles that sit next to each other in the array and
share the **exact same `org` string** are listed together under one heading.
That's why your three BITS Pilani roles show under a single "BITS Pilani"
heading rather than as three separate entries.

- To add a role to an existing institution, give it the same `org` and
  place it beside the others in the array.
- To start a new chapter, use a new `org` value.

### Edit the skills

The "Toolkit" panel beside your bio comes from `coreSkills` in
**`src/data/siteContent.js`**:

```js
{
  area: 'Applied ML & GenAI',
  items: ['PyTorch', 'Diffusion Models', 'Transformers'],
},
```

Keep this to **3–4 groups of 4–5 items** — it exists so a recruiter can read
your stack in a couple of seconds, and more entries defeat that.

### Add a publication

Add an object to the `publications` array:

```js
{
  title: 'Paper title',
  authors: 'A. Mahajan, B. Coauthor',   // your name is auto-highlighted
  venue: 'Journal of Fluid Mechanics',
  year: '2026',
  type: 'Journal Article',
  url: 'https://doi.org/…',
  abstract: 'Two-sentence summary.',     // optional
},
```

Your name is highlighted automatically wherever it matches the `authorName`
value exported at the bottom of `portfolioData.js`.

If you empty the `publications` array the whole section disappears from the
page — but remember to also remove `publications` from `navLinks` in
`siteContent.js`.

### Add or replace images

1. Drop the file into **`public/images/projects/`**.
2. Reference it as `images/projects/your-file.png` — **no leading slash**.

**Please resize before adding.** Aim for roughly **1600px wide and under
400 KB**. Oversized images are the single biggest thing that slows the site
down.

> Housekeeping note: `public/images/projects/project4.jpg` is not referenced
> by any project, so it is safe to delete if you don't want it.

If an image is missing or broken the site shows a tidy branded placeholder
rather than a broken-image icon, so a bad path will never look broken to a
visitor — but do check the browser console.

### Replace your CV

Overwrite `public/atharva_mahajan_cv.pdf`, keeping the same filename.
If you rename it, update `resume:` in `src/data/siteContent.js`.

### Change the colours

All colours are defined once at the top of **`src/index.css`**. The site
follows the visitor's light/dark system setting, so there are two sets: one
under `:root` (light) and one under `@media (prefers-color-scheme: dark)`.
Change a value there and it updates everywhere:

```css
--color-accent: #bf4a1c;       /* the one accent: buttons, links, highlights */
--color-background: #f7f7f8;   /* page background */
--color-surface: #fdfdfd;      /* panels (toolkit, publications, pop-up) */
--color-plate: #fdfdfd;        /* mat behind research figures */
--color-primary: #18181b;      /* headings / main text */
--color-secondary: #4a4a52;    /* body text */
```

If you change the accent, change it in both blocks and check the text on
buttons is still readable (`--color-on-accent`).

### Add, remove or reorder sections

Two files must agree:

1. **`src/App.jsx`** — the order of components inside `<main>` is the order
   on the page.
2. **`src/data/siteContent.js`** — the `navLinks` array controls the navbar.
   Each `id` must match the `id=""` on the matching `<section>`.

---

## Publishing changes

The live site rebuilds automatically whenever `main` is updated.

```bash
git add -A
git commit -m "Update projects"
git push origin main
```

Then watch the **Actions** tab on GitHub. The deploy takes about a minute.

> The site is served from the build artifact, so you never commit the `dist/`
> folder — it's gitignored on purpose.

**One-time setup** (already done, for reference): Settings → Pages → Source
must be set to **GitHub Actions**.

---

## Previewing changes before they go live

Work on a branch and your changes build to a **separate preview URL**,
leaving the live site untouched:

```bash
git checkout -b my-changes
# …make edits…
git commit -am "Try a new layout"
git push origin my-changes
```

`preview.yml` builds that branch and publishes it to the `gh-pages-preview`
branch.

**First-time setup (once only):** after the first preview build runs, go to
**Settings → Pages** on GitHub and add `gh-pages-preview` as a source, or
create a repo named `portfolio-preview` to serve it from. The preview then
lives at `https://atsmah123.github.io/portfolio-preview/`.

When you're happy, merge it:

```bash
git checkout main
git merge my-changes
git push origin main      # this deploys live
```

Local preview needs no setup at all — just `npm run dev`.

---

## Rolling back

The version of the site before the 2026 redesign is tagged `v1-original`.

```bash
git checkout v1-original          # look at the old version
git checkout main                 # come back

# Roll the live site back:
git revert <bad-commit-hash>
git push origin main
```

To see what changed: `git diff v1-original main --stat`

---

## Design system reference

Rather than repeating long Tailwind class strings, the site uses shared
classes defined in `src/index.css`:

| Class | What it's for |
|---|---|
| `.section-shell` | Standard max-width + horizontal padding |
| `.section-spacing` | Standard vertical padding for a section |
| `.section-title` | Section heading |
| `.meta` | Small mono text for dates, venues and categories |
| `.chip` | Small technology tag (project pop-up) |
| `.figure-plate` | Light mat behind research figures |
| `.btn-primary` | Filled accent button |
| `.btn-ghost` | Outlined button |

Shape rule: panels and images use 12px corners (`rounded-xl`); buttons and
tags are full pills.

Reusable React pieces in `src/components/ui/`:

| Component | What it does |
|---|---|
| `<Reveal>` | Fades/slides children in on scroll |
| `<RevealGroup>` / `<RevealItem>` | Staggers a grid or list in sequence |
| `<SmartImage>` | Lazy-loads, shows figures whole or photos cropped, falls back if broken |
| `<SectionHeading>` | Consistent title + subtitle block |

All animation respects the operating system's **"reduce motion"** setting —
if a visitor has it on, everything appears instantly instead.

---

## Troubleshooting

**Images don't appear locally but the path looks right**
Paths must be relative to `public/` with no leading slash:
`images/projects/foo.png`, not `/images/projects/foo.png`.

**Site works locally but is unstyled or blank once deployed**
`base` in `vite.config.js` must match your repo name. It's `/portfolio/`
because the repo is `atsmah123/portfolio`. Rename the repo and you must
update this too.

**A nav link scrolls nowhere**
The `id` in `navLinks` must match the `id=""` on the section element.

**Changes pushed but the live site is unchanged**
Check the Actions tab for a failed run, and hard-refresh
(<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>) to defeat
browser caching.

**`npm ci` fails in the GitHub Action**
`package-lock.json` is out of sync — run `npm install` locally and commit the
updated lockfile.

---

© 2026 Atharva Mahajan. All rights reserved.
