/**
 * SparkTech AI Labs Application Logic
 * Features:
 * - Decentralized AI Compute & Node Calculators
 * - Digital Goods Storefront with Category Filters & Search
 * - Interactive Shopping Cart Drawer with Checkout & Asset Delivery
 * - Mobile Themes Studio with Interactive Phone Simulator
 * - Playable HTML5 Canvas / Grid Mini-Game (Spark Neural Matrix) with Web Audio Synthesizer
 * - Non-Custodial Web3 Wallet Simulation ($SPARK Rewards)
 * - Developer API Code Playground
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMockupTabs();
  initHeroAgentTerminal();
  initDigitalStore();
  initMobileThemesStudio();
  initArcadeMiniGame();
  initQuantumClicker();
  initComputeCalculator();
  initApiCodePlayground();
  initFaqAccordion();
  initCartDrawer();
  initWalletModal();
  initContractCopy();
  initLiveCounters();
});

/* ==========================================================================
   1. Products Database
   ========================================================================== */
const PRODUCTS_DATA = {
  p1: {
    id: 'p1',
    name: 'NeuroPrompt Master Suite',
    category: 'prompts',
    catName: 'AI Prompts & Weights',
    price: 0.00,
    priceLabel: 'Free Tier',
    tokenPrice: '0 $SPARK',
    icon: '🧠',
    desc: 'Enterprise-grade prompt frameworks for GPT-4o, Claude 3.5, and coding models. Includes system architecture templates and automated chaining scripts.',
    features: [
      '500+ Curated prompt templates categorized by use case',
      'Chain-of-thought & self-consistency reasoning pipelines',
      'Python & Node.js test execution scripts',
      'Commercial & open-source MIT license included'
    ]
  },
  p2: {
    id: 'p2',
    name: 'Cyber Spark OLED Mobile Theme',
    category: 'themes',
    catName: 'Mobile Themes & Icons',
    price: 4.99,
    priceLabel: '$4.99 USD',
    tokenPrice: '10 $SPARK',
    icon: '📱',
    desc: 'High-voltage cyberpunk theme engineered for OLED mobile displays. Features 180+ custom neon app icons, 6 4K OLED wallpapers, and iOS/Android widgets.',
    features: [
      '180+ Vector app icons (.PNG & .SVG)',
      '6 Lossless 4K OLED (2160 × 3840) neon wallpapers',
      'iOS 16+ Shortcuts setup profile + Android Nova Launcher pack',
      'True OLED black levels for maximum battery conservation'
    ]
  },
  p3: {
    id: 'p3',
    name: 'Autonomous AI Agent Boilerplate',
    category: 'templates',
    catName: 'Developer Templates',
    price: 9.99,
    priceLabel: '$9.99 USD',
    tokenPrice: '20 $SPARK',
    icon: '⚡',
    desc: 'Production-ready starter repository for building autonomous tool-calling AI agents with Redis task memory, vector database adapters, and bot integrations.',
    features: [
      'FastAPI (Python) and Express (TypeScript) microservices',
      'Decentralized RPC endpoints and OpenAI-compatible API schemas',
      'Docker Compose deployment ready for cloud or local GPU cluster',
      'Pre-built integrations for Telegram, Discord, and Slack bots'
    ]
  },
  p4: {
    id: 'p4',
    name: 'Obsidian Minimalist Phone Theme',
    category: 'themes',
    catName: 'Mobile Themes & Icons',
    price: 4.99,
    priceLabel: '$4.99 USD',
    tokenPrice: '10 $SPARK',
    icon: '🌑',
    desc: 'Zero-distraction monochrome aesthetic with minimalist monospace typography, stealth vector icons, and matte black wallpapers.',
    features: [
      '200+ Minimalist monochrome app icons',
      '8 High-contrast matte obsidian dark wallpapers',
      'Minimal clock & weather lockscreen widget configurations',
      'Zero visual clutter for focused digital well-being'
    ]
  },
  p5: {
    id: 'p5',
    name: 'Spark-LoRA Fine-Tuned Weights',
    category: 'prompts',
    catName: 'AI Prompts & Weights',
    price: 0.00,
    priceLabel: 'Free Tier',
    tokenPrice: '0 $SPARK',
    icon: '🔮',
    desc: 'Open-source 4-bit quantized adapter for reasoning & code generation. Compatible with Ollama, LM Studio, and vLLM on local machines.',
    features: [
      'GGUF and Safetensors checkpoints (Q4_K_M and Q8_0)',
      'Trained on 45,000 verified reasoning trajectories',
      'Runs effortlessly on Apple Silicon M-series or 8GB VRAM GPUs',
      'Full Apache 2.0 open-weights license'
    ]
  },
  p6: {
    id: 'p6',
    name: 'Spark Design System & UI Kit',
    category: 'graphics',
    catName: 'UI Kits & 3D',
    price: 7.99,
    priceLabel: '$7.99 USD',
    tokenPrice: '16 $SPARK',
    icon: '🎨',
    desc: 'Editorial-grade cream & dark obsidian component library. Interactive cards, code consoles, charts, and mobile mockups in Figma & CSS.',
    features: [
      '120+ Auto-layout Figma components & variants',
      'Production-ready Vanilla CSS token system',
      'Dark obsidian & tinted cream colorways',
      'Accessible focus rings and ARIA-ready patterns'
    ]
  },
  p7: {
    id: 'p7',
    name: 'Matrix Terminal Green Theme',
    category: 'themes',
    catName: 'Mobile Themes & Icons',
    price: 3.99,
    priceLabel: '$3.99 USD',
    tokenPrice: '8 $SPARK',
    icon: '📟',
    desc: 'Nostalgic retro hacker theme featuring glowing green CRT phosphor aesthetics, terminal glyphs, and animated live wallpaper loop.',
    features: [
      '160+ Retro phosphor green CRT app icons',
      'Scanline CRT dynamic & static 4K wallpapers',
      'Retro monospace digital clock & battery widgets',
      'Step-by-step installation instructions for iOS & Android'
    ]
  },
  p8: {
    id: 'p8',
    name: 'HTML5 Arcade Mini-Game Engine',
    category: 'templates',
    catName: 'Developer Templates',
    price: 12.99,
    priceLabel: '$12.99 USD',
    tokenPrice: '25 $SPARK',
    icon: '🕹️',
    desc: 'Full source code for modular browser mini-games with Web Audio sound synthesis, leaderboard backend, and $SPARK reward integration.',
    features: [
      'Pure JavaScript HTML5 game loop with zero external dependencies',
      'Built-in Web Audio API 8-bit sound synthesizer',
      'Local storage high-score & token economy bridge',
      'Responsive touch controls optimized for mobile browsers'
    ]
  }
};

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.hidden = false;
    drawer.setAttribute('data-open', 'true');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    drawer.hidden = true;
    drawer.setAttribute('data-open', 'false');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
      closeMenu();
    }
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   3. Hero Mockup Tabs
   ========================================================================== */
function initMockupTabs() {
  const tabButtons = document.querySelectorAll('.mockup-tab-btn');
  const tabPanels = document.querySelectorAll('.mockup-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => {
        p.hidden = true;
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`panel-${targetId}`);
      if (targetPanel) {
        targetPanel.hidden = false;
        targetPanel.classList.add('active');
      }
    });
  });

  // Direct add button in hero preview
  const directAddBtn = document.querySelector('.add-to-cart-direct-btn');
  if (directAddBtn) {
    directAddBtn.addEventListener('click', () => {
      addToCart('p1');
    });
  }
}

/* ==========================================================================
   4. Hero Terminal Prompts
   ========================================================================== */
function initHeroAgentTerminal() {
  const form = document.getElementById('mockup-chat-form');
  const input = document.getElementById('mockup-chat-input');
  const chatContainer = document.getElementById('chat-messages-container');
  const chips = document.querySelectorAll('.prompt-chip');
  const liveStatus = document.getElementById('chat-status-announcer');

  const responses = {
    "Query Neural LLM Node #7": {
      title: "Decentralized LLM Inference",
      latency: "0.38s execution",
      trace: "• Dispatched prompt to worker node #7 (RTX 4090 24GB)\n• Sharded weights verified via zero-knowledge proof\n• Response tokens: 248 tokens at 65 tokens/sec\n• Network fee: 0.002 $SPARK (Subsidized by Community Pool)",
      code: `// SparkTech LLM Node #7 Output
{
  "nodeId": "spark-worker-07",
  "status": "ready",
  "gpuTemp": "62°C",
  "tps": 65.4,
  "verified": true,
  "result": "Decentralized intelligence connected and responsive."
}`
    },
    "Estimate 500 $SPARK Staking Yield": {
      title: "Compute Staking Yield Simulation",
      latency: "Real-time projection",
      trace: "• Staked amount: 500 $SPARK (~$400.00 USD)\n• Node multiplier: 1.45x (High-uptime GPU node validator)\n• Monthly reward: 42.50 $SPARK\n• Access tier: VIP Digital Storefront Lifetime 15% discount",
      code: `// $SPARK Staking Telemetry
{
  "stakedTokens": "500 SPARK",
  "estimatedAPY": "14.2%",
  "monthlyYield": "42.50 SPARK",
  "bonusTier": "Store VIP Creator",
  "contract": "0x8a91C2B5d4e3F1092837465abCdeFF0123456789"
}`
    },
    "Verify Free Digital Downloads": {
      title: "Creator Marketplace Verification",
      latency: "Free Asset Cache",
      trace: "• Verifying open-access digital packages on SparkTech Store\n• NeuroPrompt Master Suite: Available (500+ formulas)\n• Spark-LoRA Quantized Weights: Available (GGUF)\n• License: Full commercial usage with 0 platform fees",
      code: `// Free Digital Downloads Status
{
  "freeAssetsAvailable": 2,
  "totalFreeDownloads": 27600,
  "instantDelivery": "Direct .ZIP Archive",
  "cost": "$0.00"
}`
    },
    "default": {
      title: "SparkTech Node Command",
      latency: "Local P2P RPC",
      trace: "• Executing distributed command across SparkTech lattice\n• Synchronized with decentralized worker nodes\n• Digital store and arcade states verified",
      code: `// Node Command Reply
{
  "cluster": "SparkTech AI Labs",
  "activeNodes": 2184,
  "gas": "< 0.0005 USD",
  "arcadeHighscore": 1840,
  "storeItems": 8
}`
    }
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-prompt') || chip.textContent.trim();
      if (input) input.value = text;
      handleSendMessage(text);
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      handleSendMessage(text);
      input.value = '';
    });
  }

  function handleSendMessage(text) {
    if (!chatContainer) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message chat-message--user';
    userMsg.textContent = text;
    chatContainer.appendChild(userMsg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    if (liveStatus) liveStatus.textContent = 'Querying SparkTech node…';

    const matched = responses[text] || responses['default'];

    setTimeout(() => {
      const assistMsg = document.createElement('div');
      assistMsg.className = 'chat-message chat-message--assistant';
      assistMsg.innerHTML = `
        <div class="thinking-accordion">
          <button type="button" class="thinking-header" aria-expanded="true">
            <span>
              <span class="status-dot status-dot--pulse" style="margin-right:6px;" aria-hidden="true"></span>
              ${escapeHtml(matched.title)} (${matched.latency})
            </span>
            <span class="chevron" aria-hidden="true">▾</span>
          </button>
          <div class="thinking-content">
            <pre style="margin:0; font-family:var(--font-code); font-size:12px; white-space:pre-wrap;">${escapeHtml(matched.trace)}</pre>
          </div>
        </div>
        <div class="code-snippet-box">
          <div class="code-snippet-bar">
            <span>Node Reply</span>
            <button type="button" class="btn btn--sm copy-btn" style="height:24px; padding:0 8px; font-size:11px; background:rgba(255,255,255,0.08); color:#ffffff; border:none;">Copy</button>
          </div>
          <pre class="code-snippet-pre"><code>${escapeHtml(matched.code)}</code></pre>
        </div>
      `;

      chatContainer.appendChild(assistMsg);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      if (liveStatus) liveStatus.textContent = 'Node query completed.';

      const accordionHeader = assistMsg.querySelector('.thinking-header');
      const accordionContent = assistMsg.querySelector('.thinking-content');
      accordionHeader.addEventListener('click', () => {
        const isExp = accordionHeader.getAttribute('aria-expanded') === 'true';
        accordionHeader.setAttribute('aria-expanded', String(!isExp));
        accordionContent.hidden = isExp;
      });

      const copyBtn = assistMsg.querySelector('.copy-btn');
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(matched.code).then(() => {
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => { copyBtn.textContent = orig; }, 2000);
        });
      });
    }, 350);
  }
}

/* ==========================================================================
   5. Digital Storefront Logic (Search, Filter, Quick Preview)
   ========================================================================== */
function initDigitalStore() {
  const filterButtons = document.querySelectorAll('.store-filters .filter-pill');
  const searchInput = document.getElementById('store-search-input');
  const productCards = document.querySelectorAll('.product-card');

  // Filter pills
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      applyFilters(category, searchInput ? searchInput.value.toLowerCase().trim() : '');
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeCategoryBtn = document.querySelector('.store-filters .filter-pill.active');
      const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';
      applyFilters(category, searchInput.value.toLowerCase().trim());
    });
  }

  function applyFilters(category, searchQuery) {
    let visibleCount = 0;
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const title = card.querySelector('.product-title').textContent.toLowerCase();
      const desc = card.querySelector('.product-desc').textContent.toLowerCase();

      const matchesCat = category === 'all' || cardCategory === category;
      const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const countAllElem = document.getElementById('count-all');
    if (countAllElem) countAllElem.textContent = visibleCount;
  }

  // Quick Preview modal triggers
  document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openProductPreview(id);
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });

  // Quick preview modal setup
  const previewModal = document.getElementById('preview-modal');
  const previewCloseBtn = document.getElementById('preview-modal-close');
  const modalAddBtn = document.getElementById('modal-preview-add-btn');

  if (previewCloseBtn && previewModal) {
    previewCloseBtn.addEventListener('click', () => {
      previewModal.style.display = 'none';
    });

    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) previewModal.style.display = 'none';
    });
  }

  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      const id = modalAddBtn.getAttribute('data-id');
      if (id) {
        addToCart(id);
        if (previewModal) previewModal.style.display = 'none';
      }
    });
  }
}

function openProductPreview(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const modal = document.getElementById('preview-modal');
  const title = document.getElementById('modal-preview-title');
  const cat = document.getElementById('modal-preview-cat');
  const desc = document.getElementById('modal-preview-desc');
  const price = document.getElementById('modal-preview-price');
  const token = document.getElementById('modal-preview-token');
  const featList = document.getElementById('modal-preview-features');
  const addBtn = document.getElementById('modal-preview-add-btn');

  if (title) title.textContent = product.name;
  if (cat) cat.textContent = product.catName;
  if (desc) desc.textContent = product.desc;
  if (price) price.textContent = product.price === 0 ? 'Free Download ($0.00)' : `$${product.price.toFixed(2)}`;
  if (token) token.textContent = product.tokenPrice;

  if (featList && product.features) {
    featList.innerHTML = product.features.map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('');
  }

  if (addBtn) {
    addBtn.setAttribute('data-id', product.id);
    addBtn.textContent = product.price === 0 ? 'Claim Free Asset' : 'Add to Cart';
  }

  if (modal) modal.style.display = 'flex';
}

/* ==========================================================================
   6. Shopping Cart & Checkout System
   ========================================================================== */
let cart = [];
let discountApplied = false;

function initCartDrawer() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('cart-close-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const browseStoreBtn = document.getElementById('cart-empty-browse-btn');
  const applyPromoBtn = document.getElementById('btn-apply-promo');
  const checkoutBtn = document.getElementById('btn-cart-checkout');

  function openCart() {
    if (cartDrawer && backdrop) {
      cartDrawer.setAttribute('data-open', 'true');
      backdrop.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && backdrop) {
      cartDrawer.setAttribute('data-open', 'false');
      backdrop.setAttribute('data-open', 'false');
      document.body.style.overflow = '';
    }
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);
  if (browseStoreBtn) browseStoreBtn.addEventListener('click', closeCart);

  // Apply promo code
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const codeInput = document.getElementById('promo-code-input');
      const code = codeInput ? codeInput.value.trim().toUpperCase() : '';

      if (code === 'SPARKFREE') {
        discountApplied = true;
        renderCartUI();
        alert('Promo code applied! 100% Creator discount activated.');
      } else if (code) {
        alert('Invalid promo code. Try "SPARKFREE" for demonstration discount!');
      }
    });
  }

  // Checkout handler
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty! Add products from the digital store first.');
        return;
      }

      closeCart();
      openCheckoutSuccessModal();
    });
  }

  // Checkout Success Modal triggers
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutCloseBtn = document.getElementById('checkout-modal-close');
  const downloadBtn = document.getElementById('btn-download-assets-now');

  if (checkoutCloseBtn && checkoutModal) {
    checkoutCloseBtn.addEventListener('click', () => {
      checkoutModal.style.display = 'none';
      cart = [];
      renderCartUI();
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Downloading SparkTech digital goods package: sparktech-assets-bundle.zip (Simulated)');
    });
  }
}

function addToCart(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (!existing) {
    cart.push({ ...product, quantity: 1 });
  }

  renderCartUI();

  // Visual feedback on cart button
  const cartBtn = document.getElementById('open-cart-btn');
  if (cartBtn) {
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => { cartBtn.style.transform = ''; }, 200);
  }

  // Automatically open cart drawer
  const cartDrawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (cartDrawer && backdrop) {
    cartDrawer.setAttribute('data-open', 'true');
    backdrop.setAttribute('data-open', 'true');
    document.body.style.overflow = 'hidden';
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCartUI();
}

function renderCartUI() {
  const container = document.getElementById('cart-items-container');
  const navBadge = document.getElementById('nav-cart-count');
  const drawerBadge = document.getElementById('drawer-cart-count');
  const subtotalElem = document.getElementById('cart-subtotal-val');
  const discountElem = document.getElementById('cart-discount-val');
  const totalElem = document.getElementById('cart-total-val');

  const count = cart.length;
  if (navBadge) navBadge.textContent = count;
  if (drawerBadge) drawerBadge.textContent = count;

  if (!container) return;

  if (count === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 20px; color:var(--color-muted);">
        <span style="font-size:36px; display:block; margin-bottom:12px;">🛍️</span>
        Your cart is currently empty.<br>
        Browse the <a href="#digital-store" style="color:var(--color-primary); font-weight:600;" onclick="document.getElementById('cart-drawer').setAttribute('data-open','false'); document.getElementById('cart-backdrop').setAttribute('data-open','false'); document.body.style.overflow='';">Digital Store</a> to add themes, tools, and games!
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = '$0.00';
    if (discountElem) discountElem.textContent = '-$0.00';
    if (totalElem) totalElem.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    subtotal += item.price;
    return `
      <div class="cart-item-row" data-id="${item.id}">
        <div class="cart-item-thumb">${item.icon}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${escapeHtml(item.name)}</div>
          <div class="cart-item-price">${item.price === 0 ? 'Free Tier' : `$${item.price.toFixed(2)}`} • <span style="color:var(--color-primary); font-size:11px;">${item.tokenPrice}</span></div>
        </div>
        <button type="button" class="cart-item-remove-btn" onclick="window.removeCartItem('${item.id}')" aria-label="Remove item">
          ✕
        </button>
      </div>
    `;
  }).join('');

  const discount = discountApplied ? subtotal : 0;
  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalElem) subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  if (discountElem) discountElem.textContent = `-$${discount.toFixed(2)}`;
  if (totalElem) totalElem.textContent = `$${finalTotal.toFixed(2)}`;
}

window.removeCartItem = function(id) {
  removeFromCart(id);
};

function openCheckoutSuccessModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.style.display = 'flex';
}

/* ==========================================================================
   7. Mobile Themes & Phone Simulator
   ========================================================================== */
function initMobileThemesStudio() {
  const phoneScreen = document.getElementById('live-phone-screen');
  const viewLockBtn = document.getElementById('btn-view-lock');
  const viewHomeBtn = document.getElementById('btn-view-home');
  const lockView = document.getElementById('phone-view-lock');
  const homeView = document.getElementById('phone-view-home');
  const themePickBtns = document.querySelectorAll('.theme-pick-btn');
  const titleElem = document.getElementById('active-theme-title');
  const descElem = document.getElementById('active-theme-desc');
  const addThemeBtn = document.getElementById('btn-theme-action-add');
  const previewThemeBtn = document.getElementById('btn-theme-action-preview');

  // Live time on phone lockscreen
  function updatePhoneClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;

    const lockTime = document.getElementById('phone-lock-time');
    const statusClock = document.getElementById('phone-status-clock');
    if (lockTime) lockTime.textContent = timeStr;
    if (statusClock) statusClock.textContent = timeStr;
  }
  updatePhoneClock();
  setInterval(updatePhoneClock, 10000);

  // Switch between Lock Screen & Home Screen
  if (viewLockBtn && viewHomeBtn && lockView && homeView) {
    viewLockBtn.addEventListener('click', () => {
      viewLockBtn.classList.add('active');
      viewHomeBtn.classList.remove('active');
      lockView.hidden = false;
      homeView.hidden = true;
    });

    viewHomeBtn.addEventListener('click', () => {
      viewHomeBtn.classList.add('active');
      viewLockBtn.classList.remove('active');
      lockView.hidden = true;
      homeView.hidden = false;
    });
  }

  // Theme preset picker
  themePickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themePickBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const theme = btn.getAttribute('data-theme');
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      const prodId = btn.getAttribute('data-id') || 'p2';

      if (phoneScreen) {
        phoneScreen.className = `phone-screen phone-theme--${theme}`;
      }

      if (titleElem) titleElem.textContent = title;
      if (descElem) descElem.textContent = desc;

      if (addThemeBtn) {
        addThemeBtn.setAttribute('data-id', prodId);
        addThemeBtn.onclick = () => addToCart(prodId);
      }

      if (previewThemeBtn) {
        previewThemeBtn.setAttribute('data-id', prodId);
        previewThemeBtn.onclick = () => openProductPreview(prodId);
      }
    });
  });

  if (addThemeBtn) {
    addThemeBtn.onclick = () => addToCart('p2');
  }
  if (previewThemeBtn) {
    previewThemeBtn.onclick = () => openProductPreview('p2');
  }
}

/* ==========================================================================
   8. In-Browser Mini-Game: Spark Neural Matrix (with Web Audio Synthesizer)
   ========================================================================== */
function initArcadeMiniGame() {
  const startBtn = document.getElementById('btn-start-game');
  const overlay = document.getElementById('arcade-overlay');
  const overlayTitle = document.getElementById('overlay-title');
  const overlayInstructions = document.getElementById('overlay-instructions');
  const nodeButtons = document.querySelectorAll('.neural-node-btn');
  const timeVal = document.getElementById('game-time-val');
  const scoreVal = document.getElementById('game-score-val');
  const comboVal = document.getElementById('game-combo-val');
  const tokensVal = document.getElementById('game-tokens-val');
  const soundToggleBtn = document.getElementById('game-sound-toggle');
  const highscoreVal = document.getElementById('game-highscore-val');
  const unclaimedTokensVal = document.getElementById('game-unclaimed-tokens');
  const claimTokensBtn = document.getElementById('btn-claim-game-tokens');

  let audioEnabled = true;
  let audioCtx = null;
  let gameRunning = false;
  let score = 0;
  let combo = 1;
  let earnedTokens = 0;
  let timeLeft = 30;
  let gameTimer = null;
  let activeIndex = -1;
  let nodePulseTimer = null;
  let highscore = parseInt(localStorage.getItem('spark_highscore') || '1840', 10);

  if (highscoreVal) highscoreVal.textContent = highscore.toLocaleString('en-US');

  // Web Audio Synthesizer for 0-latency arcade sound FX
  function playSynthTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
    if (!audioEnabled) return;
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio fallback silent
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      soundToggleBtn.textContent = audioEnabled ? '🔊 Sound ON' : '🔇 Muted';
      if (audioEnabled) playSynthTone(580, 'sine', 0.1);
    });
  }

  function pickRandomNode() {
    if (!gameRunning) return;
    nodeButtons.forEach(btn => btn.classList.remove('active-target'));

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * nodeButtons.length);
    } while (newIndex === activeIndex && nodeButtons.length > 1);

    activeIndex = newIndex;
    nodeButtons[activeIndex].classList.add('active-target');

    // If not clicked within timeout, drop combo
    clearTimeout(nodePulseTimer);
    nodePulseTimer = setTimeout(() => {
      if (gameRunning) {
        combo = 1;
        if (comboVal) comboVal.textContent = 'x1';
        pickRandomNode();
      }
    }, Math.max(700, 1500 - (score * 8)));
  }

  function startGame() {
    gameRunning = true;
    score = 0;
    combo = 1;
    earnedTokens = 0;
    timeLeft = 30;

    if (overlay) overlay.style.display = 'none';
    if (scoreVal) scoreVal.textContent = '0';
    if (comboVal) comboVal.textContent = 'x1';
    if (tokensVal) tokensVal.textContent = '0.00';
    if (timeVal) timeVal.textContent = '30s';

    playSynthTone(440, 'triangle', 0.2);
    setTimeout(() => playSynthTone(880, 'triangle', 0.25), 150);

    pickRandomNode();

    clearInterval(gameTimer);
    gameTimer = setInterval(() => {
      timeLeft--;
      if (timeVal) timeVal.textContent = `${timeLeft}s`;

      if (timeLeft <= 5 && timeLeft > 0) {
        playSynthTone(300, 'sine', 0.08, 0.08);
      }

      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    gameRunning = false;
    clearInterval(gameTimer);
    clearTimeout(nodePulseTimer);
    nodeButtons.forEach(btn => btn.classList.remove('active-target'));

    playSynthTone(220, 'sawtooth', 0.4);

    if (score > highscore) {
      highscore = score;
      localStorage.setItem('spark_highscore', String(highscore));
      if (highscoreVal) highscoreVal.textContent = highscore.toLocaleString('en-US');
    }

    if (unclaimedTokensVal) {
      const current = parseFloat(unclaimedTokensVal.textContent || '0');
      const updated = current + earnedTokens;
      unclaimedTokensVal.textContent = updated.toFixed(2);
    }

    if (overlay) {
      overlay.style.display = 'flex';
      if (overlayTitle) overlayTitle.textContent = `Challenge Complete! Score: ${score.toLocaleString('en-US')}`;
      if (overlayInstructions) {
        overlayInstructions.innerHTML = `
          Magnificent reflex run! You earned <strong>+${earnedTokens.toFixed(2)} $SPARK</strong> reward tokens.
          <br>Max combo reached: <strong>x${combo}</strong> • High Score: <strong>${highscore.toLocaleString('en-US')}</strong>
        `;
      }
      if (startBtn) startBtn.textContent = 'Play Again';
    }
  }

  if (startBtn) startBtn.addEventListener('click', startGame);

  nodeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!gameRunning) return;
      const index = parseInt(btn.getAttribute('data-index'), 10);

      if (index === activeIndex) {
        // Correct node clicked!
        score += 10 * combo;
        earnedTokens += 0.05 * combo;
        combo = Math.min(10, combo + 1);

        btn.classList.add('success-flash');
        setTimeout(() => btn.classList.remove('success-flash'), 180);

        playSynthTone(500 + (combo * 70), 'sine', 0.09, 0.2);

        if (scoreVal) scoreVal.textContent = score.toLocaleString('en-US');
        if (comboVal) comboVal.textContent = `x${combo}`;
        if (tokensVal) tokensVal.textContent = earnedTokens.toFixed(2);

        pickRandomNode();
      } else {
        // Wrong node penalty
        combo = 1;
        if (comboVal) comboVal.textContent = 'x1';
        playSynthTone(150, 'sawtooth', 0.12, 0.1);
      }
    });
  });

  if (claimTokensBtn) {
    claimTokensBtn.addEventListener('click', () => {
      const unclaimed = parseFloat(unclaimedTokensVal ? unclaimedTokensVal.textContent : '0') || 0;
      if (unclaimed <= 0) {
        alert('Play Spark Neural Matrix to earn $SPARK tokens before claiming!');
      } else {
        alert(`Successfully claimed ${unclaimed.toFixed(2)} $SPARK to your Web3 wallet address!`);
        if (unclaimedTokensVal) unclaimedTokensVal.textContent = '0.00';
      }
    });
  }
}

/* ==========================================================================
   9. Quantum Clicker Interactive Mini-Game
   ========================================================================== */
function initQuantumClicker() {
  const btn = document.getElementById('quick-clicker-btn');
  let weightTrained = 0;

  if (btn) {
    btn.addEventListener('click', () => {
      weightTrained++;
      btn.textContent = `⚡ Weight #${weightTrained} Trained!`;
      btn.style.transform = 'scale(0.97)';
      setTimeout(() => { btn.style.transform = ''; }, 100);

      if (weightTrained % 10 === 0) {
        alert(`Milestone achieved: ${weightTrained} decentralized model weights trained! +1.00 $SPARK earned.`);
      }
    });
  }
}

/* ==========================================================================
   10. Decentralized AI Compute & Node Calculator
   ========================================================================== */
function initComputeCalculator() {
  const selectElem = document.getElementById('compute-gpu-select');
  const slider = document.getElementById('compute-hours-slider');
  const hoursDisplay = document.getElementById('compute-hours-display');
  const dailyElem = document.getElementById('compute-daily-reward');
  const monthlyElem = document.getElementById('compute-monthly-reward');
  const usdElem = document.getElementById('compute-monthly-usd');

  const baseRatePerHour = 1.04; // $SPARK tokens
  const tokenPriceUsd = 0.80;

  function updateComputeCalculations() {
    const gpuMultiplier = parseFloat(selectElem ? selectElem.value : '1.0') || 1.0;
    const hours = parseInt(slider ? slider.value : '12', 10) || 12;

    if (hoursDisplay) hoursDisplay.textContent = `${hours} Hours / Day`;

    const dailyTokens = hours * baseRatePerHour * gpuMultiplier;
    const monthlyTokens = dailyTokens * 30;
    const monthlyUsd = monthlyTokens * tokenPriceUsd;

    if (dailyElem) dailyElem.textContent = `${dailyTokens.toFixed(2)} $SPARK`;
    if (monthlyElem) monthlyElem.textContent = `${monthlyTokens.toFixed(2)} $SPARK`;
    if (usdElem) usdElem.textContent = `≈ $${monthlyUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
  }

  if (selectElem) selectElem.addEventListener('change', updateComputeCalculations);
  if (slider) slider.addEventListener('input', updateComputeCalculations);

  updateComputeCalculations();
}

/* ==========================================================================
   11. Developer API Code Playground
   ========================================================================== */
function initApiCodePlayground() {
  const langButtons = document.querySelectorAll('.code-lang-btn');
  const codeDisplay = document.getElementById('api-code-display');
  const copyBtn = document.getElementById('api-copy-btn');
  const runBtn = document.getElementById('api-run-btn');
  const apiStatus = document.getElementById('api-status-announcer');

  const snippets = {
    javascript: `// Initialize connection to SparkTech Decentralized AI Lattice
import { SparkAI } from '@sparktech/sdk';

const client = new SparkAI({
  endpoint: 'https://api.sparktechailabs.com/v1',
  apiKey: process.env.SPARKTECH_KEY
});

// Run distributed inference across peer worker nodes
const response = await client.chat.complete({
  model: 'spark-neural-7b',
  prompt: 'Generate cyberpunk mobile icon specification',
  temperature: 0.7
});

console.log(response.choices[0].text);`,

    python: `# Query SparkTech AI Labs via Python
import sparktech

client = sparktech.Client(
    base_url="https://api.sparktechailabs.com/v1",
    api_key="sk-spark-live-production"
)

# Fetch verified digital store assets
assets = client.store.list_products(category="themes")
for asset in assets:
    print(f"Product: {asset.title} | Price: {asset.price_usd}")`,

    curl: `curl -X POST https://api.sparktechailabs.com/v1/inference \\
  -H "Authorization: Bearer sk-spark-demo" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "spark-neural-7b",
    "prompt": "Optimize OLED wallpaper color palette",
    "nodes": 4
  }'`
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      langButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const lang = btn.getAttribute('data-lang');
      if (codeDisplay && snippets[lang]) {
        codeDisplay.textContent = snippets[lang];
      }
    });
  });

  if (copyBtn && codeDisplay) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        if (apiStatus) apiStatus.textContent = 'API snippet copied to clipboard.';
        setTimeout(() => { copyBtn.textContent = orig; }, 2000);
      });
    });
  }

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runBtn.disabled = true;
      runBtn.textContent = 'Querying Node Lattice…';
      if (apiStatus) apiStatus.textContent = 'Sending request to SparkTech decentralized endpoints…';

      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.textContent = '200 OK (0.42s latency)';
        if (apiStatus) apiStatus.textContent = 'SparkTech node returned verified response in 0.42 seconds.';
        setTimeout(() => { runBtn.textContent = 'Test API Call'; }, 3000);
      }, 650);
    });
  }
}

/* ==========================================================================
   12. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const questionButtons = document.querySelectorAll('.faq-question-btn');

  questionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);

      // Close other panels
      questionButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherBtn.getAttribute('aria-controls');
          const otherPanel = document.getElementById(otherPanelId);
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) panel.hidden = isExpanded;
    });
  });
}

/* ==========================================================================
   13. Web3 Wallet Connection Modal & State
   ========================================================================== */
function initWalletModal() {
  const modal = document.getElementById('wallet-modal');
  const openButtons = document.querySelectorAll('.open-wallet-modal-btn');
  const closeBtn = document.getElementById('wallet-modal-close');
  const walletOptions = document.querySelectorAll('.wallet-option-btn');
  const walletStatusAnnouncer = document.getElementById('wallet-status-announcer');
  const navWalletContainer = document.getElementById('nav-wallet-container');

  if (!modal) return;

  function openModal() {
    modal.style.display = 'flex';
    modal.setAttribute('data-open', 'true');
    if (closeBtn) closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('data-open', 'false');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  });

  walletOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const walletName = opt.getAttribute('data-wallet') || 'MetaMask';
      opt.style.opacity = '0.6';
      opt.innerHTML = `<span>Connecting to ${walletName}…</span><span class="status-dot status-dot--pulse"></span>`;

      setTimeout(() => {
        closeModal();
        opt.style.opacity = '1';
        opt.innerHTML = `<span class="wallet-option-info">${walletName}</span><span>→</span>`;

        if (navWalletContainer) {
          navWalletContainer.innerHTML = `
            <div class="wallet-connected-pill" id="connected-wallet-pill" title="Click to disconnect">
              <span class="status-dot"></span>
              <span class="tabular" style="font-weight:600;">0x8a9...789</span>
              <span class="badge-coral" style="font-size:10px; padding:2px 6px;">350 $SPARK</span>
            </div>
          `;

          const pill = document.getElementById('connected-wallet-pill');
          if (pill) {
            pill.addEventListener('click', () => {
              if (confirm('Disconnect wallet 0x8a9...789?')) {
                resetWalletNav();
              }
            });
          }
        }

        if (walletStatusAnnouncer) {
          walletStatusAnnouncer.textContent = `Connected to ${walletName} with address 0x8a9...789`;
        }
      }, 500);
    });
  });

  function resetWalletNav() {
    if (navWalletContainer) {
      navWalletContainer.innerHTML = `
        <button type="button" class="btn btn--secondary open-wallet-modal-btn" id="connect-wallet-nav-btn">
          <span class="status-dot" style="margin-right:6px;"></span>
          Connect Wallet
        </button>
      `;
      const newBtn = document.getElementById('connect-wallet-nav-btn');
      if (newBtn) newBtn.addEventListener('click', openModal);
    }
  }
}

/* ==========================================================================
   14. Copy Contract Address
   ========================================================================== */
function initContractCopy() {
  const copyButtons = document.querySelectorAll('.copy-contract-btn');
  const copyAnnouncer = document.getElementById('copy-status-announcer');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const address = btn.getAttribute('data-contract') || '0x8a91C2B5d4e3F1092837465abCdeFF0123456789';
      navigator.clipboard.writeText(address).then(() => {
        const origText = btn.innerHTML;
        btn.textContent = 'Copied!';
        if (copyAnnouncer) copyAnnouncer.textContent = 'Contract address copied to clipboard.';

        setTimeout(() => { btn.innerHTML = origText; }, 2200);
      });
    });
  });
}

/* ==========================================================================
   15. Live Ecosystem Metrics Counter
   ========================================================================== */
function initLiveCounters() {
  const downloadsElem = document.getElementById('stat-total-downloads');
  const gamesElem = document.getElementById('stat-total-games');

  let dlCount = 54320;
  let gmCount = 168940;

  setInterval(() => {
    dlCount += Math.floor(Math.random() * 2) + 1;
    gmCount += Math.floor(Math.random() * 4) + 1;

    if (downloadsElem) downloadsElem.textContent = dlCount.toLocaleString('en-US');
    if (gamesElem) gamesElem.textContent = gmCount.toLocaleString('en-US');
  }, 4000);
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
