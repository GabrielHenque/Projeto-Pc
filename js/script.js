const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggle.textContent = 'Tema Escuro';
    } else {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Tema Claro';
    }
});
