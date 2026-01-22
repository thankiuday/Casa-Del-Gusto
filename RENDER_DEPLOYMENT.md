# 🚀 Quick Deployment Guide - Render.com

## Prerequisites Checklist
- [ ] GitHub account
- [ ] Code pushed to GitHub repository
- [ ] Render.com account (sign up at render.com)

---

## 📋 Step-by-Step Instructions

### 1️⃣ Push Code to GitHub

```bash
# If not already done, initialize git and push
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/restaurant-theme.git
git push -u origin main
```

### 2️⃣ Sign Up on Render

1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended)

### 3️⃣ Create Static Site

1. Click **"New +"** button (top right)
2. Select **"Static Site"**
3. Click **"Connect GitHub"**
4. Select your `restaurant-theme` repository
5. Click **"Connect"**

### 4️⃣ Configure Build Settings

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Name** | `restaurant-theme` (or your choice) |
| **Branch** | `main` |
| **Root Directory** | Leave empty |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 5️⃣ Routing Configuration (IMPORTANT!)

**✅ Already Configured!** The `render.yaml` file includes the correct rewrite rules.

**If you need to configure manually:**
1. Scroll down to **"Advanced"** section
2. Click **"Add Redirect"**
3. Configure:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Type:** `Rewrite`

**Note:** The rewrite rule ensures that refreshing pages like `/menu` or `/about` works correctly instead of showing 404 errors.

### 6️⃣ Deploy

1. Click **"Create Static Site"**
2. Wait 3-5 minutes for first build
3. Your site will be live at: `https://restaurant-theme.onrender.com`

---

## ✅ Post-Deployment Checklist

- [ ] Visit your live URL
- [ ] Test navigation (all pages)
- [ ] Test dark mode toggle
- [ ] Check mobile view
- [ ] Verify forms work
- [ ] Test all links

---

## 🔄 Updating Your Site

**Automatic Updates:**
- Just push to GitHub
- Render auto-deploys changes
- Live in 1-2 minutes

```bash
git add .
git commit -m "Update content"
git push
```

---

## 🐛 Troubleshooting

**Build fails?**
- Check build logs in Render dashboard
- Verify `package.json` has `build` script

**404 errors on page refresh?**
- Ensure rewrite rule is added (Step 5)
- Check `render.yaml` is in repository

**Images not loading?**
- Verify images are in `public/images/` folder
- Check image paths use `/images/` (not `./images/`)

---

## 📞 Need Help?

- Full guide: See `docs/DEPLOYMENT.md`
- Render Docs: [render.com/docs](https://render.com/docs)
- Render Support: [render.com/support](https://render.com/support)

---

**That's it! Your website is now live! 🎉**
