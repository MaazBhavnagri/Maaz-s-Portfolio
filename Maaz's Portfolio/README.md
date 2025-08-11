# Maaz's Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🎭 Smooth animations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maaz-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── sections/      # Page sections
│   ├── Navigation.tsx # Navigation component
│   ├── Footer.tsx     # Footer component
│   └── ThemeToggle.tsx # Theme toggle
├── pages/             # Page components
├── assets/            # Static assets
├── lib/               # Utility functions
└── hooks/             # Custom hooks
```

## Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize the design by modifying the Tailwind configuration in `tailwind.config.ts`.

### Theme

The project supports dark and light themes. The theme toggle is located in the navigation bar.

## Deployment

The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
