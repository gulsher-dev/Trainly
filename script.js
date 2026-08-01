const navPill = document.getElementById('navPill');
const megaMenu = document.getElementById('megaMenu');
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.mega-panel');
const navWrapper = document.getElementById('navWrapper');

function openPanel(name) {
  panels.forEach(p => p.classList.toggle('active', p.dataset.panel === name));
  navItems.forEach(i => i.classList.toggle('active', i.dataset.menu === name));
  megaMenu.classList.add('open');
}

function closeMenu() {
  megaMenu.classList.remove('open');
  navItems.forEach(i => i.classList.remove('active'));
}

function collapseNav() {
  navPill.classList.remove('expanded');
  navWrapper.classList.remove('active');
  closeMenu();
}

// Hover to expand the pill — also makes the wrapper clickable
// so there's no dead zone between the pill and the dropdown below it
navPill.addEventListener('mouseenter', () => {
  navPill.classList.add('expanded');
  navWrapper.classList.add('active');
});

// Hovering each nav item opens its panel
navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const menu = item.dataset.menu;
    if (menu) openPanel(menu);
    else closeMenu(); // TRACKER has no dropdown
  });
});

// Keep it open while hovering the mega menu itself
megaMenu.addEventListener('mouseenter', () => {
  navPill.classList.add('expanded');
  navWrapper.classList.add('active');
});

// Leaving the whole nav area (pill + dropdown together) collapses everything
navWrapper.addEventListener('mouseleave', () => {
  collapseNav();
});

// Mobile: tap to toggle instead of hover
navPill.addEventListener('click', () => {
  if (window.innerWidth <= 700 && !navPill.classList.contains('expanded')) {
    navPill.classList.add('expanded');
    navWrapper.classList.add('active');
  }
});
