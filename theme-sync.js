/**
 * Theme Sync: A utility script to ensure dark mode consistency across pages
 */

// Main theme management function
function manageTheme() {
  // Check if dark mode is enabled in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // Apply theme to document
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  
  // Update all iframes to match parent theme
  document.querySelectorAll('iframe').forEach(iframe => {
    try {
      iframe.contentWindow.postMessage({ 
        action: 'themeChange', 
        darkMode: isDarkMode 
      }, '*');
    } catch (e) {
      console.log('Could not send theme to iframe');
    }
  });
}

// Listen for theme changes triggered from other components
window.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'themeChange') {
    const newDarkMode = event.data.darkMode;
    localStorage.setItem('darkMode', String(newDarkMode));
    manageTheme();
  }
});

// Apply theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initial theme application
  manageTheme();
  
  // Setup mutation observer to detect DOM changes and ensure theme remains consistent
  const observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        // Check if any iframes were added
        mutation.addedNodes.forEach(node => {
          if (node.tagName === 'IFRAME') {
            // Wait for iframe to load
            node.addEventListener('load', () => {
              try {
                node.contentWindow.postMessage({ 
                  action: 'themeChange', 
                  darkMode: localStorage.getItem('darkMode') === 'true' 
                }, '*');
              } catch (e) {
                console.log('Could not send theme to new iframe');
              }
            });
          }
        });
      }
    }
  });
  
  // Start observing document body for child additions (like dynamically added iframes)
  observer.observe(document.body, { childList: true, subtree: true });
});

// Create a global function to toggle theme
window.toggleTheme = function() {
  const currentTheme = localStorage.getItem('darkMode') === 'true';
  const newTheme = !currentTheme;
  
  localStorage.setItem('darkMode', String(newTheme));
  manageTheme();
};
