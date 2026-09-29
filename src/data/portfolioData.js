/**
 * PROJECTS, EXPERIENCE & PUBLICATIONS
 * -----------------------------------------------------------------------------
 * Add, remove or reorder entries here — the site rebuilds its sections from
 * these arrays. Order in the array is the order shown on the page.
 *
 * Text like headings and bio copy lives in the sibling file: siteContent.js
 *
 * IMAGES: put the file in public/images/projects/ and reference it as
 *         'images/projects/your-file.png'  (no leading slash).
 */

// -----------------------------------------------------------------------------
// PROJECTS — shown as cards; clicking one opens a detail modal.
//   featured: true  → card spans two columns on large screens.
//   liveUrl        → omit or set '' to hide the link button in the modal.
//   linkLabel      → text on that button (default: 'View Project').
// -----------------------------------------------------------------------------
export const projects = [
  {
    title: 'Policy-DRIFT: Dynamic Reward-Informed Flow Trajectory Steering',
    category: 'NeurIPS 2026 · Generative Models + Deep RL',
    image: 'images/projects/policy-drift.jpg',
    featured: true,
    description:
      'Accepted to NeurIPS 2026. A conditional flow-matching model proposes reward-maximizing flow states; a lightweight RL policy learns to reach them. 48.95% drag reduction at 37× lower actuation energy.',
    longDescription:
      'Accepted to NeurIPS 2026 (camera-ready in preparation; the arXiv preprint is the current version). Most learned flow controllers ask a policy to discover both what a good flow state looks like and how to get there. Policy-DRIFT splits those jobs. A conditional flow-matching generative model is trained over a multi-regime flow manifold, and its sampling trajectories are steered by Terminal Reward Guidance — so the generator synthesizes target states that are simultaneously physically realizable and reward-maximizing. A small deep-RL policy is then trained only to track those targets. The result reaches 48.95% drag reduction at Re_τ = 180, a 16.2% improvement over the DRL benchmark, while spending 37× less actuation energy. The end-to-end PyTorch/GPU stack was built over 22,000+ DNS snapshot pairs, and the deployed controller runs from wall-only sensing with no generative model queries at inference.',
    techStack: ['Flow Matching', 'Guided Sampling', 'Deep RL', 'PyTorch', 'DNS'],
    liveUrl: 'https://arxiv.org/abs/2605.14022',
    linkLabel: 'Read the Paper (arXiv)',
  },
  {
    title: 'CFD Foundation Models for Geometry-Generalizable Flow Prediction',
    category: 'AI4Science · Foundation Models + Self-Supervised Learning',
    image: 'images/projects/meshfree.jpg',
    featured: true,
    description:
      'A pretrained CFD surrogate that predicts flow on geometries it has never seen — zero-shot, with no per-case retraining.',
    longDescription:
      'Conventional neural surrogates are retrained for every new geometry, which pins them to the single design they were fitted to and makes them useless for exploring a design space. This work pretrains a CFD surrogate that generalizes across shapes instead. It pairs a joint-embedding predictive architecture (JEPA) — which learns flow representations by predicting in latent space rather than reconstructing pixels — with a mesh-density-preserving geometry encoding, so the model reads a shape without discarding the resolution the mesh spent where the physics is hardest. Preliminary results show zero-shot prediction on held-out geometries with no fine-tuning. The target is inference-time flow estimation at a fraction of solver cost, turning each new candidate design from a full CFD run into a single model query.',
    techStack: ['Foundation Models', 'JEPA', 'Self-Supervised Learning', 'PyTorch', 'CFD'],
    liveUrl: '',
  },
  {
    title: 'Uncertainty-Aware Airfoil Pressure Reconstruction from Sparse Taps',
    category: 'Generative Models · Uncertainty Quantification',
    image: 'images/projects/cfm-airfoil.png',
    description:
      'A conditional flow-matching model rebuilds a full airfoil pressure field from as few as five sensors — and says how confident it is.',
    longDescription:
      'Wind-tunnel and flight-test models carry only a handful of pressure taps, because each one needs structural access and a transducer. That leaves perhaps 10–100 measurements standing in for a field with thousands of meaningful degrees of freedom. Classical interpolation fills the gaps but cannot say how much to trust the result — a problem when the missing region is the leading-edge suction peak that dominates lift. This project treats reconstruction as sampling from a posterior instead of fitting a curve. A conditional flow-matching model learns the distribution of pressure fields consistent with the sparse readings, so drawing an ensemble gives both a reconstruction and calibrated error bars. Sparse taps are encoded by a DeepSets network with learned positional attention, which accepts sensors in any arrangement and learns which positions carry the most information; a 1D convolutional UNet vector field is conditioned on that encoding via FiLM at every scale. On the AirfRANS benchmark it reaches 183 Pa mean absolute error at 10 taps — 14% of the pressure standard deviation — recovers lift and drag to ΔC_L = 0.094 and ΔC_D = 0.015, and stays well-calibrated at 97% coverage within ±2σ. A controlled ablation against randomized tap placement puts a number on what it costs to not choose where sensors go: 25–35% higher error.',
    techStack: ['Flow Matching', 'DeepSets', 'Uncertainty Quantification', 'PyTorch', 'AirfRANS'],
    liveUrl: 'https://github.com/atsmah123/cfm-airfoil-pressure',
    linkLabel: 'View the Code',
  },
  {
    title: 'Upstream History and Local Disequilibration in APG TBLs',
    category: 'Published Research',
    image: 'images/projects/turb.png',
    description:
      'Peer-reviewed study on turbulence behaviour in adverse pressure gradient boundary layers.',
    longDescription:
      'This work at KTH Royal Institute of Technology examined how upstream pressure gradients influence Reynolds stresses in turbulent boundary layers. Using Direct Numerical Simulation data, the study analyzed turbulence structures and transport mechanisms, leading to a publication in the International Journal of Heat and Fluid Flow.',
    techStack: ['DNS', 'MATLAB', 'Data Analysis', 'HPC'],
    liveUrl: 'https://www.sciencedirect.com/science/article/pii/S0142727X25002620',
    linkLabel: 'View Publication',
  },
  {
    title: 'CUDA-Accelerated Meshfree CFD Solver',
    category: 'High-Performance Computing',
    image: 'images/projects/airfoil.png',
    description:
      'GPU-parallelized meshfree Euler solver driven to a 450× speedup over the CPU baseline.',
    longDescription:
      'Developed a 3D meshfree Euler solver in Fortran and CUDA, then drove a 450× GPU speedup over the CPU baseline through kernel restructuring, memory-coalescing, and NVIDIA Nsight-guided profiling. The work was as much performance engineering as numerics — finding where a meshfree formulation maps badly onto GPU memory hierarchies, and restructuring it until it did.',
    techStack: ['CUDA', 'Fortran', 'GPU Computing', 'CFD'],
    liveUrl: '',
  },
  {
    title: 'Portable Fan-Array Wind Tunnel',
    category: 'Hardware & Entrepreneurship',
    image: 'images/projects/wind-tunnel.jpg',
    description:
      'Co-founded a startup building a portable fan-array wind tunnel for education and R&D.',
    longDescription:
      "At Applied Aero Labs, co-founded and built India's first portable, multi-velocity fan-array wind tunnel. Work spanned mechanical design in SolidWorks, embedded control and electronics integration, and client validation. The venture was competitively selected for a government innovation grant, which funded prototyping and initial deployment as an educational and research tool.",
    techStack: ['SolidWorks', 'Embedded Control', 'Hardware Design', 'Govt. Grant'],
    liveUrl: '',
  },
  {
    title: 'Underwater Pitching Airfoil Study',
    category: 'Experimental Research',
    image: 'images/projects/underwater_pitching.png',
    description: 'Experimental investigation of hydrodynamic forces on oscillating hydrofoils.',
    longDescription:
      'Built and used a custom experimental setup to measure hydrodynamic forces on pitching airfoils in water. The work involved designing the pitching mechanism, conducting force measurements, and analyzing flow behaviour relevant to propulsion and energy-harvesting concepts.',
    techStack: ['Experimental Design', 'LabVIEW', 'Data Analysis', 'Hydrodynamics'],
    liveUrl: '',
  },
]

// -----------------------------------------------------------------------------
// EXPERIENCE — grouped on the page by `org`, newest group first.
//   Roles sharing an `org` value are collapsed into one expandable chapter,
//   so three BITS roles read as one chapter rather than three separate items.
//   org      → the heading text for the group (must match exactly to group)
//   orgMeta  → small label beside the org name (city, country)
//   current  → adds a "Current" badge and a pulsing dot
// -----------------------------------------------------------------------------
export const experience = [
  {
    role: 'Policy-DRIFT — Dynamic Reward-Informed Flow Trajectory Steering (NeurIPS 2026)',
    date: 'Aug 2025 — Present',
    org: 'University of Michigan',
    orgMeta: 'Ann Arbor, MI',
    current: true,
    description:
      'First author; accepted to NeurIPS 2026. Trained a conditional flow-matching model over a multi-regime flow manifold and steered its sampling with Terminal Reward Guidance, then trained a lightweight deep-RL policy to track the generated targets — reaching 48.95% drag reduction at 37× lower actuation energy. Advised by Prof. Ricardo Vinuesa.',
    technologies: ['Flow Matching', 'Guided Sampling', 'Deep RL', 'PyTorch', 'DNS'],
  },
  {
    role: 'CFD Foundation Models for Geometry-Generalizable Flow Prediction',
    date: 'Jul 2026 — Present',
    org: 'University of Michigan',
    orgMeta: 'Ann Arbor, MI',
    current: true,
    description:
      'Developing a pretrained CFD surrogate that generalizes across unseen geometries without per-case retraining, pairing a joint-embedding predictive architecture (JEPA) with a mesh-density-preserving geometry encoding. Preliminary results show zero-shot prediction on held-out geometries without fine-tuning, targeting inference-time flow estimation at a fraction of solver cost.',
    technologies: ['Foundation Models', 'JEPA', 'Self-Supervised Learning', 'PyTorch', 'CFD'],
  },
  {
    role: 'Research & Teaching Assistant — Deep Learning for Fluid Mechanics',
    date: 'Jan 2025 — Present',
    org: 'University of Michigan',
    orgMeta: 'Ann Arbor, MI',
    current: true,
    description:
      'Designed and taught a hands-on deep-learning curriculum (MLPs, RNNs, autoencoders, CNNs) for 30+ graduate students and practicing engineers. Authored the core PyTorch/Jupyter notebook suite on flow-field reconstruction, reduced-order modeling and data-driven turbulence closure, and delivered the applied version to Siemens engineers in Stockholm.',
    technologies: ['PyTorch', 'Deep Learning', 'Teaching', 'Reduced-Order Modeling'],
  },
  {
    role: 'Upstream Pressure-History Effects on Adverse-Pressure-Gradient TBLs',
    date: 'Jun 2024 — Jun 2025',
    org: 'KTH Royal Institute of Technology',
    orgMeta: 'Stockholm, Sweden',
    description:
      'Ran DNS/LES campaigns on turbulent boundary layers under varying upstream pressure histories, quantifying non-local memory effects via spectral densities, Reynolds-stress budgets and β-evolution. Published in the International Journal of Heat and Fluid Flow. Advised by Prof. Ricardo Vinuesa.',
    technologies: ['DNS/LES', 'MATLAB', 'Python', 'HPC'],
  },
  {
    role: 'Co-founder, Applied Aero Labs',
    date: 'Apr 2023 — May 2025',
    org: 'Applied Aero Labs',
    orgMeta: 'India',
    description:
      "Co-founded an aerodynamic R&D venture building India's first portable, multi-velocity fan-array wind tunnel. Secured a government innovation grant and owned mechanical design, embedded control and electronics integration, and client validation.",
    technologies: ['SolidWorks', 'Embedded Control', 'Product Design', 'Entrepreneurship'],
  },
  {
    role: 'Computational Analysis of Autophoretic Particles',
    date: 'May 2023 — May 2024',
    org: 'BITS Pilani',
    orgMeta: 'Pilani, India',
    description:
      'Performed numerical simulations of self-propelling microparticles near fluid interfaces to study flow behaviour in microfluidic settings.',
    technologies: ['OpenFOAM', 'Python', 'CFD', 'Microfluidics'],
  },
  {
    role: 'CUDA-Accelerated Meshfree CFD Solver',
    date: 'Aug 2022 — May 2023',
    org: 'BITS Pilani',
    orgMeta: 'Pilani, India',
    description:
      'Implemented a 3D Euler solver using CUDA and Fortran with meshfree methods, focusing on parallel algorithms for CFD simulations.',
    technologies: ['CUDA', 'Fortran', 'GPU', 'CFD'],
  },
  {
    role: 'Hydrodynamic Study of Underwater Pitching Airfoil',
    date: 'Feb 2021 — Dec 2023',
    org: 'BITS Pilani',
    orgMeta: 'Pilani, India',
    description:
      'Designed and used an underwater pitching airfoil rig to study hydrodynamic forces and flow patterns relevant to propulsion and energy-harvesting problems.',
    technologies: ['Experimental Design', 'LabVIEW', 'Data Analysis', 'Hydrodynamics'],
  },
]

// -----------------------------------------------------------------------------
// PUBLICATIONS — add new papers at the top.
//   Put YOUR name exactly as it appears in `authors` so it renders highlighted.
// -----------------------------------------------------------------------------
export const publications = [
  {
    title: 'Policy-DRIFT: Dynamic Reward-Informed Flow Trajectory Steering',
    authors: 'A. Mahajan, A. Vishwasrao, Y. Wang, R. Vinuesa',
    venue:
      'Advances in Neural Information Processing Systems (NeurIPS) 2026 · Poster — to appear',
    year: '2026',
    type: 'NeurIPS 2026',
    url: 'https://arxiv.org/abs/2605.14022',
    abstract:
      'Introduces a control framework that decouples target synthesis from actuation: a conditional flow-matching model is trained over a multi-regime flow manifold and steered by Terminal Reward Guidance to generate physically realizable, reward-maximizing flow states, which a lightweight deep-RL policy then learns to track. Achieves 48.95% drag reduction at Re_τ = 180 — a 16.2% improvement over the DRL benchmark — at 37× lower actuation energy, with the deployed controller running from wall-only sensing.',
  },
  {
    title:
      'Upstream history and local disequilibration in adverse pressure gradient turbulent boundary layers',
    authors: 'A. Mahajan, et al.',
    venue: 'International Journal of Heat and Fluid Flow',
    year: '2025',
    type: 'Journal Article',
    url: 'https://www.sciencedirect.com/science/article/pii/S0142727X25002620',
    abstract:
      'Investigates how upstream pressure gradient history influences Reynolds stress distributions and local equilibrium in turbulent boundary layers, using Direct Numerical Simulation datasets.',
  },
]

// Name highlighted within publication author lists.
export const authorName = 'A. Mahajan'
