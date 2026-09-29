# Medical Education Website - Next.js

A modern, fully responsive Next.js website for medical education and MBBS admission guidance. Built with TypeScript, Tailwind CSS, and Next.js 14.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on all devices (90%, 100% and beyond)
- **Modern UI/UX** - Clean and professional design using Tailwind CSS
- **Fast Performance** - Optimized images and lazy loading with Next.js Image component
- **Multiple Sections**:
  - Hero section with call-to-action
  - Services showcase
  - College predictor tool with form validation
  - Top colleges listing with cards
  - Pricing plans comparison
  - FAQ accordion with smooth interactions
  - Professional footer with links
  - Sticky navigation header with mobile menu

- **Mobile-First Approach** - Designed for mobile devices first, then scaled up
- **Dark Mode Compatible** - Color scheme adapts to system preferences
- **TypeScript Support** - Type-safe code for better development experience

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Extract the project folder**
   ```bash
   unzip medical-education.zip
   cd medical-education
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will auto-refresh as you make changes

## 📁 Project Structure

```
medical-education/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   └── Footer.tsx          # Footer with links and info
│   ├── sections/
│   │   ├── HeroSection.tsx     # Main hero banner
│   │   ├── ServicesSection.tsx # Services grid
│   │   ├── PredictorSection.tsx # College predictor form
│   │   ├── CollegesSection.tsx # Colleges showcase
│   │   ├── PricingSection.tsx  # Pricing plans
│   │   └── FAQSection.tsx      # FAQ accordion
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json                # Dependencies
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
└── README.md                   # This file
```

## 🎨 Customization

### Change Logo & Brand Colors

1. **Logo Section** - Edit `Header.tsx` line 15-19
2. **Color Scheme** - Update `tailwind.config.ts`:
   ```ts
   colors: {
     primary: '#1e40af',      // Main blue
     secondary: '#0ea5e9',    // Light blue
     accent: '#06b6d4',       // Cyan
     dark: '#1a202c',         // Dark gray
     light: '#f8fafc',        // Light gray
   }
   ```

### Update Content

- **Hero Section**: Edit `app/sections/HeroSection.tsx`
- **Services**: Modify the `services` array in `ServicesSection.tsx`
- **Colleges**: Update the `colleges` array in `CollegesSection.tsx`
- **Pricing**: Modify the `plans` array in `PricingSection.tsx`
- **FAQs**: Update the `faqs` array in `FAQSection.tsx`

### Replace Images

Images are sourced from Unsplash. To use your own images:

1. Place images in the `public` folder
2. Update image paths in components:
   ```tsx
   src="/images/your-image.jpg"
   // instead of
   src="https://images.unsplash.com/..."
   ```

## 📱 Responsive Breakpoints

The site is optimized for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1280px
- **Large Desktop**: 1281px+

## 🚀 Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'out' directory to Netlify
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

## 📦 Dependencies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI library

## 🎯 Key Features Explained

### Responsive Images
Using Next.js Image component for automatic optimization:
- WebP conversion
- Lazy loading
- Responsive sizing

### Mobile Menu
The header includes a hamburger menu that:
- Auto-hides on desktop (lg breakpoint)
- Smooth animations
- Handles navigation links

### Form Validation
College predictor form includes:
- Real-time input handling
- Select dropdowns
- Submit handling
- Responsive layout

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Good color contrast

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Images not loading
Ensure `next.config.js` has correct `remotePatterns` for external image sources.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📞 Contact & Support

For customization and support:
- Email: support@pragati.com
- Phone: +91 8080 908 080

## 📄 License

This project is provided as-is for educational purposes.

---

**Made with ❤️ for Medical Education**
