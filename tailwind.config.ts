import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#0ea5e9',
        accent: '#06b6d4',
        dark: '#1a202c',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
}
export default config
