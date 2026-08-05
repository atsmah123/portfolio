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
  tagline: 'MS Mechanical Engineering | CFD, Machine Learning, Optimization',
  intro:
    'Driving innovation in engineering with advanced numerical methods, AI, and aerodynamic research.',
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
    "I'm a graduate student at the **University of Michigan**, specializing in computational fluid dynamics, machine learning, and optimization.",
    'My research sits at the intersection of AI and engineering — with published work in **turbulent boundary layers** and hands-on experience building **CUDA-accelerated** solvers.',
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
    subheading: 'Research, teaching and building — from Stockholm to Ann Arbor.',
  },
  projects: {
    heading: 'Projects',
    subheading: 'Selected work across simulation, hardware and machine learning.',
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
