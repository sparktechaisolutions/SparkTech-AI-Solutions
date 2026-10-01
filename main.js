/**
 * Nexis Web3 Platform Application Logic
 * Adheres to Vercel Web Interface Guidelines:
 * - Focus management & accessible ARIA live announcements
 * - Non-custodial Web3 state simulation (Wallet modal, Staking calculator, RPC playground)
 * - Micro-interactions, background network canvas, and copy handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initMockupTabs();
  initMockupNodeTerminal();
  initStakingCalculators();
  initContractCopy();
  initFaqAccordion();
  initApiCodePlayground();
  initWalletModal();
  initLiveTransactionsCounter();
});

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

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
      closeMenu();
    }
  });

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   3. Web3 Station Mockup Tabs
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
}

/* ==========================================================================
   4. Web3 Node Terminal & Interactive Prompt Chips
   ========================================================================== */
function initMockupNodeTerminal() {
  const form = document.getElementById('mockup-chat-form');
  const input = document.getElementById('mockup-chat-input');
  const chatContainer = document.getElementById('chat-messages-container');
  const chips = document.querySelectorAll('.prompt-chip');
  const liveStatus = document.getElementById('chat-status-announcer');

  const responses = {
    "Simulate 10,000 $NEX Staking (12.8% APY)": {
      title: "Staking Delegation Simulation",
      thoughtTime: "0.2s consensus verification",
      trace: "• Validating stake parameters against epoch #8,419\n• Selected Node: Nexis Primary Validator (0% commission promotion)\n• Estimated Annual Yield: 1,280.00 $NEX (~$2,355.20 USD)\n• Slashing Risk: Insured via Community Safety Fund pool",
      code: `// Simulation Output
{
  "stakedAmount": "10000.00 NEX",
  "validatorNode": "0x4A91...7F02",
  "currentAPY": "12.8%",
  "dailyReward": "3.506 NEX",
  "monthlyReward": "105.20 NEX",
  "unlockPeriod": "Instant delegated, 7-day unbonding",
  "status": "Ready to sign"
}`
    },
    "View Genesis Block #0": {
      title: "Genesis Block Telemetry",
      thoughtTime: "Query: blockHeight(0)",
      trace: "• Hash: 0x8a91c2b5d4e3f1092837465abcdeff0123456789abcdef0123456789abcdef01\n• Timestamp: 2026-01-15T00:00:00Z\n• Genesis Allocations: 500,000,000 NEX\n• Consensus Engine: CometBFT-v0.38 / Nexis-EVM",
      code: `// Nexis Genesis Metadata
{
  "chainId": 9182,
  "consensus": "PoS-Byzantine-Fault-Tolerant",
  "blockGasLimit": "30000000",
  "validatorsCount": 100,
  "verified": true
}`
    },
    "Verify Contract Audit on GitHub": {
      title: "Security Audit Records",
      thoughtTime: "Checking immutable audit hashes",
      trace: "• CertiK Formal Verification: PASSED (Zero Critical, Zero High)\n• Trail of Bits Architecture Assessment: PASSED\n• Bytecode Hash Match: 100% Verified against GitHub tag v1.2.0-mainnet",
      code: `// Security Attestation
{
  "contract": "NexisCoreToken.sol",
  "address": "0x71C405f6630fF08d748FE539828f789e5Ab9D81a",
  "auditProvider": "CertiK Security Team",
  "certificateId": "CERTIK-NEX-2026-A1",
  "repository": "github.com/nexis-network/nexis-contracts"
}`
    },
    "default": {
      title: "Node CLI Execution",
      thoughtTime: "RPC node reply",
      trace: "• Processing decentralized node command\n• Verified signature and gas estimate\n• Return status: Success",
      code: `// Nexis Node RPC Result
{
  "status": "success",
  "network": "Nexis Mainnet Beta",
  "blockHeight": 4819204,
  "avgGas": "< 0.0008 USD",
  "activeValidators": 420
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

    if (liveStatus) liveStatus.textContent = 'Querying Nexis node…';

    const matched = responses[text] || responses['default'];

    setTimeout(() => {
      const assistMsg = document.createElement('div');
      assistMsg.className = 'chat-message chat-message--assistant';
      assistMsg.innerHTML = `
        <div class="thinking-accordion">
          <button type="button" class="thinking-header" aria-expanded="true">
            <span>
              <span class="status-dot status-dot--pulse" style="margin-right:6px;" aria-hidden="true"></span>
              ${escapeHtml(matched.title)} (${matched.thoughtTime})
            </span>
            <span class="chevron" aria-hidden="true">▾</span>
          </button>
          <div class="thinking-content">
            <pre style="margin:0; font-family:var(--font-code); font-size:12px; white-space:pre-wrap;">${escapeHtml(matched.trace)}</pre>
          </div>
        </div>
        <div class="code-snippet-box">
          <div class="code-snippet-bar">
            <span>JSON-RPC Response</span>
            <button type="button" class="btn btn--sm copy-btn" style="height:24px; padding:0 8px; font-size:11px; background:rgba(255,255,255,0.08); color:var(--color-ink); border:none;">Copy</button>
          </div>
          <pre class="code-snippet-pre"><code>${escapeHtml(matched.code)}</code></pre>
        </div>
      `;

      chatContainer.appendChild(assistMsg);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      if (liveStatus) liveStatus.textContent = 'Nexis node query completed.';

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
    }, 400);
  }
}

/* ==========================================================================
   5. Staking & Rewards Calculator
   ========================================================================== */
function initStakingCalculators() {
  const amountSlider = document.getElementById('stake-amount-slider');
  const amountInput = document.getElementById('stake-amount-input');
  const apyRate = 0.128; // 12.8% estimated APY

  const dailyElem = document.getElementById('calc-daily-reward');
  const monthlyElem = document.getElementById('calc-monthly-reward');
  const annualElem = document.getElementById('calc-annual-reward');
  const annualUsdElem = document.getElementById('calc-annual-usd');
  const tokenPriceUsd = 1.84;

  function updateRewards(val) {
    const amount = parseFloat(val) || 0;
    const annualReward = amount * apyRate;
    const monthlyReward = annualReward / 12;
    const dailyReward = annualReward / 365;
    const annualUsd = annualReward * tokenPriceUsd;

    if (dailyElem) dailyElem.textContent = dailyReward.toFixed(2) + ' NEX';
    if (monthlyElem) monthlyElem.textContent = monthlyReward.toFixed(2) + ' NEX';
    if (annualElem) annualElem.textContent = annualReward.toFixed(2) + ' NEX';
    if (annualUsdElem) annualUsdElem.textContent = '≈ $' + annualUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
  }

  if (amountSlider && amountInput) {
    amountSlider.addEventListener('input', (e) => {
      amountInput.value = e.target.value;
      updateRewards(e.target.value);
    });

    amountInput.addEventListener('input', (e) => {
      amountSlider.value = e.target.value;
      updateRewards(e.target.value);
    });

    // Initial calculation
    updateRewards(amountInput.value || 5000);
  }
}

/* ==========================================================================
   6. Copy Contract Address
   ========================================================================== */
function initContractCopy() {
  const copyButtons = document.querySelectorAll('.copy-contract-btn');
  const copyAnnouncer = document.getElementById('copy-status-announcer');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const address = btn.getAttribute('data-contract') || '0x71C405f6630fF08d748FE539828f789e5Ab9D81a';
      navigator.clipboard.writeText(address).then(() => {
        const origText = btn.innerHTML;
        btn.textContent = 'Copied!';
        if (copyAnnouncer) copyAnnouncer.textContent = 'Contract address copied to clipboard.';

        setTimeout(() => {
          btn.innerHTML = origText;
        }, 2200);
      });
    });
  });
}

/* ==========================================================================
   7. FAQ Accordion Components
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

      // Toggle current
      btn.setAttribute('aria-expanded', String(!isExpanded));
      if (panel) {
        panel.hidden = isExpanded;
      }
    });
  });
}

/* ==========================================================================
   8. Developer API Code Playground (viem, Python, cURL)
   ========================================================================== */
function initApiCodePlayground() {
  const langButtons = document.querySelectorAll('.code-lang-btn');
  const codeDisplay = document.getElementById('api-code-display');
  const copyBtn = document.getElementById('api-copy-btn');
  const runBtn = document.getElementById('api-run-btn');
  const apiStatus = document.getElementById('api-status-announcer');

  const snippets = {
    viem: `import { createPublicClient, http } from 'viem';
import { nexisMainnet } from 'nexis-viem-chains';

// Connect to high-speed Nexis RPC endpoint
const client = createPublicClient({
  chain: nexisMainnet,
  transport: http('https://rpc.nexis.network/v1')
});

// Fetch current validator block and gas metrics
const blockNumber = await client.getBlockNumber();
const gasPrice = await client.getGasPrice();

console.log(\`Nexis Block: \${blockNumber} | Gas: \${gasPrice} wei\`);`,

    python: `from web3 import Web3

# Initialize connection to Nexis Network RPC
w3 = Web3(Web3.HTTPProvider("https://rpc.nexis.network/v1"))

if w3.is_connected():
    latest_block = w3.eth.get_block('latest')
    print(f"Connected to Nexis L1. Block #{latest_block.number}")
    print(f"Active Gas Limit: {latest_block.gasLimit}")
else:
    print("Unable to reach Nexis node.")`,

    curl: `curl -X POST https://rpc.nexis.network/v1 \\
  -H "Content-Type: application/json" \\
  --data '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
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
        if (apiStatus) apiStatus.textContent = 'Code copied to clipboard.';
        setTimeout(() => { copyBtn.textContent = orig; }, 2000);
      });
    });
  }

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runBtn.disabled = true;
      runBtn.textContent = 'Querying Node…';
      if (apiStatus) apiStatus.textContent = 'Executing JSON-RPC request to Nexis Mainnet…';

      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.textContent = '200 OK (0.84ms)';
        if (apiStatus) apiStatus.textContent = 'RPC returned block response in 0.84 milliseconds.';
        setTimeout(() => {
          runBtn.textContent = 'Simulate RPC Call';
        }, 3000);
      }, 700);
    });
  }
}

/* ==========================================================================
   9. Web3 Wallet Connection Modal & State Management
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

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') {
      closeModal();
    }
  });

  // Handle wallet selection
  walletOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const walletName = opt.getAttribute('data-wallet') || 'MetaMask';
      opt.style.opacity = '0.6';
      opt.innerHTML = `<span>Connecting to ${walletName}…</span><span class="status-dot status-dot--pulse"></span>`;

      setTimeout(() => {
        closeModal();
        opt.style.opacity = '1';
        opt.innerHTML = `<span class="wallet-option-info">${walletName}</span><span>→</span>`;

        // Update nav to connected state
        if (navWalletContainer) {
          navWalletContainer.innerHTML = `
            <div class="wallet-connected-pill" id="connected-wallet-pill" title="Click to disconnect">
              <span class="status-dot"></span>
              <span class="tabular" style="font-weight:600;">0x71C...9D81</span>
              <span class="badge-cyan" style="font-size:10px;">4,850 NEX</span>
            </div>
          `;

          const pill = document.getElementById('connected-wallet-pill');
          if (pill) {
            pill.addEventListener('click', () => {
              if (confirm('Disconnect wallet 0x71C...9D81?')) {
                resetWalletNav();
              }
            });
          }
        }

        if (walletStatusAnnouncer) {
          walletStatusAnnouncer.textContent = `Connected to ${walletName} with address 0x71C...9D81`;
        }
      }, 600);
    });
  });

  function resetWalletNav() {
    if (navWalletContainer) {
      navWalletContainer.innerHTML = `
        <button type="button" class="btn btn--secondary open-wallet-modal-btn" id="connect-wallet-nav-btn">
          <span class="status-dot" style="margin-right:4px;"></span>
          Connect Wallet
        </button>
      `;
      const newBtn = document.getElementById('connect-wallet-nav-btn');
      if (newBtn) newBtn.addEventListener('click', openModal);
    }
  }
}

/* ==========================================================================
   10. Live Platform Statistics Counter (Subtle increment)
   ========================================================================== */
function initLiveTransactionsCounter() {
  const txElem = document.getElementById('stat-total-txs');
  if (!txElem) return;

  let currentTx = 28491204;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 4) + 1;
    currentTx += delta;
    txElem.textContent = currentTx.toLocaleString('en-US');
  }, 2800);
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
