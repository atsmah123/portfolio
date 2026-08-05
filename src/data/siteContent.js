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

  tagline: 'MS Mechanical Engineering | Applied ML, GenAI & DRL for Science',
  intro:
    'Applying generative models and deep reinforcement learning to scientific discovery — building ML systems that learn, control and explain complex physical processes.',
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
    area: 'Applied ML & GenAI',
    items: ['PyTorch', 'TensorFlow', 'Diffusion Models', 'Transformers', 'SciML'],
  },
  {
    icon: 'Bot',
    area: 'Deep RL & Control',
    items: ['Deep RL', 'Policy Optimization', 'Adaptive Control', 'Gymnasium'],
  },
  {
    icon: 'ScanSearch',
    area: 'Explainability',
    items: ['SHAP', 'Feature Attribution', 'Surrogate Models', 'XAI'],
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
    "I'm a graduate researcher at the **University of Michigan** working on **AI for Science** — applying generative models and deep reinforcement learning to problems in physics and engineering.",
    'My current work builds **DRL-based control policies** for complex physical systems and uses **explainable AI** to understand *why* those policies work — turning black-box controllers into something a scientist can reason about.',
    'That sits on a deep computational foundation: published research in **turbulent boundary layers**, **CUDA-accelerated** solvers, and large-scale simulation on HPC systems. I know the physics my models are learning.',
    'As co-founder of **Applied Aero Labs**, I took a hardware product from concept to funded prototype, pairing technical depth with an entrepreneurial streak.',
  ],
  // `value` is the number counted up to; `suffix`/`prefix` wrap it.
  stats: [
    { icon: 'Globe', label: 'International Research Collaborations', value: 4 },
    { icon: 'BookOpen', label: 'Peer-Reviewed Publications', value: 1 },
    { icon: 'Banknote', label: 'Non-Dilutive Funding Raised', value: 12000, prefix: '$' },
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
    subheading: 'Machine learning for scientific discovery, backed by simulation and hardware.',
  },
  publications: {
    heading: 'Publications',
    subheading: 'Peer-reviewed research output.',
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
