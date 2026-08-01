const navPill = document.getElementById('navPill');
const megaMenu = document.getElementById('megaMenu');
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.mega-panel');
const navWrapper = document.getElementById('navWrapper');

let currentPanel = null;

function expandNav(panelName) {
  navPill.classList.add('expanded');
  if (panelName) openPanel(panelName);
}

function collapseNav() {
  navPill.classList.remove('expanded');
  closeMenu();
}

function openPanel(name) {
  panels.forEach(p => p.classList.toggle('active', p.dataset.panel === name));
  navItems.forEach(i => i.classList.toggle('active', i.dataset.menu === name));
  megaMenu.classList.add('open');
  currentPanel = name;
}

function closeMenu() {
  megaMenu.classList.remove('open');
  navItems.forEach(i => i.classList.remove('active'));
  currentPanel = null;
}

// Hover to expand the pill itself
navPill.addEventListener('mouseenter', () => {
  navPill.classList.add('expanded');
});

// Hovering each nav item opens its panel
navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const menu = item.dataset.menu;
    if (menu) openPanel(menu);
    else closeMenu(); // TRACKER has no dropdown
  });
});

// Leaving the whole nav area collapses everything
navWrapper.addEventListener('mouseleave', () => {
  collapseNav();
});

// Keep it open while hovering the mega menu itself
megaMenu.addEventListener('mouseenter', () => {
  navPill.classList.add('expanded');
});

// Mobile: tap to toggle instead of hover
navPill.addEventListener('click', (e) => {
  if (window.innerWidth <= 700 && !navPill.classList.contains('expanded')) {
    navPill.classList.add('expanded');
  }
});
