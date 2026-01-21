# Restaurant Theme - Premium React Template

A modern, elegant restaurant website template built with **React 19**, **Tailwind CSS 3.4**, and cutting-edge web technologies. Perfect for restaurants, cafes, bakeries, and fine dining establishments.

![Restaurant Theme Preview](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200)

---

## 🌟 Key Features

- ✨ **Modern Design** - Elegant and sophisticated UI with gold accents
- 🌓 **Dark Mode** - Complete dark mode support with smooth transitions
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Optimized for speed with code splitting
- 🎭 **Smooth Animations** - Beautiful transitions with Framer Motion
- 📝 **Form Validation** - React Hook Form integration
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎯 **11 Pages** - Complete website structure
- 💎 **Premium Quality** - Production-ready code
- ⏳ **Skeleton Loading** - Professional loading states
- 🔄 **Auto Scroll** - Smooth page transitions

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see your site.

---

## 📄 Pages Included

1. **Home (2 Variants)** - Two unique homepage layouts
   - Fullscreen hero with featured sections
   - Split layout with modern design
2. **About Us** - Company story, team members, and values
   - 4 team members: Chef Marco Rossi, Sarah Johnson, David Chen, Emily Rodriguez
3. **Menu** - Full menu with filtering and search
   - 20 menu items across 5 categories (Breakfast, Lunch, Dinner, Desserts)
   - Categories: All Items, Breakfast, Lunch, Dinner, Desserts
4. **Menu Details** - Individual dish detail pages with related items
5. **Reservations** - Table booking form with date/time selection
6. **Gallery** - Photo gallery with lightbox (12 images)
   - Categories: All, Food, Interior, Team, Drinks
7. **Blog** - Blog listing with categories and search
   - 6 blog posts across 7 categories
   - Categories: All Posts, Cooking Tips, Menu Updates, Wine & Drinks, Restaurant Life, Desserts, Sustainability
8. **Blog Details** - Individual blog post pages with author info
9. **Contact** - Contact form and location map
10. **404** - Custom error page

---

## 🛠 Tech Stack

### Core Framework
- **React 19.2.3** - Modern React with hooks
- **React DOM 19.2.3** - React rendering library
- **Vite 7.2.4** - Next generation frontend tooling

### Styling
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixing

### Routing & Navigation
- **React Router DOM 7.12.0** - Client-side routing

### Animations & UI
- **Framer Motion 12.27.1** - Production-ready animations
- **Swiper 12.0.3** - Modern carousel/slider
- **Lucide React 0.562.0** - Beautiful icon library

### Forms & Validation
- **React Hook Form 7.71.1** - Performant form validation

### SEO & Meta
- **React Helmet Async 2.0.5** - SEO meta tags management

---

## 📖 Documentation

Comprehensive documentation is available in the `docs` folder:

- **[README.md](docs/README.md)** - Quick start guide
- **[documentation.md](docs/documentation.md)** - Complete documentation
- **[credits.md](docs/credits.md)** - Assets and library credits
- **[changelog.md](docs/changelog.md)** - Version history

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    400: '#D4AF37',  // Gold - Your primary color
    500: '#c19a2e',
    // ... other shades
  },
  secondary: {
    700: '#334155',  // Charcoal
    // ... other shades
  }
}
```

### Update Content

**Menu Items:** Edit `src/data/menuData.js`
- 20 menu items across 5 categories
- Categories: breakfast, lunch, dinner, dessert

**Blog Posts:** Edit `src/data/blogData.js`
- 6 blog posts
- Categories: Cooking Tips, Menu Updates, Wine & Drinks, Restaurant Life, Desserts, Sustainability

**Team Members:** Edit `src/data/teamData.js`
- 4 team members with roles and bios

**Gallery:** Edit `src/data/galleryData.js`
- 12 gallery images across 5 categories

**Testimonials:** Edit `src/data/testimonialsData.js`
- 6 customer testimonials

### Replace Images

All images are currently using Unsplash URLs. To use local images:

1. Place images in `public/images/` folder
2. Update image paths in data files
3. See `IMAGE_MAPPING.md` for reference

---

## 🚢 Deployment

### Netlify

```bash
npm run build
# Deploy dist folder to Netlify
```

### Vercel

```bash
npm install -g vercel
vercel
```

### Traditional Hosting

1. Run `npm run build`
2. Upload the `dist` folder contents to your web server
3. Configure server for SPA routing (see documentation.md)

---

## 📦 Project Structure

```
restaurant-theme/
├── public/              # Static assets
│   └── images/         # Image directories (empty - using Unsplash)
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── sections/   # Page sections (Hero, FeaturedDishes, etc.)
│   ├── pages/          # Page components (11 pages)
│   ├── data/           # Mock data files
│   │   ├── menuData.js      # 20 menu items
│   │   ├── blogData.js      # 6 blog posts
│   │   ├── teamData.js      # 4 team members
│   │   ├── galleryData.js    # 12 gallery images
│   │   └── testimonialsData.js # 6 testimonials
│   ├── hooks/          # Custom hooks
│   ├── contexts/       # React contexts (ThemeContext)
│   ├── routes/         # Router configuration
│   └── styles/         # Global styles
├── docs/               # Documentation
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

---

## 📝 License

This template is licensed for use on ThemeForest. Please refer to the license included with your purchase.

---

## 💬 Support

For support, questions, or feature requests, please email:

**📧 udaythanki2@gmail.com**

Please include:
- Template version
- Node.js version
- Browser and OS details
- Screenshots of the issue
- Console errors (if any)

---

## 🙏 Credits

### Images
- **Unsplash** - All placeholder images (free to use)
- Images are for demo purposes only - replace before publishing

### Icons
- **Lucide React** - MIT License

### Fonts
- **Playfair Display** - Google Fonts (OFL)
- **Inter** - Google Fonts (OFL)

See [credits.md](docs/credits.md) for complete list.

---

## ⭐ Show Your Support

If you like this template, please consider:

- ⭐ Giving it a star on your purchase
- 📝 Leaving a review on ThemeForest
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features

---

**Built with ❤️ for ThemeForest**

© 2026 Restaurant Theme. All rights reserved.

**Version:** 1.0.0  
**Last Updated:** January 2026
