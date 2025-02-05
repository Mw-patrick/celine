// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Adjust based on your folder structure
    './pages/**/*.{js,ts,jsx,tsx}',  // Add this if you use the pages folder
    './components/**/*.{js,ts,jsx,tsx}',  // Include components if any
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',  // Custom CSS variable
        foreground: 'var(--foreground)',  // Custom CSS variable
        primary: 'var(--primary)',        // Custom CSS variable
        secondary: 'var(--secondary)',    // Custom CSS variable
        muted: 'var(--muted)',            // Custom CSS variable
        accent: 'var(--accent)',          // Custom CSS variable
      },
    },
  },
  plugins: [],
};

export default config;
