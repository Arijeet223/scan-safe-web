
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Navigation active state
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Search button functionality
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSearch();
    });
  }

  // Settings button functionality
  const settingsBtn = document.getElementById('settingsBtn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSettings();
    });
  }

  // Sign in form submission
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (email && password) {
        // For demo purposes - would normally send to server
        showAlert('Sign in successful!', 'success');
        
        // Redirect after short delay
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      } else {
        showAlert('Please fill in all fields', 'error');
      }
    });
  }

  // Social sign in buttons
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function() {
      showAlert('Google sign in not implemented in demo', 'info');
    });
  }

  const facebookBtn = document.querySelector('.facebook-btn');
  if (facebookBtn) {
    facebookBtn.addEventListener('click', function() {
      showAlert('Facebook sign in not implemented in demo', 'info');
    });
  }

  // Initialize any charts on the statistics page
  initializeCharts();

  // Add scroll animation to elements
  addScrollAnimations();
});

// Toggle search overlay
function toggleSearch() {
  // Check if search overlay already exists
  let searchOverlay = document.querySelector('.search-overlay');
  
  if (searchOverlay) {
    // Close the search overlay if it's already open
    searchOverlay.remove();
  } else {
    // Create search overlay
    searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay';
    searchOverlay.innerHTML = `
      <div class="search-content">
        <div class="search-header">
          <h2>Search</h2>
          <button class="close-search"><i class="fas fa-times"></i></button>
        </div>
        <div class="search-form">
          <input type="text" placeholder="Search for scams, tips, information..." autofocus>
          <button type="submit"><i class="fas fa-search"></i></button>
        </div>
        <div class="search-suggestions">
          <h3>Popular Searches</h3>
          <div class="suggestion-chips">
            <a href="phishing.html" class="suggestion-chip">Phishing Scams</a>
            <a href="malware.html" class="suggestion-chip">Malware Attacks</a>
            <a href="fraud.html" class="suggestion-chip">Payment Frauds</a>
            <a href="safety.html" class="suggestion-chip">Safety Tips</a>
            <a href="statistics.html" class="suggestion-chip">QR Scam Statistics</a>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(searchOverlay);
    
    // Focus the search input
    setTimeout(() => {
      searchOverlay.querySelector('input').focus();
    }, 100);
    
    // Add event listener to close button
    searchOverlay.querySelector('.close-search').addEventListener('click', function() {
      searchOverlay.remove();
    });
    
    // Close overlay when clicking outside the content
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.remove();
      }
    });
    
    // Close overlay when ESC key is pressed
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchOverlay.remove();
      }
    });

    // Search form submission
    const searchForm = searchOverlay.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchTerm = searchForm.querySelector('input').value;
      if (searchTerm) {
        // For demo, just redirect to a related page based on search term
        if (searchTerm.toLowerCase().includes('phish')) {
          window.location.href = 'phishing.html';
        } else if (searchTerm.toLowerCase().includes('malware')) {
          window.location.href = 'malware.html';
        } else if (searchTerm.toLowerCase().includes('fraud') || searchTerm.toLowerCase().includes('payment')) {
          window.location.href = 'fraud.html';
        } else if (searchTerm.toLowerCase().includes('safe') || searchTerm.toLowerCase().includes('tip')) {
          window.location.href = 'safety.html';
        } else if (searchTerm.toLowerCase().includes('stat')) {
          window.location.href = 'statistics.html';
        } else {
          showAlert('No exact matches found. Try one of our suggested topics.', 'info');
        }
      }
    });
  }
  
  // Add styles if not already in document
  if (!document.getElementById('search-overlay-styles')) {
    const style = document.createElement('style');
    style.id = 'search-overlay-styles';
    style.textContent = `
      .search-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 13, 33, 0.9);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 10vh;
      }
      
      .search-content {
        width: 100%;
        max-width: 700px;
        background: linear-gradient(135deg, rgba(26, 58, 107, 0.95) 0%, rgba(12, 31, 66, 0.95) 100%);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: fadeInDown 0.3s ease-out;
      }
      
      .search-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      
      .search-header h2 {
        margin-bottom: 0;
      }
      
      .close-search {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      
      .close-search:hover {
        color: #4a8af4;
      }
      
      .search-form {
        display: flex;
        margin-bottom: 2rem;
      }
      
      .search-form input {
        flex-grow: 1;
        padding: 1rem;
        border-radius: 8px 0 0 8px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.05);
        color: white;
        font-size: 1rem;
      }
      
      .search-form input:focus {
        outline: none;
        border-color: #4a8af4;
      }
      
      .search-form button {
        padding: 1rem;
        background-color: #4a8af4;
        border: none;
        border-radius: 0 8px 8px 0;
        color: white;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      
      .search-form button:hover {
        background-color: #3670d6;
      }
      
      .search-suggestions h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
      }
      
      .suggestion-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
      
      .suggestion-chip {
        padding: 0.5rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 100px;
        color: white;
        transition: all 0.2s ease;
      }
      
      .suggestion-chip:hover {
        background-color: #4a8af4;
        transform: translateY(-2px);
      }
      
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Toggle settings menu
function toggleSettings() {
  // Check if settings menu already exists
  let settingsMenu = document.querySelector('.settings-menu');
  
  if (settingsMenu) {
    // Close the settings menu if it's already open
    settingsMenu.remove();
  } else {
    // Create settings menu
    settingsMenu = document.createElement('div');
    settingsMenu.className = 'settings-menu';
    settingsMenu.innerHTML = `
      <div class="settings-content">
        <div class="settings-header">
          <h2>Settings</h2>
          <button class="close-settings"><i class="fas fa-times"></i></button>
        </div>
        <div class="settings-options">
          <div class="settings-option">
            <span>Dark Mode</span>
            <label class="toggle-switch">
              <input type="checkbox" id="dark-mode-toggle" checked>
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-option">
            <span>Notifications</span>
            <label class="toggle-switch">
              <input type="checkbox" id="notifications-toggle">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-option">
            <span>Language</span>
            <select id="language-select">
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="mr">मराठी (Marathi)</option>
            </select>
          </div>
          <div class="settings-option">
            <span>Text Size</span>
            <div class="text-size-buttons">
              <button class="text-size-btn" data-size="small">A</button>
              <button class="text-size-btn active" data-size="medium">A</button>
              <button class="text-size-btn" data-size="large">A</button>
            </div>
          </div>
        </div>
        <div class="settings-actions">
          <button class="btn btn-secondary">Reset to Default</button>
          <button class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(settingsMenu);
    
    // Add event listener to close button
    settingsMenu.querySelector('.close-settings').addEventListener('click', function() {
      settingsMenu.remove();
    });
    
    // Close menu when clicking outside the content
    settingsMenu.addEventListener('click', function(e) {
      if (e.target === settingsMenu) {
        settingsMenu.remove();
      }
    });
    
    // Close menu when ESC key is pressed
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        settingsMenu.remove();
      }
    });

    // Text size buttons
    const textSizeButtons = settingsMenu.querySelectorAll('.text-size-btn');
    textSizeButtons.forEach(button => {
      button.addEventListener('click', function() {
        textSizeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const size = this.getAttribute('data-size');
        
        // For demo, just show an alert
        showAlert(`Text size changed to ${size}`, 'info');
      });
    });

    // Toggle switches
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const notificationsToggle = document.getElementById('notifications-toggle');
    
    darkModeToggle.addEventListener('change', function() {
      showAlert(`Dark mode ${this.checked ? 'enabled' : 'disabled'}`, 'info');
    });
    
    notificationsToggle.addEventListener('change', function() {
      showAlert(`Notifications ${this.checked ? 'enabled' : 'disabled'}`, 'info');
    });

    // Language select
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
      showAlert(`Language changed to ${this.options[this.selectedIndex].text}`, 'info');
    });

    // Settings action buttons
    const resetButton = settingsMenu.querySelector('.btn-secondary');
    const saveButton = settingsMenu.querySelector('.btn-primary');
    
    resetButton.addEventListener('click', function() {
      showAlert('Settings reset to default', 'info');
    });
    
    saveButton.addEventListener('click', function() {
      showAlert('Settings saved successfully', 'success');
      settingsMenu.remove();
    });
  }
  
  // Add styles if not already in document
  if (!document.getElementById('settings-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'settings-menu-styles';
    style.textContent = `
      .settings-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 13, 33, 0.9);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        justify-content: flex-end;
        animation: fadeIn 0.3s ease-out;
      }
      
      .settings-content {
        width: 100%;
        max-width: 400px;
        height: 100%;
        background: linear-gradient(135deg, rgba(26, 58, 107, 0.95) 0%, rgba(12, 31, 66, 0.95) 100%);
        padding: 2rem;
        box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.3s ease-out;
        overflow-y: auto;
      }
      
      .settings-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .settings-header h2 {
        margin-bottom: 0;
      }
      
      .close-settings {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      
      .close-settings:hover {
        color: #4a8af4;
      }
      
      .settings-options {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .settings-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
      }
      
      .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 34px;
        transition: 0.3s;
      }
      
      .toggle-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
        transition: 0.3s;
      }
      
      .toggle-switch input:checked + .toggle-slider {
        background-color: #4a8af4;
      }
      
      .toggle-switch input:checked + .toggle-slider:before {
        transform: translateX(26px);
      }
      
      #language-select {
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        color: white;
        padding: 0.5rem;
        min-width: 120px;
      }
      
      #language-select:focus {
        outline: none;
        border-color: #4a8af4;
      }
      
      .text-size-buttons {
        display: flex;
        gap: 0.5rem;
      }
      
      .text-size-btn {
        width: 36px;
        height: 36px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .text-size-btn:nth-child(1) {
        font-size: 0.8rem;
      }
      
      .text-size-btn:nth-child(2) {
        font-size: 1rem;
      }
      
      .text-size-btn:nth-child(3) {
        font-size: 1.2rem;
      }
      
      .text-size-btn.active, .text-size-btn:hover {
        background-color: #4a8af4;
        border-color: #4a8af4;
      }
      
      .settings-actions {
        display: flex;
        justify-content: space-between;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Show alert messages
function showAlert(message, type) {
  // Check if alert container exists, create if not
  let alertContainer = document.querySelector('.alert-container');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';
    document.body.appendChild(alertContainer);
    
    // Add styles if not already in document
    if (!document.getElementById('alert-styles')) {
      const style = document.createElement('style');
      style.id = 'alert-styles';
      style.textContent = `
        .alert-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 350px;
        }
        
        .alert {
          padding: 15px 20px;
          border-radius: 8px;
          animation: slideInRight 0.3s ease-out;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .alert-info {
          background-color: #4a8af4;
          color: white;
        }
        
        .alert-success {
          background-color: #2ecc71;
          color: white;
        }
        
        .alert-error {
          background-color: #e74c3c;
          color: white;
        }
        
        .alert-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          margin-left: 10px;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }
        
        .alert-close:hover {
          opacity: 1;
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Create alert element
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `
    <span>${message}</span>
    <button class="alert-close"><i class="fas fa-times"></i></button>
  `;
  alertContainer.appendChild(alert);
  
  // Add close button functionality
  const closeButton = alert.querySelector('.alert-close');
  closeButton.addEventListener('click', function() {
    closeAlert(alert);
  });
  
  // Auto close after 5 seconds
  setTimeout(() => {
    closeAlert(alert);
  }, 5000);
}

// Close alert function
function closeAlert(alert) {
  alert.style.animation = 'fadeOut 0.3s ease-out forwards';
  setTimeout(() => {
    alert.remove();
  }, 300);
}

// Initialize charts for statistics page
function initializeCharts() {
  // Only run if Chart.js is loaded and we're on the statistics page
  if (typeof Chart === 'undefined' || !document.getElementById('growthChart')) {
    return;
  }
  
  // Initialized in HTML of statistics.html
}

// Add scroll animations to elements
function addScrollAnimations() {
  // Add styles if not already in document
  if (!document.getElementById('scroll-animation-styles')) {
    const style = document.createElement('style');
    style.id = 'scroll-animation-styles';
    style.textContent = `
      .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in-element.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .slide-in-left {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .slide-in-left.visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      .slide-in-right {
        opacity: 0;
        transform: translateX(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .slide-in-right.visible {
        opacity: 1;
        transform: translateX(0);
      }
      
      .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .scale-in.visible {
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add animation classes to elements
  const elements = [
    { selector: '.hero-content', className: 'slide-in-left' },
    { selector: '.hero-image', className: 'slide-in-right' },
    { selector: '.scam-types h2', className: 'fade-in-element' },
    { selector: '.card', className: 'scale-in' },
    { selector: '.statistics h2', className: 'fade-in-element' },
    { selector: '.stat-card', className: 'fade-in-element' },
    { selector: '.safety-tips h2', className: 'fade-in-element' },
    { selector: '.tip', className: 'fade-in-element' },
    { selector: '.process-step', className: 'fade-in-element' },
    { selector: '.example-card', className: 'fade-in-element' },
    { selector: '.stat-box', className: 'slide-in-right' },
    { selector: '.protection-tips', className: 'slide-in-right' },
    { selector: '.report-section', className: 'scale-in' },
    { selector: '.case-study', className: 'fade-in-element' },
    { selector: '.timeline-item', className: 'fade-in-element' },
    { selector: '.stat-card-large', className: 'scale-in' },
    { selector: '.chart-wrapper', className: 'fade-in-element' },
    { selector: '.data-card', className: 'fade-in-element' },
    { selector: '.safety-tips-detailed h2', className: 'fade-in-element' },
    { selector: '.tip-card', className: 'scale-in' },
    { selector: '.red-flag', className: 'slide-in-left' },
    { selector: '.action-step', className: 'fade-in-element' }
  ];
  
  elements.forEach(item => {
    const elems = document.querySelectorAll(item.selector);
    elems.forEach(elem => {
      elem.classList.add(item.className);
    });
  });
  
  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll events
  function handleScroll() {
    const animatedElements = document.querySelectorAll('.fade-in-element, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(elem => {
      if (isElementInViewport(elem)) {
        elem.classList.add('visible');
      }
    });
  }
  
  // Initial check
  handleScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
}
