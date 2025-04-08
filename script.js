document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('darkmode');
    } else {
        body.classList.remove('darkmode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('darkmode');
        const isDark = body.classList.contains('darkmode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

