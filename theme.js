document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check local storage for theme preference and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'light-mode' ? '☀️' : '🌙';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'dark-mode');
      themeToggle.textContent = '🌙';
    }
  });
});
