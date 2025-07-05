document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('language-switcher-container');
    if (!container) return;
    // Only show the icon, no dropdown or text
    container.innerHTML = `
        <span class="material-icons language-switcher-icon" id="language-switcher-btn">language</span>
    `;
    const btn = document.getElementById('language-switcher-btn');
    btn.addEventListener('click', function () {
        // Toggle between Arabic and English pages
        const current = window.location.pathname.includes('arabic');
        if (current) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'index(arabic).html';
        }
    });
}); 