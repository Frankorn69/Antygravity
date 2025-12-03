document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Simple toggle for analysis visibility (if we want to hide it initially)
    // Currently not strictly required but good to have ready
});
