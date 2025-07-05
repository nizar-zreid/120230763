document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('switch-mode-btn');
    btn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        btn.classList.toggle('active');
        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = 'light_mode';
        } else {
            btn.textContent = 'dark_mode';
        }
    });
});
// Optional: Add dark mode CSS in your main stylesheet or dynamically here 