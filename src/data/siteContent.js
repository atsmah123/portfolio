/**
 * SITE CONTENT
 * -----------------------------------------------------------------------------
 * All wording, links and headings live here. Edit this file to change text on
 * the site. You should never need to open a component to reword something.
 *
 * Projects and jobs live in the sibling file: portfolioData.js
 */

// -----------------------------------------------------------------------------
// Who you are: used in the hero, navbar logo, footer and page metadata.
// -----------------------------------------------------------------------------
export const profile = {
  firstName: 'Atharva',
  lastName: 'Mahajan',

  // Sits above the name in the hero, next to your institution.
  kicker: 'AI4Science',

  tagline: 'MS Mechanical Engineering | Generative Models & RL for Physical Systems',
  // One or two short sentences under your name in the hero. Keep it under
  // about 20 words so the whole hero fits on one screen.
  intro:
    'I build generative models and deep RL controllers for physical systems. First-author paper accepted to NeurIPS 2026.',
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
// CORE SKILLS: the grouped toolkit beside your bio in the About section.
// Keep this to 3-4 groups of 4-5 items so it stays scannable.
// -----------------------------------------------------------------------------
export const coreSkills = [
  {
    area: 'Generative Modeling',
    items: ['Flow Matching', 'Diffusion', 'Guided Sampling', 'PyTorch', 'SciML'],
  },
  {
    area: 'Deep RL & Control',
    items: ['Deep RL', 'Reward Modeling', 'Policy Optimization', 'Closed-Loop Control'],
  },
  {
    area: 'Foundation Models & Surrogates',
    items: ['Foundation Models', 'JEPA', 'Neural Surrogates', 'Reduced-Order Modeling', 'XAI'],
  },
  {
    area: 'Scientific Computing',
    items: ['Python', 'CUDA', 'HPC', 'CFD', 'Fortran'],
  },
]

// -----------------------------------------------------------------------------
// HIGHLIGHTS: the row of headline results directly under the hero.
// Only use numbers that appear in your papers or CV. Keep it to 3-4 items.
// -----------------------------------------------------------------------------
export const highlights = [
  { value: '48.95%', label: 'drag reduction with Policy-DRIFT' },
  { value: '37×', label: 'lower actuation energy than the DRL benchmark' },
  { value: '450×', label: 'GPU speedup on a meshfree CFD solver' },
  { value: '97%', label: 'calibrated ±2σ coverage on airfoil pressure reconstruction' },
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
// Wrap words in **double asterisks** to give them extra weight.
// -----------------------------------------------------------------------------
export const about = {
  heading: 'About',
  paragraphs: [
    "I'm a graduate researcher at the **University of Michigan** working on **AI for Science**, building generative models and closed-loop control policies for high-dimensional physical systems.",
    'My current work, **Policy-DRIFT** (first-authored and **accepted to NeurIPS 2026**), trains a **conditional flow-matching** model over a multi-regime flow manifold and steers its sampling trajectories with **reward guidance**, so the generator proposes flow states that are both physically realizable and reward-maximizing. A lightweight **deep-RL policy** then learns to reach them, reaching **48.95% drag reduction** at **37× lower actuation energy** than the DRL benchmark.',
    'In parallel I build **CFD foundation models** that generalize across geometries. Pairing a **joint-embedding predictive architecture (JEPA)** with a mesh-density-preserving geometry encoding, the surrogate predicts flow on shapes it has never seen (**zero-shot, with no per-case retraining**), so a design query becomes a **model query instead of a costly CFD run**.',
    'Both threads share a conviction: let a learned model say *where a system should go*, and let a small controller or a single forward pass work out the rest. I also use **explainable AI** to interrogate what those models have actually learned.',
    'That sits on a deep computational foundation: published research in **turbulent boundary layers**, a **450× CUDA-accelerated** flow solver, and large-scale DNS on HPC systems. I know the physics my models are learning.',
    'As co-founder of **Applied Aero Labs**, I took a hardware product from concept to grant-funded prototype, pairing technical depth with an entrepreneurial streak.',
  ],
  stats: [
    { label: 'International research collaborations', value: '4' },
    { label: 'Peer-reviewed publications', value: '2' },
    { label: 'Grant-funded venture co-founded', value: '1' },
  ],
}

// -----------------------------------------------------------------------------
// Section headings and their short descriptions.
// -----------------------------------------------------------------------------
export const sections = {
  experience: {
    heading: 'Experience',
    subheading:
      'Research, teaching and building, from Stockholm to Ann Arbor.',
  },
  projects: {
    heading: 'Projects',
    subheading:
      'Generative models and learned control for physical systems, backed by simulation and hardware.',
  },
  publications: {
    heading: 'Publications',
    subheading: 'Peer-reviewed conference and journal papers.',
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
