// Function to toggle theme and store preference
function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Store new theme in localStorage
  localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
function applyStoredTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
}

// Event Listener
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Initialize
applyStoredTheme();
