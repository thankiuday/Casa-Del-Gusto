# 🚨 URGENT: Fix 404 Error on Render.com

## The Problem
When you refresh pages like `/about` on `https://casa-del-gusto.onrender.com/about`, you get a 404 error.

## The Solution: Configure Rewrite Rule in Render Dashboard

**Render.com doesn't automatically apply `render.yaml` rewrite rules for manually created static sites.** You need to configure it manually.

### Quick Fix (5 minutes):

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Log in to your account

2. **Select Your Static Site**
   - Click on "restaurant-theme" or "casa-del-gusto" static site

3. **Open Settings**
   - Click **"Settings"** in the left sidebar

4. **Find "Redirects & Rewrites"**
   - Scroll down to find this section
   - If you don't see it, look for "Custom Headers" or "Advanced Settings"

5. **Add Rewrite Rule**
   - Click **"Add Redirect"** or **"Add Rewrite"** button
   - Fill in:
     - **Source:** `/*`
     - **Destination:** `/index.html`
     - **Type:** Select **"Rewrite"** (NOT Redirect!)
     - **Status Code:** Leave empty or `200`

6. **Save**
   - Click **"Save Changes"**
   - Render will automatically redeploy

7. **Wait & Test**
   - Wait 1-2 minutes for redeployment
   - Visit: `https://casa-del-gusto.onrender.com/about`
   - Press **F5** to refresh
   - ✅ Should work now!

## Visual Guide:

```
Render Dashboard → Your Static Site → Settings → Redirects & Rewrites

Add New Rule:
┌─────────────────────────────────────┐
│ Source:      /*                     │
│ Destination: /index.html            │
│ Type:        Rewrite  ← IMPORTANT!  │
└─────────────────────────────────────┘
```

## Why This Happens

- React Router uses **client-side routing**
- When you refresh `/about`, browser requests `/about` from server
- Server doesn't have `/about` file → returns 404
- Rewrite rule tells Render: "Serve `index.html` for all routes"
- React Router then handles routing client-side

## Still Not Working?

1. **Check the rule type** - Must be "Rewrite", NOT "Redirect"
2. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
3. **Check deployment logs** - Ensure build succeeded
4. **Verify the rule** - Should be `/*` → `/index.html`

## Alternative: Use Blueprint Deployment

If manual configuration doesn't work, you can redeploy using Blueprint:

1. Delete current static site
2. Create new service → Select "Blueprint"
3. Connect your GitHub repo
4. Render will use `render.yaml` automatically

---

**This is a one-time configuration. Once set, all routes will work correctly!** ✅
