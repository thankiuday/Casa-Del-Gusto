# Restaurant Theme - Quick Start Guide

Welcome to **Restaurant Theme** - a premium React template for restaurants, cafes, and food businesses.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (check with `node -v`)
- **npm** or **yarn**

### Installation

```bash
# 1. Extract the template
# Unzip the downloaded package

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## ✨ What's Included

### Pages (11 Total)

1. **Home** (2 variants)
   - Fullscreen hero layout
   - Split layout design

2. **About Us**
   - Team section (4 members)
   - Company story

3. **Menu**
   - 20 menu items
   - 5 categories: Breakfast, Lunch, Dinner, Desserts
   - Search and filter functionality

4. **Menu Details**
   - Individual dish pages
   - Related items section

5. **Reservations**
   - Booking form
   - Date/time selection

6. **Gallery**
   - 12 images
   - 5 categories: Food, Interior, Team, Drinks
   - Lightbox viewer

7. **Blog**
   - 6 blog posts
   - 7 categories: Cooking Tips, Menu Updates, Wine & Drinks, Restaurant Life, Desserts, Sustainability
   - Search functionality

8. **Blog Details**
   - Full blog post pages
   - Author information
   - Related posts

9. **Contact**
   - Contact form
   - Location map

10. **404 Error Page**
    - Custom not found page

### Features

- ✅ Dark Mode Toggle
- ✅ Fully Responsive
- ✅ SEO Optimized
- ✅ Smooth Animations
- ✅ Form Validation
- ✅ Skeleton Loading
- ✅ Auto Scroll to Top

---

## 🛠 Tech Stack

- **React 19.2.3**
- **Tailwind CSS 3.4.19**
- **Vite 7.2.4**
- **React Router DOM 7.12.0**
- **Framer Motion 12.27.1**
- **React Hook Form 7.71.1**
- **React Helmet Async 2.0.5**
- **Lucide React 0.562.0**
- **Swiper 12.0.3**

---

## 📖 Full Documentation

For complete setup, customization, and deployment instructions, please refer to:

**[📄 Complete Documentation](./documentation.md)**

---

## 🎨 Quick Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
primary: {
  400: '#D4AF37', // Change this to your brand color
}
```

### Update Menu

Edit `src/data/menuData.js`:

```javascript
{
  id: 1,
  name: 'Your Dish Name',
  category: 'lunch',
  price: 24.99,
  description: 'Your description',
  image: 'your-image-url',
}
```

### Update Team

Edit `src/data/teamData.js`:

```javascript
{
  id: 1,
  name: 'Team Member Name',
  role: 'Position',
  image: 'image-url',
  bio: 'Bio text',
}
```

---

## 🚢 Build for Production

```bash
# Build
npm run build

# Preview build
npm run preview
```

Output will be in the `dist/` folder.

---

## 📝 License

This theme is licensed for use on ThemeForest. Please refer to the license included with your purchase.

---

## 💬 Support

For support, please contact: **udaythanki2@gmail.com**

---

**Built with ❤️ for ThemeForest**

**Version:** 1.0.0
