// Theme toggle functionality
(function() {
  // Get current theme from localStorage or default to auto
  function getTheme() {
    return localStorage.getItem('theme') || 'auto';
  }

  // Set theme
  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('a', theme);
  }

  // Toggle between light, dark, and auto
  function toggleTheme() {
    const current = getTheme();
    let next;

    if (current === 'auto') {
      next = 'dark';
    } else if (current === 'dark') {
      next = 'light';
    } else {
      next = 'auto';
    }

    setTheme(next);
    updateToggleButton(next);
  }

  // Update toggle button text
  function updateToggleButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
      const icons = {
        'auto': '◐',
        'dark': '🌙',
        'light': '☀️'
      };
      button.textContent = icons[theme] || icons['auto'];
      button.title = `Current: ${theme} (click to change)`;
    }
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = getTheme();
    setTheme(savedTheme);

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.style.cssText = 'position: fixed; top: 1rem; right: 1rem; background: transparent; border: 1px solid currentColor; padding: 0.5rem; cursor: pointer; font-size: 1.2rem; border-radius: 4px; z-index: 1000;';
    toggleButton.addEventListener('click', toggleTheme);

    document.body.appendChild(toggleButton);
    updateToggleButton(savedTheme);
  });
})();