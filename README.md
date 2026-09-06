# ShopVerse - Premium E-Commerce Website

A modern, fully functional e-commerce website built with **HTML, CSS, and vanilla JavaScript**. It includes a dynamic landing page, shop with filtering and sorting, product details modal, persistent shopping cart, checkout flow, contact form, about page, and more. All data is stored locally in the browser's `localStorage` for cart persistence.

![ShopVerse Screenshot](https://via.placeholder.com/800x400?text=ShopVerse+Preview)

## ✨ Features

- **Responsive Design** – Works on desktop, tablet, and mobile.
- **Massive Landing Page** – Hero section with stats, categories grid, featured products, new arrivals, testimonials, and newsletter signup.
- **40+ Products** – Across 4 categories: Electronics, Fashion, Accessories, Home & Living.
- **Shop Page** – Filter by category, sort by price/rating/name, and search products in real-time.
- **Product Quick View** – Click any product to see a detailed modal with option to add to cart or buy now.
- **Cart System** – Add, remove, update quantity, view subtotal, shipping (free over $50), tax, and total. Cart persists via `localStorage`.
- **Checkout Page** – Shipping form with validation, order summary, and order confirmation.
- **Contact Page** – Working contact form with validation and toast notification.
- **About Page** – Company information, values, and trust badges.
- **Toast Notifications** – Visual feedback for actions (added to cart, order placed, etc.).
- **Keyboard Shortcuts** – `Ctrl+H` (Home), `Ctrl+S` (Shop), `Ctrl+C` (Cart), `Esc` to close modal.
- **Local Storage** – Cart items are saved and restored on page reload.
- **Modern UI** – Glassmorphism, gradients, smooth animations, custom scrollbar.

## 🗂️ Project Structure

```
shopverse/
├── index.html          # Main HTML file (contains all pages structure)
├── styles.css          # Complete CSS design system
├── script.js           # All JavaScript functionality and product data
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- No server required – runs entirely in the browser.

### Installation

1. **Download or clone** the repository:
   ```bash
   git clone https://github.com/yourusername/shopverse.git
   ```
   Or simply download the ZIP and extract.

2. **Navigate to the project folder** and open `index.html` in your browser. That's it!

No build tools, dependencies, or package managers needed.

## 🛠️ How to Use

### Navigation

- Use the **navbar** (top) to switch between pages: Home, Shop, About, Contact, and Cart.
- On mobile, tap the **hamburger icon** to open the menu.
- Click the **ShopVerse logo** to return to the home page.

### Browsing & Shopping

1. **Home Page** – Explore categories or featured products. Click any product to view details.
2. **Shop Page** – Filter by category using the buttons, sort using the dropdown, or search with the input field.
3. **Product Modal** – Click a product card to see details. Use "Add to Cart" or "Buy Now".
4. **Cart** – Click the cart icon to view items. Adjust quantities or remove items.
5. **Checkout** – From the cart, click "Proceed to Checkout". Fill the form and place order.

### Keyboard Shortcuts

| Shortcut          | Action                |
|-------------------|-----------------------|
| `Ctrl + H`        | Go to Home page       |
| `Ctrl + S`        | Go to Shop page       |
| `Ctrl + C`        | Go to Cart page       |
| `Esc`             | Close modal/menu      |

## 📁 Product Data

Products are defined in `script.js` inside the `products` array. Each product object includes:

- `id` – Unique identifier
- `name` – Display name
- `category` – `electronics`, `fashion`, `accessories`, `home`
- `price` – Current selling price
- `originalPrice` – Original price (for discounts)
- `rating` – Rating out of 5
- `emoji` – Visual icon used as image
- `description` – Short description
- `badge` – Optional: `'sale'`, `'new'`, or `null`
- `badgeText` – Text shown on badge

### Adding a New Product

1. Open `script.js`.
2. Locate the `products` array.
3. Add a new object following the existing format. Example:
   ```javascript
   {
       id: 41,
       name: 'Wireless Earbuds Pro',
       category: 'electronics',
       price: 89.99,
       originalPrice: 129.99,
       rating: 4.8,
       emoji: '🎧',
       description: 'Active noise cancelling earbuds with wireless charging case.',
       badge: 'sale',
       badgeText: '-30%'
   }
   ```
4. Save and reload the page – the new product will automatically appear.

## 🎨 Customization

### Colors & Theme

All colors are defined as CSS variables in `:root` of `styles.css`:

```css
:root {
    --primary: #6c5ce7;      /* Main brand color */
    --secondary: #00cec9;    /* Accent color */
    --accent: #fd79a8;       /* Badge color */
    /* ... more variables */
}
```

Change any variable value to instantly apply a new theme.

### Fonts

The website uses system fonts by default (`'Segoe UI', system-ui, sans-serif`). To use a custom font, add a Google Fonts link in `index.html` and update `body` in CSS.

## 📦 Cart Persistence

Cart data is stored in `localStorage` under the key `shopverse_cart`. It is automatically loaded when the page opens. To clear the cart, simply remove all items from the UI, or run `localStorage.removeItem('shopverse_cart')` in the browser console.

## 📱 Responsive Behavior

- **Desktop (>992px):** Full navbar, multi-column grids.
- **Tablet (768–992px):** Collapsible hero, adjusted grid columns.
- **Mobile (<768px):** Hamburger menu, single-column filters, 2-column product grid.
- **Small mobile (<480px):** Further adjustments for smaller product cards.

## 🌟 Future Enhancements

- User authentication and profiles
- Wishlist/favorites
- Product reviews and ratings
- Backend integration (Node.js, Firebase, etc.)
- Payment gateway (Stripe, PayPal)
- Order history
- Advanced filtering (price range, multiple categories)

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.

## 🙏 Acknowledgements

- Emojis used as product images and icons
- CSS gradients and animations inspired by modern design trends
- Built with vanilla JavaScript – no frameworks required

---

**Happy Shopping! 🛍️**
