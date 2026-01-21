# Restaurant Theme (React + Tailwind) — Complete Documentation

Thank you for purchasing **Restaurant Theme** — a premium restaurant & cafe website template built using **React 19** and **Tailwind CSS 3.4**.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Requirements](#requirements)  
3. [Installation & Run](#installation--run)  
4. [Build for Production](#build-for-production)  
5. [Folder Structure](#folder-structure)  
6. [Pages Included](#pages-included)  
7. [Content Overview](#content-overview)  
8. [Customization Guide](#customization-guide)  
9. [Theme Colors & Fonts](#theme-colors--fonts)  
10. [Dark Mode](#dark-mode)  
11. [Assets (Images/Icons/Fonts)](#assets-imageiconsfonts)  
12. [Deployment](#deployment)  
13. [Troubleshooting](#troubleshooting)  
14. [Credits](#credits)  
15. [Support](#support)  

---

## 1. Introduction

Restaurant Theme is a modern, elegant, and fully responsive template suitable for:

- Restaurants
- Cafes
- Bakeries
- Food delivery brands
- Fine dining establishments

**Built with:**
- ⚛️ **React 19.2.3** (latest version)
- 🎨 **Tailwind CSS 3.4.19**
- ⚡ **Vite 7.2.4** (Fast build tool)

### Key Features

✅ **11 Pages** - Complete website structure  
✅ **Dark Mode Toggle** - Smooth theme switching  
✅ **Fully Responsive** - Perfect on all devices  
✅ **React Router Navigation** - Client-side routing  
✅ **Smooth Animations** - Framer Motion integration  
✅ **Menu Filter + Search** - Advanced filtering system  
✅ **SEO Meta Tags** - React Helmet Async  
✅ **Skeleton Loading** - Professional loading states  
✅ **Form Validation** - React Hook Form  
✅ **Auto Scroll** - Smooth page transitions  
✅ **Clean Code** - Well-structured and maintainable  

---

## 2. Requirements

Before installing, please ensure:

- **Node.js 18+** (required)
- **npm** or **yarn** package manager
- **React 19.2.3** (included in package.json)

Check Node version:

```bash
node -v
# Should show v18.x.x or higher
```

---

## 3. Installation & Run (Development)

### Step 1: Extract Template

Unzip your downloaded package to your desired location.

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### Step 3: Start Development Server

```bash
npm run dev
```

The development server will start and display:

```
VITE v7.2.4  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open `http://localhost:5173` in your browser to view the site.

---

## 4. Build for Production

To generate production-ready files:

```bash
npm run build
```

Output will be in:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
```

To preview the production build locally:

```bash
npm run preview
```

---

## 5. Folder Structure

```
restaurant-theme/
├── public/                    # Static assets
│   └── images/                # Image directories (structure ready)
│       ├── blog/
│       ├── gallery/
│       ├── general/
│       ├── hero/
│       ├── menu/
│       ├── team/
│       └── testimonials/
├── src/
│   ├── assets/               # Local assets
│   ├── components/            # React components
│   │   ├── layout/           # Navbar, Footer, Layout
│   │   ├── sections/          # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── contexts/              # React contexts
│   │   └── ThemeContext.jsx  # Dark mode management
│   ├── data/                 # Mock data
│   │   ├── menuData.js       # 20 menu items
│   │   ├── blogData.js       # 6 blog posts
│   │   ├── teamData.js       # 4 team members
│   │   ├── galleryData.js     # 12 gallery images
│   │   └── testimonialsData.js # 6 testimonials
│   ├── hooks/                # Custom hooks
│   │   ├── useScrollToTop.js
│   │   └── useScrollSpy.js
│   ├── pages/                # Page components
│   │   ├── Home1.jsx
│   │   ├── Home2.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuDetails.jsx
│   │   ├── Reservations.jsx
│   │   ├── Gallery.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── routes/               # Router configuration
│   │   └── AppRouter.jsx
│   ├── styles/               # Global styles
│   ├── utils/                # Utility functions
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global CSS
├── docs/                     # Documentation
│   ├── documentation.md
│   ├── credits.md
│   ├── changelog.md
│   └── README.md
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
└── README.md                 # Project README
```

---

## 6. Pages Included

### 1. Home (Variant 1) - `/`
- Fullscreen hero section
- Featured dishes section
- Chef story section
- Menu preview
- Stats section
- Testimonials
- Gallery preview
- Newsletter signup

### 2. Home (Variant 2) - `/home2`
- Split hero layout
- Menu preview
- Reservation CTA
- Gallery preview
- Chef story
- Featured dishes
- Testimonials
- FAQ section

### 3. About - `/about`
- Hero section with image
- Company story
- Team section (4 members)
- Stats section
- Values section

**Team Members:**
- Chef Marco Rossi (Head Chef)
- Sarah Johnson (Pastry Chef)
- David Chen (Sous Chef)
- Emily Rodriguez (Restaurant Manager)

### 4. Menu - `/menu`
- Hero section
- Search functionality
- Category filter (5 categories)
- Menu items grid (20 items)

**Menu Categories:**
- All Items
- Breakfast (4 items)
- Lunch (6 items)
- Dinner (6 items)
- Desserts (4 items)

**Sample Menu Items:**
- Grilled Salmon ($28.99)
- Classic Beef Burger ($16.99)
- Caesar Salad ($12.99)
- Margherita Pizza ($18.99)
- Lobster Linguine ($42.99)
- And 15 more...

### 5. Menu Details - `/menu/:id`
- Individual dish page
- Large image
- Description and details
- Related dishes section
- Book a table CTA

### 6. Reservations - `/reservations`
- Hero section
- Booking form with:
  - Date picker
  - Time selection
  - Number of guests
  - Name, email, phone
  - Special requests

### 7. Gallery - `/gallery`
- Hero section
- Category filter (5 categories)
- Image grid (12 images)
- Lightbox viewer

**Gallery Categories:**
- All
- Food
- Interior
- Team
- Drinks

### 8. Blog - `/blog`
- Hero section
- Search functionality
- Category filter (7 categories)
- Featured post section
- Blog posts grid (6 posts)

**Blog Categories:**
- All Posts
- Cooking Tips
- Menu Updates
- Wine & Drinks
- Restaurant Life
- Desserts
- Sustainability

**Blog Posts:**
1. The Art of Perfect Pasta (Cooking Tips)
2. Seasonal Menu: Spring Delights (Menu Updates)
3. Wine Pairing Guide for Beginners (Wine & Drinks)
4. Behind the Scenes: A Day in Our Kitchen (Restaurant Life)
5. The Perfect Dessert: Tiramisu Story (Desserts)
6. Sustainable Dining: Our Commitment (Sustainability)

### 9. Blog Details - `/blog/:slug`
- Full blog post
- Author information
- Share buttons
- Author bio section
- Related posts

### 10. Contact - `/contact`
- Hero section
- Contact form
- Contact information
- Map placeholder

### 11. 404 Not Found - `/*`
- Custom error page
- Popular links
- Back to home button

---

## 7. Content Overview

### Menu Items (20 Total)

**Breakfast (4 items):**
- Caesar Salad
- Avocado Toast
- Pancakes
- French Toast
- Eggs Benedict
- Açaí Bowl

**Lunch (6 items):**
- Grilled Salmon
- Classic Beef Burger
- Fish Tacos
- Tomato Soup
- Vegetable Pasta

**Dinner (6 items):**
- Margherita Pizza
- Lobster Linguine
- Mushroom Risotto
- Chicken Parmesan
- Ribeye Steak
- Pasta Carbonara

**Desserts (4 items):**
- Tiramisu
- Chocolate Cake
- Greek Salad (categorized as dessert)

### Team Members (4 Total)

1. **Chef Marco Rossi** - Head Chef
   - 20+ years experience
   - Specialties: Italian Cuisine, Pasta Making, Wine Pairing

2. **Sarah Johnson** - Pastry Chef
   - Award-winning
   - Specialties: French Pastry, Cake Design, Chocolate Work

3. **David Chen** - Sous Chef
   - Multi-cuisine trained
   - Specialties: Asian Fusion, Seafood, Presentation

4. **Emily Rodriguez** - Restaurant Manager
   - Guest relations expert
   - Specialties: Guest Relations, Team Leadership, Event Planning

### Blog Posts (6 Total)

1. **The Art of Perfect Pasta** (Cooking Tips)
   - Author: Chef Marco Rossi
   - Date: January 15, 2024
   - 5 min read

2. **Seasonal Menu: Spring Delights** (Menu Updates)
   - Author: Emily Rodriguez
   - Date: January 12, 2024
   - 4 min read

3. **Wine Pairing Guide for Beginners** (Wine & Drinks)
   - Author: David Chen
   - Date: January 10, 2024
   - 6 min read

4. **Behind the Scenes: A Day in Our Kitchen** (Restaurant Life)
   - Author: Chef Marco Rossi
   - Date: January 8, 2024
   - 7 min read

5. **The Perfect Dessert: Tiramisu Story** (Desserts)
   - Author: Sarah Johnson
   - Date: January 5, 2024
   - 5 min read

6. **Sustainable Dining: Our Commitment** (Sustainability)
   - Author: Emily Rodriguez
   - Date: January 3, 2024
   - 6 min read

### Testimonials (6 Total)

- Sarah Johnson (Food Critic)
- Michael Chen (Regular Customer)
- Emily Rodriguez (Event Planner)
- David Martinez (Travel Blogger)
- Lisa Anderson (Local Resident)
- James Wilson (Business Executive)

### Gallery Images (12 Total)

- 12 curated images across 5 categories
- Food photography
- Restaurant interior shots
- Team photos
- Drink photography

---

## 8. Customization Guide

### Update Menu Items

Edit `src/data/menuData.js`:

```javascript
{
  id: 1,
  name: 'Your Dish Name',
  category: 'lunch', // breakfast, lunch, dinner, dessert
  price: 24.99,
  description: 'Your dish description here.',
  image: 'https://your-image-url.com/image.jpg',
  dietary: ['vegetarian', 'gluten-free'], // optional
  popular: true, // optional
}
```

### Update Blog Posts

Edit `src/data/blogData.js`:

```javascript
{
  id: 1,
  title: 'Your Blog Title',
  slug: 'your-blog-slug',
  excerpt: 'Short description...',
  content: '<p>Full content...</p>',
  image: 'https://your-image-url.com/image.jpg',
  category: 'Cooking Tips',
  author: {
    name: 'Author Name',
    role: 'Author Role',
    image: 'https://author-image-url.com/image.jpg',
  },
  date: '2024-01-15',
  readTime: '5 min read',
  tags: ['Tag1', 'Tag2'],
}
```

### Update Team Members

Edit `src/data/teamData.js`:

```javascript
{
  id: 1,
  name: 'Team Member Name',
  role: 'Position',
  image: 'https://image-url.com/image.jpg',
  bio: 'Bio text here...',
  specialties: ['Specialty 1', 'Specialty 2'],
  social: {
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  }
}
```

### Update Gallery

Edit `src/data/galleryData.js`:

```javascript
{
  id: 1,
  title: 'Image Title',
  category: 'food', // food, interior, team, drinks
  image: 'https://image-url.com/image.jpg',
}
```

### Update Testimonials

Edit `src/data/testimonialsData.js`:

```javascript
{
  id: 1,
  name: 'Customer Name',
  role: 'Customer Role',
  image: 'https://image-url.com/image.jpg',
  rating: 5,
  text: 'Testimonial text...',
}
```

---

## 9. Theme Colors & Fonts

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#faf8f0',
    100: '#f5f0db',
    200: '#ebe0b7',
    300: '#e0ce8e',
    400: '#D4AF37',  // Main gold color - CHANGE THIS
    500: '#c19a2e',
    600: '#a67d24',
    700: '#8a6620',
    800: '#70521f',
    900: '#5d441d',
  },
  secondary: {
    700: '#334155',  // Charcoal - CHANGE THIS
    // ... other shades
  }
}
```

### Change Fonts

Fonts are loaded from Google Fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

Update font families in `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['"Playfair Display"', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## 10. Dark Mode

Dark mode is fully implemented and managed through:

- **ThemeContext** (`src/contexts/ThemeContext.jsx`)
- Stores user preference in `localStorage`
- Applies `dark` class on `<html>` element
- Toggle button available in Navbar (desktop and mobile)

### How It Works

1. User clicks theme toggle button
2. Theme preference is saved to localStorage
3. `dark` class is added/removed from `<html>`
4. Tailwind dark mode classes activate automatically

### Customization

To customize dark mode colors, edit `tailwind.config.js`:

```javascript
darkMode: 'class', // Already configured
```

Then use Tailwind's `dark:` prefix in your components:

```jsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">Text</p>
</div>
```

---

## 11. Assets (Images/Icons/Fonts)

### Images

**Current Setup:**
- All images are using Unsplash URLs
- Images load from CDN (requires internet connection)
- No local images included

**To Use Local Images:**

1. Download images from Unsplash or use your own
2. Place images in `public/images/` folder:
   ```
   public/images/
   ├── menu/
   ├── blog/
   ├── gallery/
   ├── hero/
   ├── team/
   └── testimonials/
   ```
3. Update image paths in data files:
   ```javascript
   // Change from:
   image: 'https://images.unsplash.com/...'
   
   // To:
   image: '/images/menu/dish-name.jpg'
   ```

### Icons

- **Lucide React** - All icons throughout the template
- MIT License - Free to use
- URL: [lucide.dev](https://lucide.dev)

### Fonts

- **Playfair Display** - Headings and display text
- **Inter** - Body text and UI elements
- Both from Google Fonts (Open Font License)
- Free to use commercially

---

## 12. Deployment

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy `dist` folder to Netlify:
   - Drag and drop `dist` folder to Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

3. Configure redirects (create `netlify.toml`):
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

3. Vercel automatically detects Vite and configures routing

### Shared Hosting (Apache / cPanel)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `dist` folder contents to your web server

3. Create `.htaccess` file in root:
   ```apache
   RewriteEngine On
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 13. Troubleshooting

### npm install fails

**Solution:**
```bash
# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

### Blank page on hosting

**Solution:**
- Ensure rewrite rules are configured (see Deployment section)
- Check browser console for errors
- Verify all file paths are correct

### Images not loading

**Solution:**
- If using Unsplash URLs: Check internet connection
- If using local images: Ensure images are in `public/` folder
- Check image paths in data files
- Verify image URLs are accessible

### Dark mode not working

**Solution:**
- Check browser console for errors
- Verify `ThemeContext` is wrapping the app
- Check `tailwind.config.js` has `darkMode: 'class'`

### Build errors

**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### Port already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000
```

---

## 14. Credits

### Fonts

- **Playfair Display** - Google Fonts (OFL)
- **Inter** - Google Fonts (OFL)

### Icons

- **Lucide React** - MIT License

### Images

- **Unsplash** - All placeholder images (Unsplash License)
- Images are for demo purposes only - replace before publishing

### Libraries

See [credits.md](./credits.md) for complete list of all libraries and their licenses.

---

## 15. Support

For support, questions, or feature requests:

📩 **Email:** udaythanki2@gmail.com

**Please include:**
- Template version (1.0.0)
- Node.js version (`node -v`)
- Browser and OS details
- Screenshots of the issue
- Console errors (if any)
- Steps to reproduce

---

**✅ Thank you for choosing Restaurant Theme!**

---

**Built with ❤️ for ThemeForest**

**Version:** 1.0.0  
**Last Updated:** January 2026
