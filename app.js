/* Adhil's Developer World — asset-free interactive 2.5D portfolio */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const locations = {
  about: { x: 23, y: 26, name: 'ABOUT ME' },
  projects: { x: 25, y: 60, name: 'PROJECTS LAB' },
  skills: { x: 73, y: 30, name: 'SKILL STATION' },
  experience: { x: 77, y: 57, name: 'EXPERIENCE TOWER' },
  resume: { x: 53, y: 22, name: 'RESUME NODE' },
  contact: { x: 51, y: 78, name: 'CONTACT STATION' },
};

const panelMarkup = {
  about: () => `
    <p class="panel-kicker">01 / ORIGIN STORY</p>
    <h2 id="panel-title">Building useful things,<br />with a little wonder.</h2>
    <p class="panel-lead">I'm <strong>Adhil Muhammad K.</strong>, a software developer and B.Tech Computer Science &amp; Engineering graduate from Kerala, India. I enjoy turning messy ideas into modern, reliable full-stack experiences.</p>
    <div class="panel-grid">
      <div class="info-card"><span>ROLE</span><b>Software Developer<br />MERN Stack Developer</b></div>
      <div class="info-card"><span>BASE</span><b>Kerala, India<br />Open to collaboration</b></div>
      <div class="info-card"><span>EDUCATION</span><b>B.Tech Computer Science<br />&amp; Engineering</b></div>
      <div class="info-card"><span>APPROACH</span><b>Thoughtful UX + dependable<br />engineering</b></div>
    </div>
    <div class="interest-list"><span class="tag">FULL-STACK WEB APPS</span><span class="tag">INTERACTIVE UI</span><span class="tag">REST APIs</span><span class="tag">PRODUCT THINKING</span></div>
    <div class="callout">I’m most at home where product logic and polished interfaces meet — building clear flows, solid backends, and details that make an application feel alive.</div>`,
  projects: () => `
    <p class="panel-kicker">02 / SHIPPED IDEAS</p>
    <h2 id="panel-title">Projects from<br />the lab.</h2>
    <p class="panel-lead">A selection of full-stack systems built around real user journeys — shopping, ordering, and learning.</p>
    <div class="project-grid">
      ${projectCard('Fragranzia', 'Full-stack e-commerce with an elegant shopping flow and a practical admin command centre.', ['React', 'Node', 'Express', 'MongoDB', 'Razorpay'], 'fragranzia')}
      ${projectCard('Food Delivery', 'A MERN food platform for browsing categories, managing carts, placing orders, and administration.', ['React', 'Express', 'MongoDB', 'Payments'], 'food')}
      ${projectCard('LMS Platform', 'A learning environment with course delivery, lessons, progress tracking, and distinct instructor tools.', ['React', 'Node.js', 'MongoDB', 'REST API'], 'lms')}
    </div>
    <div class="callout">Project links are ready for your real GitHub repositories and deployed demos. Add them once the public URLs are available.</div>`,
  skills: () => `
    <p class="panel-kicker">03 / TOOLKIT</p>
    <h2 id="panel-title">A stack for<br />making it real.</h2>
    <p class="panel-lead">I pair a pragmatic JavaScript stack with backend, data, testing, and deployment tools that help ideas travel from prototype to production.</p>
    <div class="skills-layout">
      <div class="skills-cloud" aria-label="Animated technology cloud"><span class="skill-orb">REACT</span><span class="skill-orb">NODE</span><span class="skill-orb">MONGO</span><span class="skill-orb">PYTHON</span><span class="skill-orb">JS</span><span class="skill-orb">DOCKER</span><span class="skill-orb">DJANGO</span><span class="skill-orb">SQL</span></div>
      <div class="skill-groups"><div class="skill-group"><b>FRONTEND</b><p>HTML5, CSS3, JavaScript, React.js</p></div><div class="skill-group"><b>BACKEND &amp; DATA</b><p>Node.js, Express.js, MongoDB, PostgreSQL, SQL, Django</p></div><div class="skill-group"><b>QUALITY &amp; DELIVERY</b><p>Git &amp; GitHub, Docker, AWS, REST APIs, Playwright, Selenium</p></div></div>
    </div>`,
  experience: () => `
    <p class="panel-kicker">04 / IN THE FIELD</p>
    <h2 id="panel-title">Making systems<br />keep moving.</h2>
    <p class="panel-lead">Software development is also the work around the feature: understanding existing systems, protecting data, testing edge cases, and making each release easier to trust.</p>
    <div class="timeline">
      <div class="timeline-item"><span>SOFTWARE DEVELOPER</span><h3>Production &amp; Maintenance Division</h3><p>Contributing across the development lifecycle, balancing feature delivery with the care required to sustain live systems.</p><div class="work-list"><span class="tag">BACKEND DEVELOPMENT</span><span class="tag">DATA MIGRATION</span><span class="tag">DATABASE WORK</span></div></div>
      <div class="timeline-item"><span>ENGINEERING PRACTICE</span><h3>From API to assurance</h3><p>Building and maintaining APIs, testing workflows, investigating issues, and collaborating on resilient improvements to production applications.</p><div class="work-list"><span class="tag">API DEVELOPMENT</span><span class="tag">TESTING</span><span class="tag">MAINTENANCE</span></div></div>
    </div>`,
  resume: () => `
    <p class="panel-kicker">05 / CREDENTIALS</p>
    <h2 id="panel-title">The concise<br />version.</h2>
    <div class="resume-layout"><div class="resume-preview" aria-label="Resume preview"><span class="resume-logo">AM / SOFTWARE DEVELOPER</span><h3>Adhil Muhammad K.</h3><p>MERN Stack Developer</p><div class="resume-lines"><i></i><i></i><i></i><i></i></div></div><div class="resume-info"><h3>Resume terminal</h3><p>View a print-friendly overview or download the text resume included with this portfolio. Replace it with your latest PDF before publishing.</p><button class="action-button" type="button" data-resume-view>↗ VIEW RESUME</button><a class="action-button alt" href="resume-adhil-muhammad.txt" download>↓ DOWNLOAD RESUME</a></div></div>`,
  contact: () => `
    <p class="panel-kicker">06 / OPEN CHANNEL</p>
    <h2 id="panel-title">Let's build<br />something useful.</h2>
    <p class="panel-lead">Have a product idea, an interesting role, or an interface that needs more energy? Send a note and let's start the conversation.</p>
    <div class="contact-layout"><div class="contact-links"><a class="contact-link" href="mailto:hello@adhilmuhammad.dev"><span>EMAIL</span> hello@adhilmuhammad.dev ↗</a><a class="contact-link" href="https://github.com/" target="_blank" rel="noreferrer"><span>GITHUB</span> Add profile URL ↗</a><a class="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span>LINKEDIN</span> Add profile URL ↗</a><div class="callout">Before publishing, swap in Adhil's preferred email and social profile URLs in <code>app.js</code>.</div></div>
    <form class="contact-form" id="contact-form" novalidate><div class="form-field"><label for="contact-name">YOUR NAME</label><input id="contact-name" name="name" autocomplete="name" required /></div><div class="form-field"><label for="contact-email">EMAIL ADDRESS</label><input id="contact-email" name="email" type="email" autocomplete="email" required /></div><div class="form-field"><label for="contact-message">MESSAGE</label><textarea id="contact-message" name="message" required></textarea></div><div class="form-error" id="form-error" aria-live="polite"></div><button class="send-button" type="submit">SEND MESSAGE ↗</button></form></div>`,
};

function projectCard(name, description, technologies, visual) {
  return `<article class="project-card"><div class="project-visual visual-${visual}" aria-hidden="true"><span></span><span></span><span></span><span></span></div><h3>${name}</h3><p>${description}</p><div class="tech-list">${technologies.map(tech => `<span>${tech}</span>`).join('')}</div><div class="card-actions"><button type="button" data-project="${name}" data-kind="GitHub">GITHUB ↗</button><button type="button" data-project="${name}" data-kind="Live demo">LIVE DEMO ↗</button></div></article>`;
}

const loader = $('#loader');
const app = $('#app');
const progress = $('#loading-progress');
const percentage = $('#loading-number');
const loadingMessage = $('#loading-message');
const player = $('#player');
const world = $('#world');
const proximity = $('#proximity');
const proximityName = $('#proximity-name');
const sectorReadout = $('#sector-readout');
const panel = $('#detail-panel');
const panelContent = $('#panel-content');
const backdrop = $('#panel-backdrop');
const toast = $('#toast');
const introCard = $('#intro-card');
const menuToggle = $('#menu-toggle');
const nav = $('#site-nav');
let playerPosition = { x: 48, y: 66 };
let velocity = { x: 0, y: 0 };
let pressed = new Set();
let nearby = null;
let activePanel = null;
let touchStart = null;
let audioOn = false;
let toastTimer;

function setPlayer() {
  player.style.left = `${playerPosition.x}%`;
  player.style.top = `${playerPosition.y}%`;
  updateProximity();
}

function updateProximity() {
  let closest = null;
  let bestDistance = Infinity;
  for (const [key, location] of Object.entries(locations)) {
    const dx = location.x - playerPosition.x;
    const dy = location.y - playerPosition.y;
    const distance = Math.hypot(dx, dy);
    if (distance < bestDistance) { bestDistance = distance; closest = key; }
  }
  // Keep the starting hub neutral; a station wakes up only once the explorer is close.
  nearby = bestDistance < 11 ? closest : null;
  $$('.landmark').forEach(item => item.classList.toggle('is-near', item.dataset.section === nearby));
  if (nearby) {
    proximityName.textContent = locations[nearby].name;
    sectorReadout.textContent = locations[nearby].name;
    proximity.classList.add('is-visible');
  } else {
    sectorReadout.textContent = 'CENTRAL HUB';
    proximity.classList.remove('is-visible');
  }
}

function gameLoop() {
  const speed = .021;
  const maxVelocity = .36;
  if (pressed.has('up')) velocity.y -= speed;
  if (pressed.has('down')) velocity.y += speed;
  if (pressed.has('left')) velocity.x -= speed;
  if (pressed.has('right')) velocity.x += speed;
  velocity.x *= .87;
  velocity.y *= .87;
  velocity.x = Math.max(-maxVelocity, Math.min(maxVelocity, velocity.x));
  velocity.y = Math.max(-maxVelocity, Math.min(maxVelocity, velocity.y));
  if (Math.abs(velocity.x) > .002 || Math.abs(velocity.y) > .002) {
    playerPosition.x = Math.max(8, Math.min(92, playerPosition.x + velocity.x));
    playerPosition.y = Math.max(14, Math.min(85, playerPosition.y + velocity.y));
    setPlayer();
  }
  requestAnimationFrame(gameLoop);
}

function openPanel(section) {
  if (!panelMarkup[section]) return;
  activePanel = section;
  panelContent.innerHTML = panelMarkup[section]();
  backdrop.hidden = false;
  panel.hidden = false;
  requestAnimationFrame(() => panel.classList.add('is-open'));
  document.body.style.overflow = 'hidden';
  setTimeout(() => panel.focus(), 60);
  if (section === 'contact') bindContactForm();
  $$('.card-actions button', panel).forEach(button => button.addEventListener('click', () => {
    showToast(`${button.dataset.kind} for ${button.dataset.project}: add the public URL in app.js before publishing.`);
  }));
  $('[data-resume-view]', panel)?.addEventListener('click', () => window.print());
}

function closePanel() {
  panel.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(() => { panel.hidden = true; backdrop.hidden = true; }, 260);
  world.focus({ preventScroll: true });
}

function goTo(section, open = true) {
  const target = locations[section];
  if (!target) return;
  introCard.classList.add('is-dismissed');
  nav.classList.remove('is-open');
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  const start = { ...playerPosition };
  const started = performance.now();
  const duration = 690;
  const animate = now => {
    const elapsed = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - elapsed, 4);
    playerPosition.x = start.x + (target.x - start.x) * eased;
    playerPosition.y = start.y + (target.y - start.y) * eased;
    setPlayer();
    if (elapsed < 1) requestAnimationFrame(animate);
    else if (open) setTimeout(() => openPanel(section), 120);
  };
  requestAnimationFrame(animate);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3800);
}

function bindContactForm() {
  const form = $('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const name = $('#contact-name').value.trim();
    const email = $('#contact-email').value.trim();
    const message = $('#contact-message').value.trim();
    const error = $('#form-error');
    if (!name || !email || !message) { error.textContent = 'Please complete each field before sending.'; return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { error.textContent = 'Please enter a valid email address.'; return; }
    error.textContent = '';
    form.reset();
    showToast(`Thanks, ${name}. Your message is ready to send — connect this form to your form service before launch.`);
  });
}

function keyToMove(key) {
  return ({ w: 'up', arrowup: 'up', s: 'down', arrowdown: 'down', a: 'left', arrowleft: 'left', d: 'right', arrowright: 'right' })[key.toLowerCase()];
}

window.addEventListener('keydown', event => {
  const move = keyToMove(event.key);
  if (move && !activePanel) { pressed.add(move); event.preventDefault(); introCard.classList.add('is-dismissed'); }
  if (event.key === 'Enter' && nearby && !activePanel) { openPanel(nearby); }
  if (event.key === 'Escape' && activePanel) { closePanel(); activePanel = null; }
  if (event.key.toLowerCase() === 'h' && event.altKey) showToast('✦ Hidden room found: console.log("Keep making things.")');
});
window.addEventListener('keyup', event => { const move = keyToMove(event.key); if (move) pressed.delete(move); });

$$('[data-section]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); goTo(button.dataset.section); }));
$$('[data-go]').forEach(button => button.addEventListener('click', () => goTo(button.dataset.go)));
$('#explore-button').addEventListener('click', () => { introCard.classList.add('is-dismissed'); world.focus(); showToast('Use the map, keyboard, or menu to discover each station.'); });
$('#panel-close').addEventListener('click', () => { closePanel(); activePanel = null; });
backdrop.addEventListener('click', () => { closePanel(); activePanel = null; });
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuToggle.classList.toggle('is-open', open); menuToggle.setAttribute('aria-expanded', String(open)); });
$('#sound-toggle').addEventListener('click', event => { audioOn = !audioOn; event.currentTarget.setAttribute('aria-pressed', String(audioOn)); event.currentTarget.querySelector('b').textContent = audioOn ? 'ON' : 'OFF'; showToast(audioOn ? 'Sound cues enabled. (No music will autoplay.)' : 'Sound cues disabled.'); });

$$('[data-move]').forEach(button => {
  const direction = button.dataset.move;
  const start = event => { event.preventDefault(); pressed.add(direction); introCard.classList.add('is-dismissed'); };
  const end = () => pressed.delete(direction);
  button.addEventListener('pointerdown', start); button.addEventListener('pointerup', end); button.addEventListener('pointerleave', end); button.addEventListener('pointercancel', end);
});

world.addEventListener('pointerdown', event => { if (event.target !== world && !event.target.classList.contains('world-floor')) return; touchStart = { x: event.clientX, y: event.clientY, px: playerPosition.x, py: playerPosition.y }; world.setPointerCapture?.(event.pointerId); });
world.addEventListener('pointermove', event => { if (!touchStart) return; const scale = 0.13; playerPosition.x = Math.max(8, Math.min(92, touchStart.px + (event.clientX - touchStart.x) * scale)); playerPosition.y = Math.max(14, Math.min(85, touchStart.py + (event.clientY - touchStart.y) * scale)); introCard.classList.add('is-dismissed'); setPlayer(); });
world.addEventListener('pointerup', () => { touchStart = null; });

document.addEventListener('pointermove', event => { $('.cursor').style.left = `${event.clientX}px`; $('.cursor').style.top = `${event.clientY}px`; });
$$('button, a').forEach(item => { item.addEventListener('pointerenter', () => $('.cursor').classList.add('is-hover')); item.addEventListener('pointerleave', () => $('.cursor').classList.remove('is-hover')); });

function bootLoader() {
  const messages = ['Initializing developer world...', 'Loading interaction systems...', 'Preparing projects...', 'Almost ready...'];
  let value = 0;
  const tick = () => {
    value = Math.min(100, value + Math.ceil(Math.random() * 9));
    progress.style.width = `${value}%`;
    percentage.textContent = `${String(value).padStart(2, '0')}%`;
    loadingMessage.textContent = messages[Math.min(messages.length - 1, Math.floor(value / 27))];
    if (value < 100) setTimeout(tick, 80 + Math.random() * 90);
    else setTimeout(() => { loader.classList.add('is-done'); app.classList.remove('app--locked'); world.focus({ preventScroll: true }); }, 390);
  };
  setTimeout(tick, 250);
}

console.info('%cHey developer 👋%c\nYou found the console. Thanks for checking out Adhil\'s world.', 'color:#00e5ff;font-size:16px;font-weight:bold', 'color:#cfe5ff;font-size:12px');
setPlayer();
gameLoop();
bootLoader();
