# Fix 404 Error on Render.com - Manual Configuration Required

## Problem
When refreshing pages like `/about`, `/menu`, etc. on Render.com, you get a 404 error because Render doesn't automatically apply the rewrite rules from `render.yaml`.

## Solution: Manual Configuration in Render Dashboard

Since Render.com doesn't always automatically apply `render.yaml` rewrite rules for static sites, you need to configure it manually:

### Step-by-Step Fix:

1. **Go to Render Dashboard**
   - Log in to [render.com](https://render.com)
   - Navigate to your Static Site service

2. **Open Settings**
   - Click on your static site (e.g., "restaurant-theme")
   - Click on "Settings" in the left sidebar

3. **Configure Redirects & Rewrites**
   - Scroll down to find "Redirects & Rewrites" section
   - Click "Add Redirect" or "Add Rewrite"

4. **Add Rewrite Rule**
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Type:** `Rewrite` (NOT Redirect!)
   - **Status Code:** Leave empty or use 200

5. **Save Changes**
   - Click "Save" or "Update"
   - Render will automatically redeploy

6. **Test**
   - Wait for deployment to complete
   - Visit `https://casa-del-gusto.onrender.com/about`
   - Refresh the page (F5)
   - ✅ Should work without 404 error!

## Alternative: Using render.yaml (If Supported)

If your Render plan supports Blueprint/Infrastructure as Code:

1. Ensure `render.yaml` is in the root of your repository
2. The file should contain:
```yaml
services:
  - type: web
    name: restaurant-theme
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

3. Deploy using Blueprint instead of manual Static Site creation

## Why This Happens

- React Router uses client-side routing
- When you refresh `/about`, the browser requests `/about` from the server
- The server doesn't have an `/about` file, so it returns 404
- The rewrite rule tells Render: "For any route, serve `index.html`"
- React Router then handles the routing client-side

## Verification

After configuring:
- ✅ `/about` refresh works
- ✅ `/menu` refresh works  
- ✅ `/reservations` refresh works
- ✅ All routes work correctly

## Still Not Working?

1. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
2. **Check deployment logs** - Ensure build completed successfully
3. **Verify rewrite rule** - Make sure it's `/*` → `/index.html` with type `Rewrite`
4. **Contact Render Support** - They can verify the configuration

---

**Note:** The `_redirects` file in `public/` folder is for Netlify compatibility and won't work on Render.com. Render requires manual configuration or `render.yaml` Blueprint deployment.
