export const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'Cooking Tips', name: 'Cooking Tips' },
  { id: 'Menu Updates', name: 'Menu Updates' },
  { id: 'Wine & Drinks', name: 'Wine & Drinks' },
  { id: 'Restaurant Life', name: 'Restaurant Life' },
  { id: 'Desserts', name: 'Desserts' },
  { id: 'Sustainability', name: 'Sustainability' },
];

export const blogData = [
  {
    id: 1,
    title: 'The Art of Perfect Pasta',
    slug: 'art-of-perfect-pasta',
    excerpt: 'Learn the secrets behind making authentic Italian pasta from our head chef.',
    content: `
      <p>Pasta is more than just a dish—it's a culinary tradition that has been perfected over centuries. At our restaurant, we believe in honoring these traditions while adding our own creative twist.</p>
      
      <h2>The Foundation: Quality Ingredients</h2>
      <p>The secret to exceptional pasta starts with selecting the finest ingredients. We use only premium durum wheat semolina and farm-fresh eggs...</p>
      
      <h2>Technique Matters</h2>
      <p>The way you cook pasta can make or break the dish. Here are our top tips...</p>
      
      <h2>Sauce Pairing</h2>
      <p>Different pasta shapes pair better with certain sauces. Understanding these combinations elevates your dish from good to extraordinary...</p>
    `,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=800&fit=crop',
    category: 'Cooking Tips',
    author: {
      name: 'Chef Marco Rossi',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
    },
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Pasta', 'Italian Cuisine', 'Cooking Tips'],
  },
  {
    id: 2,
    title: 'Seasonal Menu: Spring Delights',
    slug: 'seasonal-menu-spring-delights',
    excerpt: 'Discover our new spring menu featuring fresh, locally-sourced ingredients.',
    content: `
      <p>Spring has arrived, and with it comes a bounty of fresh ingredients that inspire our new seasonal menu...</p>
      
      <h2>Farm-to-Table Philosophy</h2>
      <p>We work closely with local farmers to bring you the freshest produce available...</p>
      
      <h2>Featured Dishes</h2>
      <p>Our spring menu showcases vibrant flavors and light, refreshing combinations...</p>
      
      <h2>Sustainability Commitment</h2>
      <p>Every ingredient is carefully selected with sustainability in mind...</p>
    `,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=800&fit=crop',
    category: 'Menu Updates',
    author: {
      name: 'Emily Rodriguez',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    date: '2024-01-12',
    readTime: '4 min read',
    tags: ['Seasonal', 'Menu', 'Local Ingredients'],
  },
  {
    id: 3,
    title: 'Wine Pairing Guide for Beginners',
    slug: 'wine-pairing-guide-beginners',
    excerpt: 'Master the basics of wine pairing with our sommelier\'s expert tips.',
    content: `
      <p>Wine pairing doesn't have to be intimidating. With a few basic principles, you can enhance any meal...</p>
      
      <h2>Understanding Wine Basics</h2>
      <p>Before diving into pairing, it's important to understand the fundamental characteristics of wine...</p>
      
      <h2>Classic Pairing Rules</h2>
      <p>While rules are meant to be broken, these guidelines will help you start your pairing journey...</p>
      
      <h2>Experimenting with Flavors</h2>
      <p>Don't be afraid to try unconventional pairings—sometimes the best matches come from unexpected combinations...</p>
    `,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&h=800&fit=crop',
    category: 'Wine & Drinks',
    author: {
      name: 'David Chen',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
    },
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Wine', 'Pairing', 'Beverages'],
  },
  {
    id: 4,
    title: 'Behind the Scenes: A Day in Our Kitchen',
    slug: 'behind-scenes-kitchen',
    excerpt: 'Get an exclusive look at what happens in our kitchen during a busy service.',
    content: `
      <p>Ever wondered what goes on behind the kitchen doors during a bustling dinner service? Let us take you on a journey...</p>
      
      <h2>Morning Preparations</h2>
      <p>Our day starts early with fresh deliveries and mise en place...</p>
      
      <h2>The Lunch Rush</h2>
      <p>When the doors open, our team moves like a well-orchestrated symphony...</p>
      
      <h2>Evening Service</h2>
      <p>As the sun sets, we prepare for our busiest hours...</p>
    `,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop',
    category: 'Restaurant Life',
    author: {
      name: 'Chef Marco Rossi',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
    },
    date: '2024-01-08',
    readTime: '7 min read',
    tags: ['Kitchen', 'Team', 'Restaurant Life'],
  },
  {
    id: 5,
    title: 'The Perfect Dessert: Tiramisu Story',
    slug: 'perfect-dessert-tiramisu',
    excerpt: 'Explore the history and our special recipe for this classic Italian dessert.',
    content: `
      <p>Tiramisu, meaning "pick me up" in Italian, is one of the most beloved desserts worldwide...</p>
      
      <h2>Origins and History</h2>
      <p>The exact origin of tiramisu is debated, but most agree it comes from the Veneto region...</p>
      
      <h2>Our Special Recipe</h2>
      <p>What makes our tiramisu special is the balance of flavors and the quality of ingredients...</p>
      
      <h2>Tips for Home Bakers</h2>
      <p>Want to recreate this dessert at home? Here are our chef's tips...</p>
    `,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=800&fit=crop',
    category: 'Desserts',
    author: {
      name: 'Sarah Johnson',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    },
    date: '2024-01-05',
    readTime: '5 min read',
    tags: ['Dessert', 'Italian', 'Recipe'],
  },
  {
    id: 6,
    title: 'Sustainable Dining: Our Commitment',
    slug: 'sustainable-dining-commitment',
    excerpt: 'Learn about our eco-friendly practices and sustainability initiatives.',
    content: `
      <p>At our restaurant, we believe that great food and environmental responsibility go hand in hand...</p>
      
      <h2>Local Sourcing</h2>
      <p>We prioritize working with local farmers and suppliers to reduce our carbon footprint...</p>
      
      <h2>Zero Waste Goals</h2>
      <p>Our kitchen follows strict protocols to minimize food waste...</p>
      
      <h2>Community Impact</h2>
      <p>Supporting our local community is at the heart of what we do...</p>
    `,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=800&fit=crop',
    category: 'Sustainability',
    author: {
      name: 'Emily Rodriguez',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    date: '2024-01-03',
    readTime: '6 min read',
    tags: ['Sustainability', 'Environment', 'Community'],
  },
];
