// ==================== PRODUCT DATA ====================
const products = [
    // Electronics (12 items)
    { id: 1, name: 'Wireless Bluetooth Headphones', category: 'electronics', price: 79.99, originalPrice: 129.99, rating: 4.8, emoji: '🎧', description: 'Premium noise-cancelling wireless headphones with 40-hour battery life.', badge: 'sale', badgeText: '-38%' },
    { id: 2, name: 'Smart Fitness Watch', category: 'electronics', price: 149.99, originalPrice: 199.99, rating: 4.7, emoji: '⌚', description: 'Track your health with heart rate monitoring, GPS, sleep tracking.', badge: 'sale', badgeText: '-25%' },
    { id: 3, name: 'Portable Bluetooth Speaker', category: 'electronics', price: 49.99, originalPrice: 69.99, rating: 4.5, emoji: '🔊', description: 'Waterproof portable speaker with 360° sound and deep bass.', badge: 'sale', badgeText: '-28%' },
    { id: 4, name: '4K Action Camera', category: 'electronics', price: 199.99, originalPrice: 299.99, rating: 4.9, emoji: '📷', description: 'Capture stunning 4K videos with image stabilization.', badge: 'sale', badgeText: '-33%' },
    { id: 5, name: 'Wireless Charging Pad', category: 'electronics', price: 29.99, originalPrice: 39.99, rating: 4.4, emoji: '🔋', description: 'Fast wireless charging for all Qi-enabled devices.', badge: 'new', badgeText: 'New' },
    { id: 6, name: 'Smart Home Hub', category: 'electronics', price: 89.99, originalPrice: 119.99, rating: 4.6, emoji: '🏠', description: 'Control all your smart home devices with voice commands.', badge: 'sale', badgeText: '-25%' },
    { id: 7, name: 'Gaming Mouse RGB', category: 'electronics', price: 39.99, originalPrice: 59.99, rating: 4.7, emoji: '🖱️', description: 'High-precision gaming mouse with customizable RGB lighting.', badge: 'sale', badgeText: '-33%' },
    { id: 8, name: 'Mechanical Keyboard', category: 'electronics', price: 89.99, originalPrice: 129.99, rating: 4.8, emoji: '⌨️', description: 'Tactile mechanical switches with RGB backlight.', badge: 'new', badgeText: 'New' },
    { id: 9, name: 'USB-C Hub 7-in-1', category: 'electronics', price: 34.99, originalPrice: 49.99, rating: 4.5, emoji: '🔌', description: 'Expand your laptop with HDMI, USB 3.0, SD card reader.', badge: 'sale', badgeText: '-30%' },
    { id: 10, name: 'Noise-Cancelling Earbuds', category: 'electronics', price: 59.99, originalPrice: 89.99, rating: 4.6, emoji: '🎵', description: 'True wireless earbuds with active noise cancellation.', badge: 'sale', badgeText: '-33%' },
    { id: 11, name: 'Smart Light Bulbs (4-pack)', category: 'electronics', price: 24.99, originalPrice: 34.99, rating: 4.3, emoji: '💡', description: 'Control with your voice or app, millions of colors.', badge: 'new', badgeText: 'New' },
    { id: 12, name: 'Bluetooth Tracker', category: 'electronics', price: 19.99, originalPrice: 29.99, rating: 4.4, emoji: '📍', description: 'Never lose your keys again with this tiny tracker.', badge: null, badgeText: '' },

    // Fashion (10 items)
    { id: 13, name: 'Classic Denim Jacket', category: 'fashion', price: 59.99, originalPrice: 89.99, rating: 4.7, emoji: '🧥', description: 'Timeless denim jacket with a modern fit.', badge: 'sale', badgeText: '-33%' },
    { id: 14, name: 'Premium Cotton T-Shirt', category: 'fashion', price: 19.99, originalPrice: 29.99, rating: 4.5, emoji: '👕', description: 'Ultra-soft 100% organic cotton t-shirt.', badge: 'sale', badgeText: '-33%' },
    { id: 15, name: 'Running Sneakers', category: 'fashion', price: 89.99, originalPrice: 129.99, rating: 4.8, emoji: '👟', description: 'Lightweight running shoes with responsive cushioning.', badge: 'sale', badgeText: '-31%' },
    { id: 16, name: 'Leather Crossbody Bag', category: 'fashion', price: 69.99, originalPrice: 99.99, rating: 4.6, emoji: '👜', description: 'Genuine leather crossbody bag with multiple compartments.', badge: 'new', badgeText: 'New' },
    { id: 17, name: 'Aviator Sunglasses', category: 'fashion', price: 39.99, originalPrice: 59.99, rating: 4.5, emoji: '🕶️', description: 'Classic aviator sunglasses with UV400 protection.', badge: 'sale', badgeText: '-33%' },
    { id: 18, name: 'Wool Winter Scarf', category: 'fashion', price: 24.99, originalPrice: 34.99, rating: 4.3, emoji: '🧣', description: 'Cozy wool blend scarf to keep you warm.', badge: null, badgeText: '' },
    { id: 19, name: 'Silk Blouse', category: 'fashion', price: 49.99, originalPrice: 69.99, rating: 4.4, emoji: '👚', description: 'Elegant silk blouse perfect for office or evening.', badge: 'sale', badgeText: '-29%' },
    { id: 20, name: 'Cargo Pants', category: 'fashion', price: 44.99, originalPrice: 59.99, rating: 4.6, emoji: '👖', description: 'Durable cotton cargo pants with multiple pockets.', badge: 'sale', badgeText: '-25%' },
    { id: 21, name: 'Cashmere Sweater', category: 'fashion', price: 79.99, originalPrice: 119.99, rating: 4.9, emoji: '🧶', description: 'Luxuriously soft cashmere blend sweater.', badge: 'sale', badgeText: '-33%' },
    { id: 22, name: 'Canvas Sneakers', category: 'fashion', price: 34.99, originalPrice: 49.99, rating: 4.2, emoji: '👟', description: 'Classic low-top canvas sneakers for everyday wear.', badge: null, badgeText: '' },

    // Accessories (8 items)
    { id: 23, name: 'Minimalist Watch', category: 'accessories', price: 119.99, originalPrice: 159.99, rating: 4.8, emoji: '⌚', description: 'Elegant minimalist watch with genuine leather strap.', badge: 'sale', badgeText: '-25%' },
    { id: 24, name: 'Leather Wallet', category: 'accessories', price: 34.99, originalPrice: 49.99, rating: 4.5, emoji: '👛', description: 'Slim RFID-blocking leather wallet.', badge: 'new', badgeText: 'New' },
    { id: 25, name: 'Silver Necklace', category: 'accessories', price: 44.99, originalPrice: 64.99, rating: 4.7, emoji: '📿', description: 'Elegant sterling silver necklace with minimalist pendant.', badge: 'sale', badgeText: '-31%' },
    { id: 26, name: 'Smart Ring', category: 'accessories', price: 99.99, originalPrice: 139.99, rating: 4.4, emoji: '💍', description: 'Track sleep, steps, and heart rate with this titanium ring.', badge: 'sale', badgeText: '-29%' },
    { id: 27, name: 'Canvas Backpack', category: 'accessories', price: 54.99, originalPrice: 74.99, rating: 4.6, emoji: '🎒', description: 'Durable canvas backpack with padded laptop compartment.', badge: 'new', badgeText: 'New' },
    { id: 28, name: 'Leather Belt', category: 'accessories', price: 29.99, originalPrice: 39.99, rating: 4.3, emoji: '👔', description: 'Classic genuine leather belt with brass buckle.', badge: null, badgeText: '' },
    { id: 29, name: 'Sunglasses Case', category: 'accessories', price: 14.99, originalPrice: 19.99, rating: 4.1, emoji: '🕶️', description: 'Hard shell protective case for sunglasses.', badge: null, badgeText: '' },
    { id: 30, name: 'Silk Scarf', category: 'accessories', price: 27.99, originalPrice: 39.99, rating: 4.5, emoji: '🧣', description: 'Lightweight silk scarf with elegant pattern.', badge: 'sale', badgeText: '-30%' },

    // Home & Living (10 items)
    { id: 31, name: 'Ceramic Coffee Mug Set', category: 'home', price: 29.99, originalPrice: 39.99, rating: 4.7, emoji: '☕', description: 'Set of 4 handcrafted ceramic coffee mugs.', badge: 'sale', badgeText: '-25%' },
    { id: 32, name: 'Scented Candle Collection', category: 'home', price: 34.99, originalPrice: 49.99, rating: 4.8, emoji: '🕯️', description: 'Set of 3 premium scented candles.', badge: 'new', badgeText: 'New' },
    { id: 33, name: 'Plush Throw Blanket', category: 'home', price: 39.99, originalPrice: 59.99, rating: 4.9, emoji: '🧺', description: 'Ultra-soft plush throw blanket.', badge: 'sale', badgeText: '-33%' },
    { id: 34, name: 'LED Desk Lamp', category: 'home', price: 27.99, originalPrice: 37.99, rating: 4.4, emoji: '💡', description: 'Adjustable LED desk lamp with wireless charging base.', badge: 'new', badgeText: 'New' },
    { id: 35, name: 'Indoor Plant Pot Set', category: 'home', price: 44.99, originalPrice: 59.99, rating: 4.6, emoji: '🪴', description: 'Set of 3 modern ceramic plant pots.', badge: 'sale', badgeText: '-25%' },
    { id: 36, name: 'Aromatherapy Diffuser', category: 'home', price: 49.99, originalPrice: 69.99, rating: 4.7, emoji: '🌿', description: 'Ultrasonic aromatherapy diffuser with 7 LED colors.', badge: 'sale', badgeText: '-29%' },
    { id: 37, name: 'Bamboo Cutting Board Set', category: 'home', price: 22.99, originalPrice: 32.99, rating: 4.5, emoji: '🔪', description: 'Set of 3 bamboo cutting boards.', badge: null, badgeText: '' },
    { id: 38, name: 'Ceramic Vase', category: 'home', price: 19.99, originalPrice: 27.99, rating: 4.3, emoji: '🏺', description: 'Modern white ceramic vase for fresh flowers.', badge: 'sale', badgeText: '-29%' },
    { id: 39, name: 'Essential Oil Set', category: 'home', price: 24.99, originalPrice: 34.99, rating: 4.6, emoji: '🌱', description: 'Set of 6 therapeutic grade essential oils.', badge: 'new', badgeText: 'New' },
    { id: 40, name: 'Wall Art Print Set', category: 'home', price: 39.99, originalPrice: 59.99, rating: 4.8, emoji: '🖼️', description: 'Set of 3 minimalist art prints with frames.', badge: 'sale', badgeText: '-33%' },
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem('shopverse_cart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';
let searchQuery = '';
let currentPage = 'home';

// ==================== DOM ELEMENTS ====================
const mainContent = document.getElementById('mainContent');
const cartCountEl = document.getElementById('cartCount');
const mobileCartCountEl = document.getElementById('mobileCartCount');
const toastContainer = document.getElementById('toastContainer');

// ==================== NAVIGATION ====================
function navigateTo(page) {
    currentPage = page;
    renderPage(page);
    // Update active nav links
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    // Close mobile nav
    document.getElementById('mobileNav').classList.remove('open');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPage(page) {
    switch (page) {
        case 'home':
            renderHomePage();
            break;
        case 'shop':
            renderShopPage();
            break;
        case 'cart':
            renderCartPage();
            break;
        case 'checkout':
            renderCheckoutPage();
            break;
        case 'about':
            renderAboutPage();
            break;
        case 'contact':
            renderContactPage();
            break;
        default:
            renderHomePage();
    }
}

function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('open');
}

// ==================== HOME PAGE ====================
function renderHomePage() {
    const featured = products.filter(p => p.rating >= 4.7).slice(0, 8);
    const newArrivals = products.filter(p => p.badge === 'new').slice(0, 4);
    const categories = [
        { name: 'Electronics', icon: '📱', count: products.filter(p => p.category === 'electronics').length, filter: 'electronics' },
        { name: 'Fashion', icon: '👕', count: products.filter(p => p.category === 'fashion').length, filter: 'fashion' },
        { name: 'Accessories', icon: '💍', count: products.filter(p => p.category === 'accessories').length, filter: 'accessories' },
        { name: 'Home & Living', icon: '🏠', count: products.filter(p => p.category === 'home').length, filter: 'home' },
    ];

    mainContent.innerHTML = `
        <div class="page">
            <!-- Hero -->
            <div class="hero">
                <div class="hero-content">
                    <span class="hero-badge">✨ Free Shipping on orders over $50</span>
                    <h1>Discover Your <span class="highlight">Perfect</span> Shopping Experience</h1>
                    <p>Shop the latest trends in electronics, fashion, accessories, and home essentials. Quality products at unbeatable prices.</p>
                    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                        <button class="btn btn-primary" onclick="navigateTo('shop')">🛍️ Shop Now</button>
                        <button class="btn btn-outline-light" onclick="navigateTo('about')">Learn More</button>
                    </div>
                    <div class="hero-stats">
                        <div class="hero-stat"><span class="number">${products.length}+</span><span class="label">Products</span></div>
                        <div class="hero-stat"><span class="number">10k+</span><span class="label">Customers</span></div>
                        <div class="hero-stat"><span class="number">4.9⭐</span><span class="label">Rating</span></div>
                    </div>
                </div>
                <div class="hero-img">🛒</div>
            </div>

            <!-- Categories -->
            <h2 class="section-title"><span class="emoji">📂</span> Shop by Category</h2>
            <div class="categories-grid">
                ${categories.map(cat => `
                    <div class="category-card" onclick="navigateTo('shop'); setFilter('${cat.filter}')">
                        <span class="cat-icon">${cat.icon}</span>
                        <span class="cat-name">${cat.name}</span>
                        <span class="cat-count">${cat.count} products</span>
                    </div>
                `).join('')}
            </div>

            <!-- Featured Products -->
            <h2 class="section-title"><span class="emoji">⭐</span> Featured Products</h2>
            <p class="section-subtitle">Hand-picked products our customers love</p>
            <div class="products-grid">
                ${featured.map(p => createProductCard(p)).join('')}
            </div>

            <!-- New Arrivals -->
            <h2 class="section-title" style="margin-top:2rem;"><span class="emoji">🆕</span> New Arrivals</h2>
            <div class="products-grid">
                ${newArrivals.map(p => createProductCard(p)).join('')}
            </div>

            <!-- Testimonials -->
            <h2 class="section-title" style="margin-top:2rem;"><span class="emoji">💬</span> What Our Customers Say</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1.5rem;">
                <div style="background:white; border-radius:var(--radius); padding:1.5rem; box-shadow:var(--shadow);">
                    <div style="font-size:1.5rem; margin-bottom:0.5rem;">⭐⭐⭐⭐⭐</div>
                    <p>"Amazing quality and fast shipping! My new headphones are perfect."</p>
                    <p style="font-weight:700; margin-top:0.75rem;">— Sarah J.</p>
                </div>
                <div style="background:white; border-radius:var(--radius); padding:1.5rem; box-shadow:var(--shadow);">
                    <div style="font-size:1.5rem; margin-bottom:0.5rem;">⭐⭐⭐⭐⭐</div>
                    <p>"The customer service is outstanding. Will definitely shop again."</p>
                    <p style="font-weight:700; margin-top:0.75rem;">— Michael R.</p>
                </div>
                <div style="background:white; border-radius:var(--radius); padding:1.5rem; box-shadow:var(--shadow);">
                    <div style="font-size:1.5rem; margin-bottom:0.5rem;">⭐⭐⭐⭐⭐</div>
                    <p>"Great prices and products exactly as described. Highly recommend!"</p>
                    <p style="font-weight:700; margin-top:0.75rem;">— Emily T.</p>
                </div>
            </div>

            <!-- Newsletter -->
            <div style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius:var(--radius); padding:2.5rem; text-align:center; color:white; margin-top:2.5rem;">
                <h2 style="font-size:1.8rem; margin-bottom:1rem;">📬 Subscribe to Our Newsletter</h2>
                <p style="margin-bottom:1.5rem; opacity:0.9;">Get exclusive deals and new arrivals straight to your inbox.</p>
                <div style="display:flex; gap:0.5rem; max-width:450px; margin:0 auto; flex-wrap:wrap; justify-content:center;">
                    <input type="email" placeholder="Your email address" style="flex:1; min-width:200px; padding:0.75rem 1rem; border:none; border-radius:50px; outline:none; font-size:0.95rem;">
                    <button class="btn btn-primary" onclick="showToast('Subscribed! 🎉', 'success')">Subscribe</button>
                </div>
            </div>
        </div>
    `;
    updateCartCount();
}

// ==================== SHOP PAGE ====================
function renderShopPage() {
    let filtered = [...products];
    if (currentFilter !== 'all') filtered = filtered.filter(p => p.category === currentFilter);
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    switch (currentSort) {
        case 'price-low': filtered.sort((a,b) => a.price - b.price); break;
        case 'price-high': filtered.sort((a,b) => b.price - a.price); break;
        case 'rating': filtered.sort((a,b) => b.rating - a.rating); break;
        case 'name': filtered.sort((a,b) => a.name.localeCompare(b.name)); break;
        default: filtered.sort((a,b) => b.rating - a.rating || a.id - b.id);
    }

    mainContent.innerHTML = `
        <div class="page">
            <h2 class="section-title"><span class="emoji">🛍️</span> All Products</h2>
            <div class="filters-bar">
                <div class="filter-group">
                    <span class="filter-label">Category:</span>
                    <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">All</button>
                    <button class="filter-btn ${currentFilter === 'electronics' ? 'active' : ''}" onclick="setFilter('electronics')">📱 Electronics</button>
                    <button class="filter-btn ${currentFilter === 'fashion' ? 'active' : ''}" onclick="setFilter('fashion')">👕 Fashion</button>
                    <button class="filter-btn ${currentFilter === 'accessories' ? 'active' : ''}" onclick="setFilter('accessories')">💍 Accessories</button>
                    <button class="filter-btn ${currentFilter === 'home' ? 'active' : ''}" onclick="setFilter('home')">🏠 Home & Living</button>
                </div>
                <div class="filter-group">
                    <span class="filter-label">Sort:</span>
                    <select class="sort-select" id="sortSelect" onchange="sortProducts()">
                        <option value="featured" ${currentSort === 'featured' ? 'selected' : ''}>Featured</option>
                        <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                        <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                        <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
                        <option value="name" ${currentSort === 'name' ? 'selected' : ''}>Name: A-Z</option>
                    </select>
                </div>
                <div class="filter-group">
                    <input type="text" class="search-input" id="searchInput" placeholder="Search products..." value="${searchQuery}" oninput="searchProducts(this.value)">
                </div>
            </div>
            <div class="products-grid" id="allProducts">
                ${filtered.length === 0 ? 
                    `<div style="grid-column:1/-1;text-align:center;padding:3rem;background:var(--white);border-radius:var(--radius);">
                        <div style="font-size:4rem;margin-bottom:1rem;">🔍</div>
                        <h3>No products found</h3>
                        <p style="color:var(--gray);">Try adjusting your filters or search terms.</p>
                    </div>` : 
                    filtered.map(p => createProductCard(p)).join('')}
            </div>
        </div>
    `;
    updateCartCount();
}

function createProductCard(p) {
    const stars = '⭐'.repeat(Math.round(p.rating));
    return `
        <div class="product-card" onclick="showProductDetail(${p.id})">
            <div class="product-image">
                ${p.badge ? `<span class="product-badge ${p.badge}">${p.badgeText}</span>` : ''}
                ${p.emoji}
            </div>
            <div class="product-info">
                <span class="product-category-tag">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-description">${p.description}</p>
                <div class="product-rating">${stars} <span style="color:var(--gray);font-weight:400;">(${p.rating})</span></div>
                <div class="product-footer">
                    <span class="product-price">$${p.price.toFixed(2)} ${p.originalPrice ? `<span class="original">$${p.originalPrice.toFixed(2)}</span>` : ''}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒 Add</button>
                </div>
            </div>
        </div>
    `;
}

function setFilter(filter) {
    currentFilter = filter;
    // Update active filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(filter)) btn.classList.add('active');
    });
    renderShopPage();
}

function sortProducts() {
    currentSort = document.getElementById('sortSelect').value;
    renderShopPage();
}

function searchProducts(value) {
    searchQuery = value;
    renderShopPage();
}

// ==================== PRODUCT DETAIL MODAL ====================
function showProductDetail(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');
    const stars = '⭐'.repeat(Math.round(p.rating));
    content.innerHTML = `
        <div class="modal-product-img">${p.emoji}</div>
        <span class="product-category-tag" style="font-size:0.9rem;">${p.category}</span>
        <h2 style="font-size:1.6rem;margin-bottom:0.5rem;">${p.name}</h2>
        <div style="margin-bottom:0.75rem;">${stars} <span style="color:var(--gray);">(${p.rating} / 5.0)</span></div>
        <p style="color:var(--gray);margin-bottom:1rem;font-size:1rem;">${p.description}</p>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
            <span style="font-size:2rem;font-weight:800;color:var(--primary);">$${p.price.toFixed(2)}</span>
            ${p.originalPrice ? `<span style="text-decoration:line-through;color:var(--gray);font-size:1.2rem;">$${p.originalPrice.toFixed(2)}</span>
            <span style="background:var(--danger);color:white;padding:0.2rem 0.7rem;border-radius:20px;font-weight:700;font-size:0.85rem;">-${Math.round((1-p.price/p.originalPrice)*100)}%</span>` : ''}
        </div>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="addToCart(${p.id}); closeProductModal();">🛒 Add to Cart</button>
            <button class="btn btn-dark" onclick="addToCart(${p.id}); navigateTo('cart'); closeProductModal();">Buy Now ⚡</button>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// ==================== CART ====================
function saveCart() {
    localStorage.setItem('shopverse_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalItems;
    mobileCartCountEl.textContent = totalItems;
    cartCountEl.classList.add('bump');
    setTimeout(() => cartCountEl.classList.remove('bump'), 300);
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty: qty });
    }
    saveCart();
    showToast(`${product.name} added to cart! 🛒`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (currentPage === 'cart') renderCartPage();
    if (currentPage === 'checkout') renderCheckoutPage();
    showToast('Item removed from cart', 'error');
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    if (currentPage === 'cart') renderCartPage();
    if (currentPage === 'checkout') renderCheckoutPage();
}

function renderCartPage() {
    if (cart.length === 0) {
        mainContent.innerHTML = `
            <div class="page">
                <h2 class="section-title"><span class="emoji">🛒</span> Your Shopping Cart</h2>
                <div class="empty-cart">
                    <span class="empty-icon">🛒</span>
                    <h3>Your cart is empty</h3>
                    <p style="color:var(--gray);margin-bottom:1.5rem;">Looks like you haven't added anything yet.</p>
                    <button class="btn btn-primary" onclick="navigateTo('shop')">🛍️ Start Shopping</button>
                </div>
            </div>
        `;
        updateCartCount();
        return;
    }

    let total = 0;
    const itemsHtml = cart.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `
            <div class="cart-item">
                <div class="cart-item-img">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-category">${item.category}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span class="qty-display">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove">🗑️</button>
                </div>
                <div style="font-weight:700;color:var(--primary);font-size:1.15rem;min-width:80px;text-align:right;">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
    }).join('');

    const shipping = total > 50 ? 0 : 9.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

    mainContent.innerHTML = `
        <div class="page">
            <h2 class="section-title"><span class="emoji">🛒</span> Your Shopping Cart</h2>
            <div class="cart-container">
                <div class="cart-items">${itemsHtml}</div>
                <div class="cart-summary">
                    <div class="summary-row"><span>Subtotal:</span><span>$${total.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping:</span><span>${shipping === 0 ? '<span style="color:var(--success);font-weight:600;">FREE</span>' : '$' + shipping.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Tax (8%):</span><span>$${tax.toFixed(2)}</span></div>
                    <div class="summary-row total"><span>Total:</span><span>$${grandTotal.toFixed(2)}</span></div>
                    <button class="btn btn-primary btn-lg" style="width:100%;margin-top:1rem;" onclick="navigateTo('checkout')">Proceed to Checkout →</button>
                </div>
            </div>
        </div>
    `;
    updateCartCount();
}

// ==================== CHECKOUT ====================
function renderCheckoutPage() {
    if (cart.length === 0) {
        mainContent.innerHTML = `
            <div class="page">
                <h2 class="section-title"><span class="emoji">💳</span> Checkout</h2>
                <div class="empty-cart">
                    <span class="empty-icon">🛒</span>
                    <h3>Your cart is empty</h3>
                    <p style="color:var(--gray);margin-bottom:1.5rem;">Add some items before checking out.</p>
                    <button class="btn btn-primary" onclick="navigateTo('shop')">🛍️ Go Shopping</button>
                </div>
            </div>
        `;
        return;
    }

    let total = 0;
    const itemsHtml = cart.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `<div style="display:flex;justify-content:space-between;font-size:0.9rem;padding:0.4rem 0;">
            <span>${item.emoji} ${item.name} ×${item.qty}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        </div>`;
    }).join('');

    const shipping = total > 50 ? 0 : 9.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

    mainContent.innerHTML = `
        <div class="page">
            <h2 class="section-title"><span class="emoji">💳</span> Checkout</h2>
            <div class="checkout-container">
                <div class="checkout-form">
                    <h3 style="margin-bottom:1.25rem;">Shipping Information</h3>
                    <form id="checkoutForm" onsubmit="handleCheckout(event)">
                        <div class="form-group">
                            <label>Full Name *</label>
                            <input type="text" id="checkoutName" required placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label>Email Address *</label>
                            <input type="email" id="checkoutEmail" required placeholder="john@example.com">
                        </div>
                        <div class="form-group">
                            <label>Shipping Address *</label>
                            <input type="text" id="checkoutAddress" required placeholder="123 Main Street">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>City *</label>
                                <input type="text" id="checkoutCity" required placeholder="New York">
                            </div>
                            <div class="form-group">
                                <label>ZIP Code *</label>
                                <input type="text" id="checkoutZip" required placeholder="10001">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Country *</label>
                            <select id="checkoutCountry" required>
                                <option value="">Select country...</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="DE">Germany</option>
                                <option value="FR">France</option>
                                <option value="JP">Japan</option>
                                <option value="IN">India</option>
                                <option value="BR">Brazil</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Payment Method *</label>
                            <select id="checkoutPayment" required>
                                <option value="">Select payment...</option>
                                <option value="credit">💳 Credit Card</option>
                                <option value="debit">💳 Debit Card</option>
                                <option value="paypal">🅿️ PayPal</option>
                                <option value="cod">💵 Cash on Delivery</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Place Order ✅</button>
                    </form>
                </div>
                <div class="order-summary-side">
                    <h3 style="margin-bottom:1rem;">📋 Order Summary</h3>
                    ${itemsHtml}
                    <hr style="border-color:var(--light-gray);margin:0.75rem 0;">
                    <div class="summary-row"><span>Subtotal:</span><span>$${total.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Shipping:</span><span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span></div>
                    <div class="summary-row"><span>Tax:</span><span>$${tax.toFixed(2)}</span></div>
                    <div class="summary-row total"><span>Total:</span><span>$${grandTotal.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    `;
    updateCartCount();
}

function handleCheckout(e) {
    e.preventDefault();
    const name = document.getElementById('checkoutName').value;
    const email = document.getElementById('checkoutEmail').value;
    const address = document.getElementById('checkoutAddress').value;
    const city = document.getElementById('checkoutCity').value;
    const zip = document.getElementById('checkoutZip').value;
    const country = document.getElementById('checkoutCountry').value;
    const payment = document.getElementById('checkoutPayment').value;

    if (!name || !email || !address || !city || !zip || !country || !payment) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    const orderNumber = 'SV-' + Date.now().toString().slice(-6);
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = total > 50 ? 0 : 9.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

    showToast(`Order ${orderNumber} placed successfully! 🎉 Total: $${grandTotal.toFixed(2)}`, 'success');

    cart = [];
    saveCart();
    navigateTo('home');

    setTimeout(() => {
        alert(`✅ Order Confirmed!\n\nOrder #: ${orderNumber}\nTotal: $${grandTotal.toFixed(2)}\n\nThank you, ${name}! Your order will be shipped to:\n${address}, ${city}, ${zip}, ${country}\n\nPayment Method: ${payment}\n\nA confirmation email has been sent to ${email}.`);
    }, 500);
}

// ==================== ABOUT PAGE ====================
function renderAboutPage() {
    mainContent.innerHTML = `
        <div class="page">
            <h2 class="section-title"><span class="emoji">ℹ️</span> About ShopVerse</h2>
            <div style="background:white;border-radius:var(--radius);padding:2rem;box-shadow:var(--shadow);max-width:900px;">
                <p style="font-size:1.1rem;margin-bottom:1.5rem;line-height:1.8;">
                    <strong>ShopVerse</strong> is your one-stop destination for premium products across electronics, fashion, accessories, and home essentials. Founded in 2024, we've been committed to bringing you the best quality products at the most competitive prices.
                </p>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:2rem;">
                    <div style="text-align:center;padding:1.5rem;background:var(--bg);border-radius:var(--radius-sm);">
                        <div style="font-size:2.5rem;margin-bottom:0.5rem;">🚀</div>
                        <h4>Fast Delivery</h4>
                        <p style="color:var(--gray);font-size:0.9rem;">Same-day shipping available</p>
                    </div>
                    <div style="text-align:center;padding:1.5rem;background:var(--bg);border-radius:var(--radius-sm);">
                        <div style="font-size:2.5rem;margin-bottom:0.5rem;">🔒</div>
                        <h4>Secure Payments</h4>
                        <p style="color:var(--gray);font-size:0.9rem;">256-bit SSL encryption</p>
                    </div>
                    <div style="text-align:center;padding:1.5rem;background:var(--bg);border-radius:var(--radius-sm);">
                        <div style="font-size:2.5rem;margin-bottom:0.5rem;">💯</div>
                        <h4>Quality Guarantee</h4>
                        <p style="color:var(--gray);font-size:0.9rem;">30-day money-back</p>
                    </div>
                    <div style="text-align:center;padding:1.5rem;background:var(--bg);border-radius:var(--radius-sm);">
                        <div style="font-size:2.5rem;margin-bottom:0.5rem;">🤝</div>
                        <h4>24/7 Support</h4>
                        <p style="color:var(--gray);font-size:0.9rem;">Always here to help</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== CONTACT PAGE ====================
function renderContactPage() {
    mainContent.innerHTML = `
        <div class="page">
            <h2 class="section-title"><span class="emoji">📞</span> Contact Us</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;max-width:900px;">
                <div style="background:white;border-radius:var(--radius);padding:2rem;box-shadow:var(--shadow);">
                    <h3 style="margin-bottom:1rem;">Get in Touch</h3>
                    <form id="contactForm" onsubmit="handleContact(event)">
                        <div class="form-group">
                            <label>Your Name *</label>
                            <input type="text" id="contactName" required placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" id="contactEmail" required placeholder="your@email.com">
                        </div>
                        <div class="form-group">
                            <label>Subject *</label>
                            <input type="text" id="contactSubject" required placeholder="How can we help?">
                        </div>
                        <div class="form-group">
                            <label>Message *</label>
                            <textarea id="contactMessage" required placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message 📨</button>
                    </form>
                </div>
                <div style="display:flex;flex-direction:column;gap:1rem;">
                    <div style="background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);">
                        <div style="font-size:2rem;margin-bottom:0.5rem;">📍</div>
                        <h4>Our Office</h4>
                        <p style="color:var(--gray);">123 Commerce Street<br>New York, NY 10001<br>United States</p>
                    </div>
                    <div style="background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);">
                        <div style="font-size:2rem;margin-bottom:0.5rem;">📧</div>
                        <h4>Email Us</h4>
                        <p style="color:var(--gray);">support@shopverse.com<br>sales@shopverse.com</p>
                    </div>
                    <div style="background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);">
                        <div style="font-size:2rem;margin-bottom:0.5rem;">📱</div>
                        <h4>Call Us</h4>
                        <p style="color:var(--gray);">+1 (555) 123-4567<br>Mon-Fri: 9am - 6pm EST</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    showToast(`Thanks ${name}! Your message has been sent. We'll reply to ${email} soon. ✉️`, 'success');
    e.target.reset();
}

// ==================== TOAST ====================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== MODAL CLOSE ====================
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) closeProductModal();
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
        document.getElementById('mobileNav').classList.remove('open');
    }
    if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
            case 'h': e.preventDefault(); navigateTo('home'); break;
            case 's': e.preventDefault(); navigateTo('shop'); break;
            case 'c': e.preventDefault(); navigateTo('cart'); break;
        }
    }
});

// ==================== INITIALIZATION ====================
function init() {
    renderHomePage();
    updateCartCount();
    console.log('🛍️ ShopVerse E-Commerce initialized successfully!');
    console.log(`📦 ${products.length} products loaded`);
    console.log(`🛒 Cart has ${cart.length} items`);
}

init();
