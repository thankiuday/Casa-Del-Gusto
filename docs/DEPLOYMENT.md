# Deployment Guide - Render.com

This guide will walk you through deploying your Restaurant Theme website to Render.com.

## Prerequisites

- A GitHub account
- A Render.com account (free tier available)
- Your code pushed to a GitHub repository

---

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Code

1. **Ensure your code is ready:**
   ```bash
   # Test your build locally first
   npm run build
   npm run preview
   ```

2. **Verify these files exist:**
   - `package.json` ✅
   - `vite.config.js` ✅
   - `render.yaml` (optional, for automatic setup) ✅

### Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Restaurant Theme"
   ```

2. **Create a GitHub repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `restaurant-theme`)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/restaurant-theme.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended for easy integration)
3. Authorize Render to access your GitHub repositories

### Step 4: Deploy on Render

#### Option A: Using Render Dashboard (Recommended)

1. **Create New Static Site:**
   - Click "New +" button
   - Select "Static Site"

2. **Connect Repository:**
   - Click "Connect GitHub"
   - Select your `restaurant-theme` repository
   - Click "Connect"

3. **Configure Build Settings:**
   - **Name:** `restaurant-theme` (or your preferred name)
   - **Branch:** `main` (or your default branch)
   - **Root Directory:** Leave empty (or `./` if needed)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Environment:** `Static Site`

4. **Advanced Settings (Optional):**
   - Click "Advanced"
   - Add environment variables if needed
   - Set up custom headers (handled automatically by `render.yaml`)

5. **Deploy:**
   - Click "Create Static Site"
   - Render will automatically:
     - Install dependencies
     - Build your project
     - Deploy to a live URL

#### Option B: Using render.yaml (Automatic)

If you have `render.yaml` in your repository:

1. **Create New Blueprint:**
   - Click "New +" button
   - Select "Blueprint"
   - Connect your repository
   - Render will detect `render.yaml` and configure automatically

### Step 5: Configure Routing (Important!)

Since this is a React Router SPA, you need to handle client-side routing:

**Option A: Using render.yaml (Recommended - Already Configured)**
- The `render.yaml` file in your repository already includes the correct rewrite rules
- Render will automatically detect and apply these rules when deploying
- No manual configuration needed!

**Option B: Manual Configuration (If render.yaml doesn't work)**
1. **In Render Dashboard:**
   - Go to your Static Site settings
   - Navigate to "Redirects & Rewrites"
   - Add a rewrite rule:
     - **Source:** `/*`
     - **Destination:** `/index.html`
     - **Type:** `Rewrite`
   - **Important:** Exclude static assets:
     - Add exception for `/assets/*` → `/assets/$1`
     - Add exception for `/images/*` → `/images/$1`

**Note:** The `public/_redirects` file is also included for Netlify compatibility.

### Step 6: Wait for Deployment

- Render will show build logs in real-time
- First deployment takes 3-5 minutes
- Subsequent deployments are faster (1-2 minutes)

### Step 7: Access Your Site

- Once deployed, Render provides a URL like:
  - `https://restaurant-theme.onrender.com`
- Your site is now live! 🎉

---

## Post-Deployment Checklist

- [ ] Test all pages (Home, About, Menu, etc.)
- [ ] Verify navigation works
- [ ] Test dark mode toggle
- [ ] Check mobile responsiveness
- [ ] Verify forms work correctly
- [ ] Test image loading
- [ ] Check console for errors

---

## Custom Domain (Optional)

1. **In Render Dashboard:**
   - Go to your Static Site
   - Click "Settings"
   - Scroll to "Custom Domains"
   - Click "Add Custom Domain"
   - Follow instructions to configure DNS

2. **DNS Configuration:**
   - Add a CNAME record pointing to your Render URL
   - Wait for DNS propagation (up to 48 hours)

---

## Environment Variables (If Needed)

If you need environment variables:

1. **In Render Dashboard:**
   - Go to your Static Site
   - Click "Environment"
   - Add variables:
     - `VITE_API_URL` (if using API)
     - `VITE_APP_NAME` (if needed)
   - Rebuild after adding variables

---

## Updating Your Site

### Automatic Updates:
- Push changes to your GitHub repository
- Render automatically detects changes
- Triggers new deployment
- Updates go live in 1-2 minutes

### Manual Deploy:
1. Go to Render Dashboard
2. Click "Manual Deploy"
3. Select branch/commit
4. Click "Deploy"

---

## Troubleshooting

### Build Fails

**Error: "Build command failed"**
- Check build logs in Render dashboard
- Verify `package.json` has correct build script
- Ensure all dependencies are listed

**Error: "Module not found"**
- Run `npm install` locally to verify dependencies
- Check `package-lock.json` is committed

### Routing Issues

**404 errors on refresh:**
- Ensure rewrite rule is configured (Step 5)
- Check `render.yaml` has correct routes

### Images Not Loading

**Images show broken:**
- Verify image paths use `/images/` (not `./images/`)
- Check images are in `public/images/` folder
- Ensure images are committed to Git

### Performance Issues

**Slow loading:**
- Check build output size (`dist` folder)
- Enable gzip compression (automatic on Render)
- Optimize images before committing

---

## Render Free Tier Limits

- **Bandwidth:** 100 GB/month
- **Build Time:** 500 minutes/month
- **Deployments:** Unlimited
- **SSL:** Included (automatic HTTPS)

---

## Support

- **Render Docs:** [render.com/docs](https://render.com/docs)
- **Render Support:** [render.com/support](https://render.com/support)
- **GitHub Issues:** Create an issue in your repository

---

## Quick Reference

**Build Command:**
```bash
npm install && npm run build
```

**Publish Directory:**
```
dist
```

**Node Version:**
- Render auto-detects from `package.json`
- Or specify in `render.yaml`:
  ```yaml
  envVars:
    - key: NODE_VERSION
      value: 18
  ```

---

**Congratulations! Your Restaurant Theme is now live on Render! 🚀**
