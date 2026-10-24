/* Adhil's Developer World - asset-free interactive 2.5D portfolio */
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
    <h2 id="panel-title">Building reliable things,<br />end to end.</h2>
    <p class="panel-lead">I'm <strong>Adhil Muhammad K.</strong>, a Computer Science Engineer and MERN full-stack developer from Kozhikode, Kerala. I build responsive web applications with thoughtful interfaces, dependable APIs, and well-structured data.</p>
    <div class="panel-grid">
      <div class="info-card"><span>ROLE</span><b>MERN Full-Stack<br />Developer</b></div>
      <div class="info-card"><span>BASE</span><b>Kozhikode, Kerala<br />India</b></div>
      <div class="info-card"><span>EDUCATION</span><b>B.Tech Computer Science<br />&amp; Engineering, FISAT</b></div>
      <div class="info-card"><span>APPROACH</span><b>Responsive UX + reliable<br />full-stack engineering</b></div>
    </div>
    <div class="interest-list"><span class="tag">MERN STACK</span><span class="tag">REST APIs</span><span class="tag">DATA MIGRATION</span><span class="tag">TEST AUTOMATION</span></div>
    <div class="callout">My experience spans React and Node.js applications, Django and PostgreSQL systems, data migration, payment workflows, and test automation - always with an eye on maintainable, useful software.</div>`,
  projects: () => `
    <p class="panel-kicker">02 / SHIPPED IDEAS</p>
    <h2 id="panel-title">Projects from<br />the lab.</h2>
    <p class="panel-lead">Three full-stack projects built around practical workflows: shopping, food ordering, and focused task management.</p>
    <div class="project-grid">
      ${projectCard('Fragranzia', 'MERN e-commerce application with authentication, product management, cart, wishlist, orders, checkout, Razorpay payments, and order status management.', ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'], 'fragranzia')}
      ${projectCard('Food Delivery Website', 'MERN food-delivery application with authentication, food listings, carts, orders, checkout, and RESTful product and order APIs.', ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'], 'food')}
      ${projectCard('Todo Management System', 'MERN task manager with CRUD operations, status tracking, REST APIs, Axios integration, MongoDB persistence, and a responsive React interface.', ['React.js', 'Node.js', 'MongoDB', 'Axios', 'Tailwind CSS'], 'todo')}
    </div>
    <div class="callout">Each project combines a clear user flow with the backend work needed to make it dependable - authentication, data management, APIs, and responsive presentation.</div>`,
  skills: () => `
    <p class="panel-kicker">03 / TOOLKIT</p>
    <h2 id="panel-title">A stack for<br />making it real.</h2>
    <p class="panel-lead">A practical toolkit for shipping modern web applications, maintaining data-heavy systems, and protecting quality through testing.</p>
    <div class="skills-layout">
      <div class="skills-cloud" aria-label="Animated technology cloud"><span class="skill-orb">REACT</span><span class="skill-orb">NODE</span><span class="skill-orb">MONGO</span><span class="skill-orb">PYTHON</span><span class="skill-orb">JS</span><span class="skill-orb">DOCKER</span><span class="skill-orb">DJANGO</span><span class="skill-orb">SQL</span></div>
      <div class="skill-groups">
        <div class="skill-group"><b>FRONTEND</b><p>HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS, responsive web design</p></div>
        <div class="skill-group"><b>BACKEND &amp; DATA</b><p>Node.js, Express.js, Django, REST APIs, MongoDB, PostgreSQL, MySQL, SQL</p></div>
        <div class="skill-group"><b>TOOLS &amp; QUALITY</b><p>Git, GitHub, Docker, Postman, VS Code, Selenium, Robot Framework, functional and regression testing</p></div>
      </div>
    </div>`,
  experience: () => `
    <p class="panel-kicker">04 / IN THE FIELD</p>
    <h2 id="panel-title">Making systems<br />keep moving.</h2>
    <p class="panel-lead">From MERN applications and database-backed platforms to quality assurance and data migration, I work across the lifecycle that makes software useful in the real world.</p>
    <div class="timeline">
      <div class="timeline-item"><span>MAY 2025 - PRESENT / CALICUT</span><h3>MERN Full-Stack Intern - Softroniics</h3><p>Developing responsive MERN applications and reusable React components; connecting MongoDB through Mongoose, integrating Axios and REST APIs, performing CRUD operations, and implementing JWT authentication.</p><div class="work-list"><span class="tag">REACT.JS</span><span class="tag">MONGOOSE</span><span class="tag">JWT AUTH</span></div></div>
      <div class="timeline-item"><span>JUN 2025 - FEB 2026 / TRIVANDRUM</span><h3>Software Developer - IHRD</h3><p>Contributed to the Kerala Legislative Assembly Webcasting Data Migration Project. Developed and maintained Python, Django, React.js, and PostgreSQL features; handled migration, validation, QA, Docker environments, and FFmpeg video workflows.</p><div class="work-list"><span class="tag">DJANGO</span><span class="tag">DATA MIGRATION</span><span class="tag">POSTGRESQL</span><span class="tag">DOCKER</span></div></div>
      <div class="timeline-item"><span>NOV 2023 - MAR 2025 / CALICUT</span><h3>Automation Tester - Nucore Software Solutions</h3><p>Developed and maintained functional and regression test automation with Selenium and Robot Framework; analysed test results, documented issues, and worked with developers to improve software quality.</p><div class="work-list"><span class="tag">SELENIUM</span><span class="tag">ROBOT FRAMEWORK</span><span class="tag">REGRESSION TESTING</span></div></div>
    </div>`,
  resume: () => `
    <p class="panel-kicker">05 / CREDENTIALS</p>
    <h2 id="panel-title">The concise<br />version.</h2>
    <div class="resume-layout"><div class="resume-preview" aria-label="Resume preview"><span class="resume-logo">AM / MERN FULL-STACK DEVELOPER</span><h3>Adhil Muhammad K.</h3><p>Kozhikode, Kerala</p><div class="resume-lines"><i></i><i></i><i></i><i></i></div></div><div class="resume-info"><h3>Resume terminal</h3><p>Explore the current resume for experience across MERN development, Django and data migration work, and software test automation.</p><a class="action-button" href="Adhil Muhammad K - Updated Resume.pdf" target="_blank" rel="noreferrer">&rarr; VIEW RESUME</a><a class="action-button alt" href="Adhil Muhammad K - Updated Resume.pdf" download>&darr; DOWNLOAD PDF</a></div></div>`,
  contact: () => `
    <p class="panel-kicker">06 / OPEN CHANNEL</p>
    <h2 id="panel-title">Let's build<br />something useful.</h2>
    <p class="panel-lead">Have a product idea, an interesting role, or a web application that needs careful execution? Send a note and let's start the conversation.</p>
    <div class="contact-layout"><div class="contact-links"><a class="contact-link" href="mailto:adhilmuhammadfeb2520@gmail.com"><span>EMAIL</span> adhilmuhammadfeb2520@gmail.com &rarr;</a><a class="contact-link" href="tel:8330035897"><span>PHONE</span> 8330035897 &rarr;</a><a class="contact-link" href="https://github.com/ADHILMHD2520" target="_blank" rel="noreferrer"><span>GITHUB</span> github.com/ADHILMHD2520 &rarr;</a><a class="contact-link" href="https://www.linkedin.com/in/adhil-muhammad-k" target="_blank" rel="noreferrer"><span>LINKEDIN</span> linkedin.com/in/adhil-muhammad-k &rarr;</a></div>
    <form class="contact-form" id="contact-form" novalidate><div class="form-field"><label for="contact-name">YOUR NAME</label><input id="contact-name" name="name" autocomplete="name" required /></div><div class="form-field"><label for="contact-email">EMAIL ADDRESS</label><input id="contact-email" name="email" type="email" autocomplete="email" required /></div><div class="form-field"><label for="contact-message">MESSAGE</label><textarea id="contact-message" name="message" required></textarea></div><div class="form-error" id="form-error" aria-live="polite"></div><button class="send-button" type="submit">SEND MESSAGE &rarr;</button></form></div>`,
};

function projectCard(name, description, technologies, visual) {
  return `<article class="project-card"><div class="project-visual visual-${visual}" aria-hidden="true"><span></span><span></span><span></span><span></span></div><h3>${name}</h3><p>${description}</p><div class="tech-list">${technologies.map(tech => `<span>${tech}</span>`).join('')}</div></article>`;
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
    showToast(`Thanks, ${name}. Your message is ready to send - connect this form to your form service before launch.`);
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
  if (event.key.toLowerCase() === 'h' && event.altKey) showToast('Hidden room found: Keep making things.');
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

console.info('%cHey developer!%c\nYou found the console. Thanks for checking out Adhil\'s world.', 'color:#00e5ff;font-size:16px;font-weight:bold', 'color:#cfe5ff;font-size:12px');
setPlayer();
gameLoop();
bootLoader();
