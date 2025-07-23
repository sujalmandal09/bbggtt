// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab controls
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    
    // Show the first panel by default
    if (tabPanels.length > 0) {
        tabPanels[0].classList.remove('hidden');
        tabPanels[0].classList.add('active');
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const selectedTab = this;
            const targetPanelId = selectedTab.getAttribute('aria-controls');
            
            // Update tabs state
            tabs.forEach(t => {
                t.setAttribute('aria-selected', 'false');
            });
            selectedTab.setAttribute('aria-selected', 'true');
            
            // Update panels visibility and animation
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.classList.add('hidden');
            });
            
            const targetPanel = document.getElementById(targetPanelId);
            targetPanel.classList.remove('hidden');
            targetPanel.classList.add('active');
        });
        
        // Keyboard navigation for tabs
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const currentIndex = Array.from(tabs).indexOf(this);
                let newIndex;
                
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex - 1 < 0 ? tabs.length - 1 : currentIndex - 1;
                } else { // ArrowRight
                    newIndex = (currentIndex + 1) % tabs.length;
                }
                
                tabs[newIndex].focus();
                tabs[newIndex].click();
            }
        });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const darkModeText = document.getElementById('darkModeText');
    const htmlElement = document.documentElement;
    
    // Function to update dark mode UI
    const updateDarkModeUI = () => {
        if (htmlElement.classList.contains('dark')) {
            darkModeIcon.innerHTML = '<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />';
            darkModeText.textContent = 'Light Mode';
        } else {
            darkModeIcon.innerHTML = '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />';
            darkModeText.textContent = 'Dark Mode';
        }
    };

    // Check for saved preference or OS preference on load
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'dark' || (!savedMode && prefersDark)) {
        htmlElement.classList.add('dark');
    }
    updateDarkModeUI(); // Set initial button state
    
    darkModeToggle.addEventListener('click', function() {
        htmlElement.classList.toggle('dark');
        
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'dark');
        } else {
            localStorage.setItem('darkMode', 'light');
        }
        updateDarkModeUI(); // Update button after click
    });
    
    // Initialize entry animations
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        el.style.opacity = '1';
    });
});