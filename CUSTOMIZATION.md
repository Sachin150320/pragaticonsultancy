# Customization Guide

Learn how to customize this template for your specific needs.

## 1. Update Site Information

### In `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
}
```

### In `app/components/Footer.tsx`:
```tsx
{/* Update company name and contact info */}
<h3 className="text-xl font-bold mb-4 text-accent">Your Company</h3>
<li>📞 +91 Your Phone Number</li>
<li>✉️ your-email@domain.com</li>
<li>📍 Your City, State</li>
```

## 2. Change Colors

### Primary Method - Tailwind Config:
Edit `tailwind.config.ts`:

```ts
colors: {
  primary: '#1e40af',      // Main brand color
  secondary: '#0ea5e9',    // Secondary color
  accent: '#06b6d4',       // Accent color
  dark: '#1a202c',         // Dark text
  light: '#f8fafc',        // Light background
}
```

### Color Scheme Examples:

**Medical/Healthcare (Blue)**
```
primary: '#1e40af' (Blue)
accent: '#06b6d4' (Cyan)
secondary: '#0ea5e9' (Sky)
```

**Professional (Purple)**
```
primary: '#6b21a8' (Purple)
accent: '#a855f7' (Fuchsia)
secondary: '#7c3aed' (Violet)
```

**Modern (Teal)**
```
primary: '#0d9488' (Teal)
accent: '#14b8a6' (Cyan)
secondary: '#06b6d4' (Sky)
```

## 3. Update Logo

### Replace Logo in Header:
Edit `app/components/Header.tsx` (lines 15-21):

```tsx
{/* Option 1: Text Logo */}
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
  Your Initial
</div>

{/* Option 2: Image Logo */}
<Image
  src="/logo.png"
  alt="Logo"
  width={40}
  height={40}
/>
```

## 4. Update Hero Section

### In `app/sections/HeroSection.tsx`:

```tsx
// Update headline
<h1 className="text-3xl md:text-5xl font-bold">
  Your Custom Headline Here
</h1>

// Update description
<p className="text-gray-600 text-lg">
  Your custom description text here
</p>

// Update stats
<p className="text-2xl font-bold text-primary">Your Number</p>
<p className="text-sm text-gray-600">Your Stat Label</p>

// Update button text
<button>Your Button Text</button>

// Update image
<Image
  src="https://images.unsplash.com/your-image"
  alt="Your Alt Text"
/>
```

## 5. Update Services

### Edit `app/sections/ServicesSection.tsx`:

```tsx
const services = [
  {
    icon: '🎯',  // Change emoji
    title: 'Your Service Title',
    description: 'Your service description'
  },
  // Add more services
]
```

## 6. Update Colleges/Products

### Edit `app/sections/CollegesSection.tsx`:

```tsx
const colleges = [
  {
    name: 'Your College Name',
    type: 'College Type',
    image: 'https://your-image-url.com/image.jpg',
    cutoff: '700-680',
    fees: '₹Your Amount/year'
  },
  // Add more colleges
]
```

## 7. Update Pricing Plans

### Edit `app/sections/PricingSection.tsx`:

```tsx
const plans = [
  {
    name: 'Plan Name',
    price: '₹Your Price',
    popular: false,  // Set to true for featured plan
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ]
  },
  // Add more plans
]
```

## 8. Update FAQs

### Edit `app/sections/FAQSection.tsx`:

```tsx
const faqs = [
  {
    question: 'Your Question?',
    answer: 'Your detailed answer here'
  },
  // Add more FAQs
]
```

## 9. Replace Images

### Option 1: Use Unsplash URLs
```tsx
src="https://images.unsplash.com/photo-..."
```

### Option 2: Use Local Images
1. Add image to `public` folder
2. Import and use:
```tsx
<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>
```

### Option 3: Use External URLs
```tsx
src="https://your-domain.com/images/image.jpg"
```

## 10. Update Navigation

### In `app/components/Header.tsx`:

```tsx
<nav className="hidden lg:flex items-center gap-8">
  <Link href="#services">Your Link 1</Link>
  <Link href="#colleges">Your Link 2</Link>
  <Link href="#predictor">Your Link 3</Link>
  {/* Add more navigation items */}
</nav>
```

## 11. Change Fonts

### Update in `globals.css`:

```css
body {
  font-family: 'Your Font Family', sans-serif;
}
```

Or use Google Fonts by adding to `app/layout.tsx`:

```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
```

## 12. Add New Sections

1. Create new file in `app/sections/NewSection.tsx`
2. Export component
3. Import in `app/page.tsx`
4. Add to JSX

```tsx
// app/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-responsive">
        {/* Your content */}
      </div>
    </section>
  )
}

// app/page.tsx
import NewSection from './sections/NewSection'

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
    </>
  )
}
```

## 13. Add New Pages

1. Create `app/your-page/page.tsx`
2. Create layout if needed: `app/your-page/layout.tsx`
3. Update navigation in Header

```tsx
// app/your-page/page.tsx
export default function YourPage() {
  return (
    <div className="container-responsive py-20">
      <h1 className="text-4xl font-bold">Your Page Title</h1>
      {/* Page content */}
    </div>
  )
}
```

## 14. Responsive Utilities

Use these Tailwind classes for responsive design:

```tsx
{/* Hidden on mobile, shown on desktop */}
<div className="hidden lg:block">Desktop Only</div>

{/* Different sizes */}
<h1 className="text-2xl md:text-3xl lg:text-4xl">Responsive Title</h1>

{/* Different layouts */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Grid items */}
</div>
```

## 15. Common Customizations Checklist

- [ ] Updated site title and meta description
- [ ] Changed primary colors
- [ ] Replaced logo
- [ ] Updated hero section
- [ ] Modified services/products list
- [ ] Updated pricing plans
- [ ] Changed FAQs
- [ ] Replaced images
- [ ] Updated navigation links
- [ ] Modified footer content
- [ ] Added analytics code
- [ ] Set up contact form
- [ ] Tested on mobile devices
- [ ] Updated company branding
- [ ] Added custom domain

---

For more advanced customizations, refer to Next.js and Tailwind CSS documentation.
