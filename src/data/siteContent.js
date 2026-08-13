/**
 * SITE CONTENT
 * -----------------------------------------------------------------------------
 * All wording, links and headings live here. Edit this file to change text on
 * the site — you should never need to open a component to reword something.
 *
 * Projects and jobs live in the sibling file: portfolioData.js
 */

// -----------------------------------------------------------------------------
// Who you are — used in the hero, navbar logo, footer and page metadata.
// -----------------------------------------------------------------------------
export const profile = {
  firstName: 'ATHARVA',
  lastName: 'MAHAJAN',
  initials: 'AM',

  // Sits above the name in the hero — your one-line positioning.
  kicker: 'AI4Science',

  tagline: 'MS Mechanical Engineering | Generative Models & RL for Physical Systems',
  intro:
    'Building generative models and closed-loop control policies for high-dimensional physical systems — from reward-guided flow matching that cuts drag by 48.95%, to geometry-generalizing surrogates that replace costly CFD runs with a model query.',
  institution: {
    name: 'University of Michigan',
    url: 'https://umich.edu',
  },
  email: 'atharva@umich.edu',
  linkedin: 'https://www.linkedin.com/in/atharva-mahajan-/',
  photo: 'images/profile.jpeg',
  resume: 'atharva_mahajan_cv.pdf',
}

// -----------------------------------------------------------------------------
// CORE SKILLS — shown right on the landing page so a recruiter sees your
// stack without scrolling. Keep this to 3-4 groups of 4-5 items; more than
// that and it stops being scannable.
// -----------------------------------------------------------------------------
export const coreSkills = [
  {
    icon: 'BrainCircuit',
    area: 'Generative Modeling',
    items: ['Flow Matching', 'Diffusion', 'Guided Sampling', 'PyTorch', 'SciML'],
  },
  {
    icon: 'Bot',
    area: 'Deep RL & Control',
    items: ['Deep RL', 'Reward Modeling', 'Policy Optimization', 'Closed-Loop Control'],
  },
  {
    icon: 'ScanSearch',
    area: 'Surrogates & Explainability',
    items: ['Neural Surrogates', 'Reduced-Order Modeling', 'SHAP', 'XAI'],
  },
  {
    icon: 'Cpu',
    area: 'Scientific Computing',
    items: ['Python', 'CUDA', 'HPC', 'CFD', 'Fortran'],
  },
]

// -----------------------------------------------------------------------------
// Navigation. `id` must match the id="" on the matching <section>.
// Remove an entry here to drop it from the navbar.
// -----------------------------------------------------------------------------
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

// -----------------------------------------------------------------------------
// About section. Each string in `paragraphs` renders as its own paragraph.
// Wrap words in **double asterisks** to highlight them in the accent colour.
// -----------------------------------------------------------------------------
export const about = {
  heading: 'About',
  paragraphs: [
    "I'm a graduate researcher at the **University of Michigan** working on **AI for Science** — building generative models and closed-loop control policies for high-dimensional physical systems.",
    'My current work, **Policy-DRIFT**, trains a **conditional flow-matching** model over a multi-regime flow manifold and steers its sampling trajectories with **reward guidance**, so the generator proposes flow states that are both physically realizable and reward-maximizing. A lightweight **deep-RL policy** then learns to reach them — reaching **48.95% drag reduction** at **37× lower actuation energy** than the DRL benchmark.',
    'In parallel I work on **geometry-generalizing foundation models** for fluid flow: surrogates that transfer across shapes rather than being retrained per case, so a design query becomes a **model query instead of a costly CFD run**.',
    'Both threads share a conviction — let a learned model say *where a system should go*, and let a small controller or a single forward pass work out the rest. I also use **explainable AI** to interrogate what those models have actually learned.',
    'That sits on a deep computational foundation: published research in **turbulent boundary layers**, a **450× CUDA-accelerated** flow solver, and large-scale DNS on HPC systems. I know the physics my models are learning.',
    'As co-founder of **Applied Aero Labs**, I took a hardware product from concept to grant-funded prototype, pairing technical depth with an entrepreneurial streak.',
  ],
  // `value` is the number counted up to; `suffix`/`prefix` wrap it.
  stats: [
    { icon: 'Globe', label: 'International Research Collaborations', value: 4 },
    { icon: 'BookOpen', label: 'Publications & Preprints', value: 2 },
    { icon: 'Award', label: 'Grant-Funded Venture Co-Founded', value: 1 },
  ],
}

// -----------------------------------------------------------------------------
// Section headings and their short descriptions.
// -----------------------------------------------------------------------------
export const sections = {
  experience: {
    heading: 'Experience',
    subheading:
      'Research, teaching and building — from Stockholm to Ann Arbor. Select an institution to expand.',
  },
  projects: {
    heading: 'Projects',
    subheading:
      'Generative models and learned control for physical systems, backed by simulation and hardware.',
  },
  publications: {
    heading: 'Publications',
    subheading: 'Peer-reviewed articles and preprints.',
  },
  contact: {
    heading: 'Contact',
    subheading:
      "I'm currently exploring opportunities in computational fluid dynamics, machine learning, and aerodynamics research. Whether you have a question or just want to say hi, feel free to reach out.",
  },
}

// -----------------------------------------------------------------------------
// Footer.
// -----------------------------------------------------------------------------
export const footer = {
  // Year updates automatically; this is just the name beside it.
  owner: 'Atharva Mahajan',
  builtWith: 'Built with React, Vite & Tailwind CSS',
}
