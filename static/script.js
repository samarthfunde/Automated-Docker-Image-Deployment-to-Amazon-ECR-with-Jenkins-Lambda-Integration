/* ═══════════════════════════════════════
   Sahyadri Clothing — script.js
═══════════════════════════════════════ */

// ── PRODUCT DATA ──
const PRODUCTS = [
  // MEN
  { id: 1, cat: 'men', name: 'Nehru Collar Kurta', desc: 'Soft cotton kurta, perfect for summer gatherings', price: 799, original: 1099, emoji: '👔', badge: 'Sale', badgeClass: 'sale-badge', season: 'summer' },
  { id: 2, cat: 'men', name: 'Khadi Sherwani', desc: 'Handwoven khadi sherwani for weddings & events', price: 2499, original: 3200, emoji: '🥻', badge: 'Premium', badgeClass: '', season: 'winter' },
  { id: 3, cat: 'men', name: 'Bandhani Shirt', desc: 'Vibrant tie-dye Bandhani print casual shirt', price: 649, original: 899, emoji: '👕', badge: 'New', badgeClass: 'new-badge', season: 'summer' },
  { id: 4, cat: 'men', name: 'Dhoti Kurta Set', desc: 'Classic white dhoti-kurta for festivals & puja', price: 1199, original: 1599, emoji: '🩱', badge: 'Festival', badgeClass: 'festival-badge', season: 'all' },
  { id: 5, cat: 'men', name: 'Woollen Shawl', desc: 'Warm pashmina-blend shawl from Himachal Pradesh', price: 999, original: 1399, emoji: '🧣', badge: 'Winter', badgeClass: '', season: 'winter' },
  { id: 6, cat: 'men', name: 'Pathani Suit', desc: 'Comfortable loose-fit Pathani with embroidery', price: 1349, original: 1799, emoji: '🧥', badge: 'Sale', badgeClass: 'sale-badge', season: 'all' },

  // WOMEN
  { id: 7,  cat: 'women', name: 'Paithani Saree', desc: 'Authentic Paithani from Aurangabad with peacock border', price: 3499, original: 4500, emoji: '🥻', badge: 'Exclusive', badgeClass: 'festival-badge', season: 'all' },
  { id: 8,  cat: 'women', name: 'Chanderi Suit', desc: 'Light airy Chanderi silk suit for summer elegance', price: 1599, original: 2199, emoji: '👘', badge: 'Summer', badgeClass: 'new-badge', season: 'summer' },
  { id: 9,  cat: 'women', name: 'Navratri Chaniya Choli', desc: 'Mirror-work garba outfit in vibrant colours', price: 1899, original: 2600, emoji: '💃', badge: 'Festival', badgeClass: 'festival-badge', season: 'all' },
  { id: 10, cat: 'women', name: 'Ikat Kurti', desc: 'Handloom Ikat print cotton kurti, daily wear', price: 599, original: 849, emoji: '👗', badge: 'Sale', badgeClass: 'sale-badge', season: 'summer' },
  { id: 11, cat: 'women', name: 'Bridal Lehenga', desc: 'Heavy embroidered lehenga for wedding season', price: 8999, original: 12000, emoji: '👰', badge: 'Bridal', badgeClass: 'festival-badge', season: 'all' },
  { id: 12, cat: 'women', name: 'Kashmiri Phiran', desc: 'Warm woollen Phiran with traditional embroidery', price: 2199, original: 2900, emoji: '🧤', badge: 'Winter', badgeClass: '', season: 'winter' },

  // BABY
  { id: 13, cat: 'baby', name: 'Baby Jaipuri Set', desc: 'Soft block-print cotton onesie set for 0–12 months', price: 349, original: 499, emoji: '👶', badge: 'New', badgeClass: 'new-badge', season: 'summer' },
  { id: 14, cat: 'baby', name: 'Baby Angarkha', desc: 'Tiny festive kurta angarkha for little ones', price: 449, original: 599, emoji: '🍼', badge: 'Festival', badgeClass: 'festival-badge', season: 'all' },
  { id: 15, cat: 'baby', name: 'Newborn Swaddle Set', desc: '100% organic cotton swaddle blankets, pack of 3', price: 599, original: 799, emoji: '🌸', badge: 'Organic', badgeClass: 'sale-badge', season: 'all' },
  { id: 16, cat: 'baby', name: 'Baby Woollen Suit', desc: 'Cozy knitted woollen suit for winter babies', price: 699, original: 999, emoji: '🐣', badge: 'Winter', badgeClass: '', season: 'winter' },

  // KIDS
  { id: 17, cat: 'kids', name: 'Kids Kurta Pyjama', desc: 'Comfortable cotton kurta set for boys 3–12 yrs', price: 499, original: 699, emoji: '🎒', badge: 'Sale', badgeClass: 'sale-badge', season: 'all' },
  { id: 18, cat: 'kids', name: 'Girls Lehenga Set', desc: 'Floral embroidered lehenga for girls 4–10 yrs', price: 799, original: 1099, emoji: '🌺', badge: 'Festival', badgeClass: 'festival-badge', season: 'all' },
  { id: 19, cat: 'kids', name: 'Kids Sherwani', desc: 'Mini sherwani set for weddings, age 5–14 yrs', price: 1099, original: 1499, emoji: '🤵', badge: 'Wedding', badgeClass: 'festival-badge', season: 'all' },

  // FESTIVAL
  { id: 20, cat: 'festival', name: 'Diwali Silk Kurta', desc: 'Lustrous silk kurta with zari work for Diwali night', price: 1799, original: 2499, emoji: '🪔', badge: 'Diwali', badgeClass: 'festival-badge', season: 'all' },
  { id: 21, cat: 'festival', name: 'Shivjayanti Dhoti Set', desc: 'Traditional saffron & white set for Chhatrapati Shivaji Maharaj Jayanti', price: 999, original: 1399, emoji: '⚔️', badge: 'Shivjayanti', badgeClass: 'festival-badge', season: 'all' },
  { id: 22, cat: 'festival', name: 'Ambedkar Blue Kurta', desc: 'Signature blue kurta for Dr. Ambedkar Jayanti, April 14', price: 849, original: 1199, emoji: '💙', badge: 'Jayanti', badgeClass: 'festival-badge', season: 'all' },
  { id: 23, cat: 'festival', name: 'Gudi Padwa Set', desc: 'New year special — bright yellow & green kurta set', price: 1099, original: 1599, emoji: '🌺', badge: 'Gudi Padwa', badgeClass: 'festival-badge', season: 'all' },
  { id: 24, cat: 'festival', name: 'Ganesh Utsav Kurta', desc: 'Yellow-saffron kurta with Ganesh motif embroidery', price: 1249, original: 1699, emoji: '🐘', badge: 'Ganpati', badgeClass: 'festival-badge', season: 'all' },
  { id: 25, cat: 'festival', name: 'Navratri Kediya Set', desc: 'Boys garba kediya with mirror-work for 9 nights', price: 799, original: 1099, emoji: '🎊', badge: 'Navratri', badgeClass: 'festival-badge', season: 'all' },
  { id: 26, cat: 'festival', name: 'Holi Special Kurta', desc: 'Color-safe white cotton kurta for Holi celebrations', price: 549, original: 799, emoji: '🌈', badge: 'Holi', badgeClass: 'festival-badge', season: 'all' },
];

// ── STATE ──
let cart = [];
let currentFilter = 'all';

// ── RENDER PRODUCTS ──
function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.05}s">
      <div class="product-img">
        ${p.badge ? `<div class="product-badge ${p.badgeClass}">${p.badge}</div>` : ''}
        <span style="user-select:none">${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="product-category">${p.cat.toUpperCase()}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="price-original">₹${p.original.toLocaleString('en-IN')}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── FILTER ──
function filterCategory(cat) {
  currentFilter = cat;

  // Update tabs
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });

  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  renderProducts(filtered);
}

// ── SEARCH ──
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    filterCategory(currentFilter);
    return;
  }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    (p.badge && p.badge.toLowerCase().includes(q))
  );
  renderProducts(results);
}

// ── CART ──
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = '₹' + total.toLocaleString('en-IN');

  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    cartItems.innerHTML = '';
    cartItems.appendChild(cartEmpty);
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-emoji">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name} ${c.qty > 1 ? `× ${c.qty}` : ''}</div>
        <div class="cart-item-price">₹${(c.price * c.qty).toLocaleString('en-IN')}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})">🗑</button>
    </div>
  `).join('');
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkout() {
  showToast('🎉 Order placed! Thank you for shopping at Sahyadri!');
  cart = [];
  updateCartUI();
  toggleCart();
}

// ── SEARCH BAR TOGGLE ──
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('search-input').focus();
  } else {
    document.getElementById('search-input').value = '';
    filterCategory(currentFilter);
  }
}

// ── MOBILE MENU ──
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── TOAST ──
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── FESTIVAL BANNER AUTO-SCROLL ──
(function festivalAutoScroll() {
  const el = document.getElementById('festival-scroll');
  if (!el) return;
  let paused = false;
  el.addEventListener('mouseenter', () => paused = true);
  el.addEventListener('mouseleave', () => paused = false);

  setInterval(() => {
    if (!paused) {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
    }
  }, 20);
})();

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  filterCategory('all');
  updateCartUI();
});
