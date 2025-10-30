# Atharva Mahajan - Portfolio Website

Personal portfolio website showcasing my work in Computational Fluid Dynamics, Machine Learning, and Optimization.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio-source/
├── public/              # Static assets (images, CV, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/            # Portfolio data
│   │   └── portfolioData.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

- 🎨 Modern, responsive design
- 🌙 Dark theme
- ⚡ Fast page loads with Vite
- 📱 Mobile-friendly
- 🎯 SEO optimized
- ♿ Accessible

## Deployment

The site is deployed on GitHub Pages with automatic deployment via GitHub Actions.

### Initial Setup

1. Go to your GitHub repository settings
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

### Automatic Deployment

The site automatically deploys when you push to the `main` branch. The GitHub Actions workflow will:
1. Build the project
2. Deploy to GitHub Pages

### Manual Deployment

To manually trigger a deployment:
1. Go to the **Actions** tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Local Build

```bash
npm run deploy
```

The site will be available at: `https://atsmah123.github.io/portfolio/`

## License

© 2025 Atharva Mahajan. All rights reserved.
