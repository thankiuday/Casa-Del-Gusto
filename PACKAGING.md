# ThemeForest Packaging Instructions

This document explains how to properly package the Restaurant Theme for ThemeForest submission or distribution to clients.

## Pre-Packaging Checklist

Before creating the final ZIP file, ensure:

- [ ] All documentation is up to date
- [ ] Version numbers are correct everywhere  
- [ ] Support email is correct (not placeholder)
- [ ] `node_modules/` directory does NOT exist
- [ ] `package-lock.json` is included (clean install)
- [ ] `.git/` directory is removed (if exists)
- [ ] All development artifacts are removed
- [ ] Build has been tested successfully
- [ ] All images are properly credited in credits.md

## Step-by-Step Packaging

### 1. Clean the Project

```powershell
# Remove node_modules
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Remove any build artifacts
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue

# Remove git (if applicable)
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

# Remove lock file (will be recreated on install)
Remove-Item package-lock.json -ErrorAction SilentlyContinue
```

### 2. Fresh Install & Test

```powershell
# Clean install
npm install

# Test development build
npm run dev
# Verify at http://localhost:5173

# Test production build  
npm run build
npm run preview
```

### 3. Clean Again

```powershell
# Remove node_modules again (don't include in ZIP)
Remove-Item -Recurse -Force node_modules

# Remove dist folder
Remove-Item -Recurse -Force dist
```

### 4. Use ThemeForest Structure

Your `themeforest-submission/` folder should have:

```
themeforest-submission/
├── Main Files/
│   └── restaurant-theme/
│       ├── public/
│       ├── src/
│       ├── docs/
│       ├── package.json
│       ├── README.txt
│       ├── IMAGE_MAPPING.md
│       └── ... (all source files)
├── Documentation/
│   ├── documentation.html (or .pdf)
│   └── documentation.md
└── Licensing/
    └── LICENSE.txt
```

### 5. Copy Files to Submission Structure

```powershell
# Copy all source files to Main Files
Copy-Item -Recurse -Path .\* -Destination "themeforest-submission\Main Files\restaurant-theme" -Exclude "themeforest-submission","node_modules","dist",".git"

# Copy documentation
Copy-Item "docs\documentation.md" "themeforest-submission\Documentation\"

# License already created in Licensing folder
```

### 6. Create the ZIP

```powershell
# Create ZIP for submission
Compress-Archive -Path "themeforest-submission\*" -DestinationPath "restaurant-theme-v1.0.zip" -Force
```

## What to EXCLUDE from ZIP

**Never include:**
- ❌ `node_modules/` directory
- ❌ `.git/` directory
- ❌ `dist/` or `build/` directories
- ❌ `.env` files
- ❌ `.DS_Store` files
- ❌ IDE-specific folders (.vscode/, .idea/)
- ❌ Personal development files

**Always include:**
- ✅ `package.json`
- ✅ `package-lock.json` (from clean install)
- ✅ All source files (`src/`, `public/`)
- ✅ Documentation (`docs/`)
- ✅ Configuration files (`.config.js` files)
- ✅ README and licensing files

## ThemeForest Submission Checklist

Before uploading to ThemeForest:

- [ ] File name format: `item-name-vX.X.zip`
- [ ] Total ZIP size < 50MB (if possible)
- [ ] All demo images properly credited
- [ ] No copyrighted content included  
- [ ] Documentation is professional and complete
- [ ] Preview screenshots prepared (1920x1200px recommended)
- [ ] Item description written
- [ ] Tags and categories selected
- [ ] Price tier selected

## Testing the Package

After creating the ZIP:

1. **Extract to new location**
   ```powershell
   Expand-Archive restaurant-theme-v1.0.zip -DestinationPath "test-extraction"
   ```

2. **Test installation**
   ```powershell
   cd "test-extraction\Main Files\restaurant-theme"
   npm install
   npm run dev
   ```

3. **Verify:**
   - All pages load correctly
   - No console errors
   - Images are mapped correctly (or show image mapping instructions)
   - Dark mode works
   - Forms validate properly
   - Build completes without errors

## Version Control

When releasing updates:

1. Update version in `package.json`
2. Update `docs/changelog.md`
3. Create new ZIP with version number
4. Tag the release (if using git)

## Notes

- Package size should be reasonable (< 50MB for ThemeForest)
- If images make it too large, consider:
  - Optimizing images
  - Providing download links instead
  - Creating an "images pack" as separate download

## Support

For packaging questions: udaythanki2@gmail.com

---

**Last Updated:** January 2026
