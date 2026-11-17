// ==========================================================================
// OOPS PRACTICAL CENTRE — SENIOR DEV ORANGE CAT 🐈
// Interactive Logic & Self-Contained Vector Doodle Engine
// ==========================================================================

let currentExperiment = null;
let activeCategory = 'all';
let searchQuery = '';

// Hinglish Senior Dev Sigma Cat Dialogues (Java & OOPs Edition)
const HINGLISH_MEME_QUOTES = [
  "Maine code review kiya... LGTM (Looks Garbage To Me)! 😼",
  "Main 7 saal se Senior Architect hoon, tu semicolon bhool gaya? 👓",
  "NullPointerException: Teri kismat null hai, variable nahi. 💀",
  "Chai pee li? Ab chup chap OOPs code copy kar aur nikal.",
  "Git commit -m 'Fixed bug by creating 10 more bugs' — Tu hi hai na?",
  "System.out.println(\"Padh le bhai viva hai\"); 🐾",
  "Main billi hoon, par mera code production pe bina crash ke chalta hai. 👔",
  "Inheritance samjha nahi, direct multi-level chapri ban gaya!",
  "Abstract class ki tarah ban: Simple, elegant, bina faltu body ke.",
  "Tera code dekh ke JVM ne voluntarily dump create kar liya.",
  "Le garreb, tu bhi kya aish karega! 😼",
  "Human detected. Intelligence not detected.",
  "Polymorphism hai: Ek roop, anek kaam!"
];

// DOM Elements
const homeView = document.getElementById('home-view');
const codeView = document.getElementById('code-view');
const experimentsContainer = document.getElementById('experiments-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.neu-filter-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Code View Elements
const backBtn = document.getElementById('back-btn');
const expNumEl = document.getElementById('code-exp-num');
const expCatEl = document.getElementById('code-exp-cat');
const expTitleEl = document.getElementById('code-exp-title');
const expAimEl = document.getElementById('code-exp-aim');
const expObjEl = document.getElementById('code-exp-obj');
const codeContainer = document.getElementById('code-content');
const lineNumbersContainer = document.getElementById('line-numbers');
const fileNameEl = document.getElementById('file-name');
const locCountEl = document.getElementById('loc-count');
const bigCopyBtn = document.getElementById('big-copy-btn');
const downloadBtn = document.getElementById('download-btn');
const prevExpBtn = document.getElementById('prev-exp-btn');
const nextExpBtn = document.getElementById('next-exp-btn');
const outputSection = document.getElementById('output-section');
const outputBody = document.getElementById('output-body');
const outputHeader = document.getElementById('output-header');

// Dynamic Mascot & Companion Elements
const heroCatMascot = document.getElementById('hero-mascot-card');
const heroCatBubble = document.getElementById('hero-cat-bubble');
const companionCatBox = document.getElementById('companion-cat-box');
const companionCatQuote = document.getElementById('companion-cat-quote');

// Sound synthesis stub
function playCatChirp() {
  // Peaceful experience
}

// ==========================================================================
// Initialize Self-Contained Vector Doodle Artwork
// ==========================================================================
function initVectorArtwork() {
  if (typeof CAT_ART === 'undefined') return;

  const splashWrapper = document.getElementById('splash-img-wrapper');
  if (splashWrapper && CAT_ART.splash) {
    splashWrapper.innerHTML = CAT_ART.splash;
  }

  const headerAvatar = document.getElementById('header-avatar');
  if (headerAvatar && CAT_ART.logo) {
    headerAvatar.innerHTML = CAT_ART.logo;
  }

  const heroAvatar = document.getElementById('hero-cat-avatar');
  if (heroAvatar && CAT_ART.heroMascot) {
    heroAvatar.innerHTML = CAT_ART.heroMascot;
  }

  const companionAvatar = document.getElementById('companion-cat-avatar');
  if (companionAvatar && CAT_ART.companion) {
    companionAvatar.innerHTML = CAT_ART.companion;
  }

  const toastMini = document.getElementById('toast-cat-mini');
  if (toastMini && CAT_ART.logo) {
    toastMini.innerHTML = CAT_ART.logo;
  }
}

// ==========================================================================
// Java Syntax Highlighter (Clean, safe, client-side regex engine)
// ==========================================================================
function highlightJava(code) {
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokens = [];

  // Multi-line Comments
  escaped = escaped.replace(/\/\*[\s\S]*?\*\//g, match => {
    tokens.push({ type: 'comment', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Single-line Comments
  escaped = escaped.replace(/\/\/.*$/gm, match => {
    tokens.push({ type: 'comment', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Strings
  escaped = escaped.replace(/"(\\.|[^"\\])*"/g, match => {
    tokens.push({ type: 'string', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Chars
  escaped = escaped.replace(/'(\\.|[^'\\])'/g, match => {
    tokens.push({ type: 'string', value: match });
    return `___TOKEN_${tokens.length - 1}___`;
  });

  // Package & Import Directives
  escaped = escaped.replace(/(^\s*(?:package|import)\s+[^;\n]+;)/gm, 
    '<span class="token-directive">$1</span>');

  // Annotations
  escaped = escaped.replace(/(@\w+)/g, '<span class="token-directive">$1</span>');

  // Java Reserved Keywords
  const keywords = [
    'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class',
    'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final',
    'finally', 'float', 'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int',
    'interface', 'long', 'native', 'new', 'package', 'private', 'protected', 'public',
    'return', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this',
    'throw', 'throws', 'transient', 'try', 'void', 'volatile', 'while', 'record', 'var'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  escaped = escaped.replace(keywordRegex, '<span class="token-keyword">$1</span>');

  // Java Types & Key Standard Classes
  const types = [
    'String', 'System', 'Scanner', 'Math', 'PrintStream', 'Object', 'Exception',
    'ArithmeticException', 'InputMismatchException', 'ArrayIndexOutOfBoundsException',
    'NullPointerException', 'Double', 'Integer', 'Long', 'Boolean', 'Character', 'Float',
    'Bank', 'SBI', 'ICICI', 'AXIS', 'Shape', 'Rect', 'Triangle', 'Circle', 'Ellipse',
    'FinalClass', 'Welcome', 'ArithmeticOperator', 'Driver', 'StringProgram', 'mathprogram',
    'areaMethodOverloading', 'areaConstructor', 'ArrayProgram', 'InheritanceDemo',
    'Inheritance', 'FinalProgram', 'InterfaceProgram', 'ExceptionHandling'
  ];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  escaped = escaped.replace(typeRegex, '<span class="token-type">$1</span>');

  // Numbers (Integers, Floats, Hex)
  escaped = escaped.replace(/\b(\d+(?:\.\d+)?(?:[fFdDlL])?|0x[0-9a-fA-F]+)\b/g, '<span class="token-number">$1</span>');

  // System.out call accent
  escaped = escaped.replace(/\b(System\.out\.(?:println|print|printf))\b/g, '<span class="token-keyword">$1</span>');

  // Restore protected tokens
  escaped = escaped.replace(/___TOKEN_(\d+)___/g, (_, index) => {
    const token = tokens[parseInt(index, 10)];
    return `<span class="token-${token.type}">${token.value}</span>`;
  });

  return escaped;
}

function generateLineNumbers(code) {
  const lineCount = code.split('\n').length;
  let numbers = '';
  for (let i = 1; i <= lineCount; i++) {
    numbers += `${i}\n`;
  }
  return { html: numbers, count: lineCount };
}

// ==========================================================================
// Render Home View Cards (Doodle Editorial Cards with Vector Stamps)
// ==========================================================================
function renderExperiments() {
  const query = searchQuery.toLowerCase().trim();

  const filtered = EXPERIMENTS.filter(exp => {
    const key = exp.categoryKey || '';
    const catText = exp.category.toLowerCase();
    
    let matchesCat = (activeCategory === 'all');
    if (activeCategory === 'oop') {
      matchesCat = (key === 'oop' || catText.includes('oop') || catText.includes('inheritance') || catText.includes('constructor') || catText.includes('abstract') || catText.includes('interface'));
    } else if (activeCategory === 'core') {
      matchesCat = (key === 'core' || catText.includes('core') || catText.includes('operator') || catText.includes('array'));
    } else if (activeCategory === 'strings') {
      matchesCat = (key === 'strings' || catText.includes('string') || catText.includes('math'));
    } else if (activeCategory === 'exceptions') {
      matchesCat = (key === 'exceptions' || catText.includes('exception') || catText.includes('package'));
    }

    const matchesSearch = !query || 
      exp.title.toLowerCase().includes(query) ||
      exp.number.toLowerCase().includes(query) ||
      exp.shortNumber.toLowerCase().includes(query) ||
      exp.category.toLowerCase().includes(query) ||
      (exp.aim && exp.aim.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    const emptySvg = (typeof CAT_ART !== 'undefined' && CAT_ART.empty) ? CAT_ART.empty : '';
    experimentsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; background: var(--color-warm-white); border-radius: var(--radius-xl); border: 3px solid var(--color-border-ink); box-shadow: var(--shadow-sketch-md);">
        <div style="display: flex; justify-content: center; margin-bottom: 1.25rem;">
          ${emptySvg}
        </div>
        <div style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; color: var(--color-deep-orange); margin-bottom: 0.5rem;">
          404: Teri akal not found. 🙀
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: var(--color-text-main);">No experiments found</h3>
        <p style="color: var(--color-text-sub); margin-top: 0.35rem; font-weight: 600;">Senior Dev Cat looked through all packages and couldn't find a match. Try another search or click 'All Experiments'.</p>
      </div>
    `;
    return;
  }

  experimentsContainer.innerHTML = filtered.map(exp => {
    const catClass = exp.categoryKey || 'oop';
    const stampInfo = (typeof CAT_ART !== 'undefined' && CAT_ART.getExperimentStamp)
      ? CAT_ART.getExperimentStamp(exp.id)
      : { title: 'Senior Cat Approved', svg: '' };

    return `
      <a href="#/experiment/${exp.slug}" class="neu-card" data-slug="${exp.slug}">
        <div class="card-exp-num">
          <span class="lbl">EXP</span>
          <span class="val">${exp.shortNumber}</span>
        </div>
        
        <div class="card-info">
          <div class="card-tag-row">
            <span class="tag-badge ${catClass}">${exp.category}</span>
            <span class="cat-stamp-text">★ ${stampInfo.title}</span>
          </div>
          <h2 class="card-title-text">${exp.title}</h2>
        </div>

        <div class="card-cat-stamp" title="${stampInfo.title}">
          ${stampInfo.svg}
        </div>

        <div class="card-arrow-box" aria-label="Open Code">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </a>
    `;
  }).join('');
}

// ==========================================================================
// Code Page View
// ==========================================================================
function openExperiment(exp) {
  currentExperiment = exp;

  // Set Details
  expNumEl.textContent = exp.number;
  expCatEl.textContent = exp.category;
  expTitleEl.textContent = exp.title;
  expAimEl.textContent = exp.aim || exp.title;
  expObjEl.textContent = exp.objective || '';

  const fileName = exp.fileName || `${exp.slug}.java`;
  fileNameEl.textContent = fileName;

  // Syntax Highlighting & Line Numbers
  const { html: lineHtml, count } = generateLineNumbers(exp.code);
  lineNumbersContainer.textContent = lineHtml;
  locCountEl.textContent = `${count} lines`;
  codeContainer.innerHTML = highlightJava(exp.code);

  // Sample Output
  if (exp.sampleOutput) {
    outputSection.style.display = 'block';
    outputBody.textContent = exp.sampleOutput;
  } else {
    outputSection.style.display = 'none';
  }

  // Prev / Next Navigation buttons
  const currentIndex = EXPERIMENTS.findIndex(e => e.id === exp.id);
  if (currentIndex > 0) {
    prevExpBtn.disabled = false;
    prevExpBtn.onclick = () => window.location.hash = `#/experiment/${EXPERIMENTS[currentIndex - 1].slug}`;
  } else {
    prevExpBtn.disabled = true;
  }

  if (currentIndex < EXPERIMENTS.length - 1) {
    nextExpBtn.disabled = false;
    nextExpBtn.onclick = () => window.location.hash = `#/experiment/${EXPERIMENTS[currentIndex + 1].slug}`;
  } else {
    nextExpBtn.disabled = true;
  }

  // Set random witty quote for companion cat
  if (companionCatQuote) {
    companionCatQuote.textContent = getRandomQuote();
  }

  // Switch View
  homeView.classList.remove('active');
  codeView.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function showHome() {
  currentExperiment = null;
  codeView.classList.remove('active');
  homeView.classList.add('active');
}

function getRandomQuote() {
  return HINGLISH_MEME_QUOTES[Math.floor(Math.random() * HINGLISH_MEME_QUOTES.length)];
}

// ==========================================================================
// Copy to Clipboard (Robust with Fallback)
// ==========================================================================
async function copyCurrentCode() {
  if (!currentExperiment) return;

  const codeToCopy = currentExperiment.code;
  let success = false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(codeToCopy);
      success = true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = codeToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      success = document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  } catch (err) {
    console.error('Copy failed:', err);
    success = false;
  }

  if (success) {
    playCatChirp();
    showToast('Copied Successfully! 😼');

    if (companionCatQuote) {
      companionCatQuote.textContent = "Maine bola tha na, copy kar aur aish kar! 🐾";
    }

    // Button feedback
    const originalText = bigCopyBtn.innerHTML;
    bigCopyBtn.classList.add('copied');
    bigCopyBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>COPIED TO CLIPBOARD! 😼</span>
    `;

    setTimeout(() => {
      bigCopyBtn.classList.remove('copied');
      bigCopyBtn.innerHTML = originalText;
    }, 2400);
  } else {
    showToast('Failed to copy. Please select manually.');
  }
}

// Toast Display
let toastTimeout;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Download .java file
function downloadCurrentCode() {
  if (!currentExperiment) return;
  const fileName = currentExperiment.fileName || `${currentExperiment.slug}.java`;
  const blob = new Blob([currentExperiment.code], { type: 'text/x-java-source;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  playCatChirp();
  showToast(`Downloaded ${fileName}! 🐈`);
}

// ==========================================================================
// Routing (Hash-based)
// ==========================================================================
function handleRouting() {
  const hash = window.location.hash;

  if (hash.startsWith('#/experiment/')) {
    const slug = hash.replace('#/experiment/', '');
    const found = EXPERIMENTS.find(e => e.slug === slug || String(e.id) === slug);
    if (found) {
      openExperiment(found);
      return;
    }
  }

  showHome();
}

// ==========================================================================
// 3-Second "MASALA DOSA?" Splash Screen Handler
// ==========================================================================
function initSplashScreen() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  const dismissSplash = () => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 400);
  };

  // Automatically fade out after 1.5 seconds (1500ms)
  setTimeout(dismissSplash, 1500);

  // Allow clicking anywhere on the splash to enter immediately
  splash.addEventListener('click', dismissSplash);
}

// ==========================================================================
// Event Listeners & Cat Interactions
// ==========================================================================
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
  initVectorArtwork();
  initSplashScreen();
  renderExperiments();
  handleRouting();

  if (heroCatBubble) {
    heroCatBubble.textContent = "Maine code review kiya... LGTM (Looks Garbage To Me)! 😼";
  }
});

// Search input
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderExperiments();
});

// Category filter buttons
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    playCatChirp();
    renderExperiments();
  });
});

// Big Copy Button
bigCopyBtn.addEventListener('click', copyCurrentCode);

// Download button
downloadBtn.addEventListener('click', downloadCurrentCode);

// Back to experiments
backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

// Logo click
document.querySelector('.logo-group').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#/';
});

// Output toggle collapse/expand
if (outputHeader) {
  outputHeader.addEventListener('click', () => {
    outputBody.style.display = outputBody.style.display === 'none' ? 'block' : 'none';
  });
}

// Interactive Cat Clicks
if (heroCatMascot) {
  heroCatMascot.addEventListener('click', () => {
    playCatChirp();
    if (heroCatBubble) {
      heroCatBubble.textContent = getRandomQuote();
    }
  });
}

if (companionCatBox) {
  companionCatBox.addEventListener('click', () => {
    playCatChirp();
    if (companionCatQuote) {
      companionCatQuote.textContent = getRandomQuote();
    }
  });
}

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && codeView.classList.contains('active')) {
    window.location.hash = '#/';
  }

  if ((e.key === 'c' || e.key === 'C') && codeView.classList.contains('active')) {
    if (document.activeElement !== searchInput) {
      copyCurrentCode();
    }
  }

  if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && homeView.classList.contains('active')) {
    if (document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  }
});
