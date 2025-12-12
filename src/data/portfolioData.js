export const projects = [
  {
    title: "Portable FAWT",
    category: "Hardware & Entrepreneurship",
    image: "/wind-tunnel.jpg",
    description: "Co-founded a startup working on a portable fan-array wind tunnel for education and R&D.",
    longDescription: "At Applied Aero Labs, contributed to the design and construction of a portable, open-circuit, fan-array wind tunnel. Work spanned mechanical design in SolidWorks, basic sensor integration using Arduino, and early-stage control interface development. The project received approximately $12,000 in government funding to support prototyping and initial deployment as an educational and research tool.",
    techStack: ["SolidWorks", "Arduino", "Hardware Design", "Govt. Funding"],
    liveUrl: "#"
  },
  {
    title: "Upstream History and Local Disequilibration in APG TBLs",
    category: "Academic Research",
    image: "/turb.png",
    description: "Peer-reviewed study on turbulence behavior in adverse pressure gradient boundary layers.",
    longDescription: "This work at KTH Royal Institute of Technology examined how upstream pressure gradients influence Reynolds stresses in turbulent boundary layers. Using Direct Numerical Simulation data, the study analyzed turbulence structures and transport mechanisms, leading to a publication in the International Journal of Heat and Fluid Flow.",
    techStack: ["DNS", "MATLAB", "Fluid Dynamics", "Data Analysis"],
    liveUrl: "https://www.sciencedirect.com/science/article/pii/S0142727X25002620"
  },
  {
    title: "CUDA-Accelerated Meshfree CFD Solver",
    category: "High-Performance Computing",
    image: "/airfoil.png",
    description: "CUDA-parallelized meshfree flow solver with significant speedup over CPU baselines.",
    longDescription: "Developed a 3D compressible flow solver using CUDA and Fortran with a meshfree particle formulation. The implementation focused on exploiting GPU parallelism to improve runtime performance relative to CPU-based versions for representative CFD test cases.",
    techStack: ["CUDA", "Fortran", "GPU Computing", "CFD"],
    liveUrl: "#"
  },
  {
    title: "Adaptive Flow Control optimized through XAI techniques",
    category: "AI for Fluids",
    image: "/meshfree.jpg",
    description: "Used explainable AI to analyze and improve flow control strategies.",
    longDescription: "Developing an adaptive flow control framework where control policies are analyzed and refined using SHAP-based explainability techniques. The setup combines CFD or surrogate models with ML-based controllers, using XAI tools to understand feature importance and guide improvements in actuation strategies.",
    techStack: ["XAI", "SHAP", "Python", "CFD", "ML"],
    liveUrl: "#"
  },
  {
    title: "Underwater Pitching Airfoil Study",
    category: "Experimental Research",
    image: "/underwater_pitching.png",
    description: "Experimental investigation of hydrodynamic forces on oscillating hydrofoils.",
    longDescription: "Built and used a custom experimental setup to measure hydrodynamic forces on pitching airfoils in water. The work involved designing the pitching mechanism, conducting force measurements, and analyzing flow behavior relevant to propulsion and energy-harvesting concepts.",
    techStack: ["Experimental Design", "LabVIEW", "Data Analysis", "Hydrodynamics"],
    liveUrl: "#"
  }
];


export const experience = [
  {
    role: "Adaptive Flow Control optimized through XAI",
    date: "Aug 2025 - Present",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    description: "Working on adaptive flow control strategies supported by SHAP-based explainable AI analysis to interpret and improve ML-driven control decisions.",
    technologies: ["XAI", "SHAP", "Python", "CFD", "ML"]
  },
  {
    role: "Research & Teaching Assistant - ML/AI for Fluid Mechanics",
    date: "Aug 2024 - Present",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    description: "Supporting graduate-level teaching on AI methods in fluid mechanics and helping develop interactive material for turbulence modeling and CFD topics.",
    technologies: ["Machine Learning", "TensorFlow", "Python", "CFD"]
  },
  {
    role: "Effects of Upstream Pressure History on Reynolds Stresses",
    date: "Jan 2024 - May 2025",
    company: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    description: "Analyzed DNS datasets to study turbulence structures in adverse pressure gradient boundary layers, leading to a publication in the International Journal of Heat and Fluid Flow.",
    technologies: ["DNS", "MATLAB", "Python", "HPC"]
  },
  {
    role: "CUDA-Accelerated Meshfree CFD Solver",
    date: "Aug 2022 - May 2023",
    company: "BITS Pilani",
    location: "Pilani, India",
    description: "Implemented a 3D Euler solver using CUDA and Fortran with meshfree methods, focusing on parallel algorithms for CFD simulations.",
    technologies: ["CUDA", "Fortran", "GPU", "CFD"]
  },
  {
    role: "Co-founder, Applied Aero Labs",
    date: "Jan 2023 - May 2025",
    company: "Startup",
    location: "India",
    description: "Contributed to the design and development of a portable fan-array wind tunnel and helped secure around $12,000 in government funding to support development and early commercialization.",
    technologies: ["SolidWorks", "Arduino", "Product Design", "Entrepreneurship"]
  },
  {
    role: "Computational Analysis of Autophoretic Particles",
    date: "May 2023 - May 2024",
    company: "BITS Pilani",
    location: "Pilani, India",
    description: "Performed numerical simulations of self-propelling microparticles near fluid interfaces to study flow behavior in microfluidic settings.",
    technologies: ["OpenFOAM", "Python", "CFD", "Microfluidics"]
  },
  {
    role: "Hydrodynamic Study of Underwater Pitching Airfoil",
    date: "Feb 2021 - Dec 2023",
    company: "BITS Pilani",
    location: "Pilani, India",
    description: "Designed and used an underwater pitching airfoil rig to study hydrodynamic forces and flow patterns relevant to propulsion and energy-harvesting problems.",
    technologies: ["Experimental Design", "LabVIEW", "Data Analysis", "Hydrodynamics"]
  }
];


export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharva-mahajan-/",
    icon: "Linkedin"
  },
  {
    name: "Mail",
    url: "mailto:atharva@umich.edu",
    icon: "Mail"
  }
];
