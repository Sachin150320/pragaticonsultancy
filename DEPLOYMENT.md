# Deployment Guide

This guide will help you deploy your Medical Education website to various platforms.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and provides the best performance.

### Steps:

1. **Sign up on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up using GitHub, GitLab, or Bitbucket

2. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/medical-education.git
   git push -u origin main
   ```

3. **Import Project on Vercel**
   - Click "Add New" → "Project"
   - Select your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

4. **Configure Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

## Option 2: Deploy to Netlify

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy to Netlify**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## Option 3: Deploy to AWS Amplify

### Steps:

1. **Push to GitHub**
2. **Connect GitHub to AWS Amplify**
3. **Set build settings**
   - Build command: `npm run build`
   - Start command: `npm start`
4. **Deploy**

## Option 4: Self-Hosted (Docker)

### Create Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and run:

```bash
docker build -t medical-education .
docker run -p 3000:3000 medical-education
```

## Environment Variables

Create `.env.local` for production:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Performance Optimization

1. **Image Optimization**
   - Images are automatically optimized by Next.js
   - Use WebP format when possible

2. **Code Splitting**
   - Next.js automatically splits code by route
   - Dynamic imports for large components

3. **Caching**
   - Set appropriate cache headers
   - Use ISR (Incremental Static Regeneration) if needed

## Monitoring

### Set up monitoring for:
- Page load times
- Error tracking (Sentry)
- Analytics (Google Analytics, Mixpanel)
- Uptime monitoring (Uptime Robot)

## SSL/HTTPS

All deployment platforms automatically provide SSL certificates.

## Backup

1. Keep code backed up on GitHub
2. Back up database if applicable
3. Keep .env files secure (use platform secrets)

## Troubleshooting

### Build fails on deployment
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check for environment variables

### Images not loading
- Verify image URLs are accessible
- Check CORS settings
- Ensure remotePatterns are configured

### Slow performance
- Check Core Web Vitals in PageSpeed Insights
- Optimize images further
- Enable caching headers
- Use CDN for static assets

## Post-Deployment Checklist

- [ ] Domain configured correctly
- [ ] SSL certificate active
- [ ] 404 page working
- [ ] Mobile responsive
- [ ] Images loading
- [ ] Forms submitting
- [ ] Navigation working
- [ ] Analytics tracking
- [ ] Meta tags correct
- [ ] Sitemap.xml present

---

For more help, refer to the main README.md
