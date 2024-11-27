function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');

  if (menu.classList.contains('show')) {
    // Hide the menu with a slide-up effect
    menu.style.transform = 'translateY(-20px)';
    menu.style.opacity = '0';
    setTimeout(() => {
      menu.classList.remove('show');
    }, 300); // Matches the CSS transition duration
  } else {
    // Show the menu with a slide-down effect
    menu.classList.add('show');
    setTimeout(() => {
      menu.style.transform = 'translateY(0)';
      menu.style.opacity = '1';
    }, 10); // Small delay to allow class addition before applying transitions
  }

  // Toggle the hamburger icon
  hamburger.classList.toggle('close');
}

// Initialize menu hidden state properly on page load
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-menu');
  menu.style.transform = 'translateY(-20px)';
  menu.style.opacity = '0';
});
