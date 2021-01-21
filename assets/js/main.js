document.body.classList.add('loading');
window.addEventListener('load', () => {
    window.setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);
});

const toggle = document.getElementById('nav_menu_toggle');
const menu = document.getElementById('nav_menu');

toggle.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('show');
    let isVisible = menu.classList.contains('show');
    toggle.setAttribute('aria-expanded', String(isVisible))
})