
const footer = document.querySelector('.js-footer');
const sidebars = document.querySelectorAll('.js-sidebar');

const observer = new IntersectionObserver(
    ([entry]) => {
        sidebars.forEach((sidebar) => {
            if (entry.isIntersecting) {
                sidebar.classList.add('is-hidden');
            } else {
                sidebar.classList.remove('is-hidden');
            }
        });
    },
    {
        root: null, // viewport
        threshold: 0.1, // коли хоча б 10% футера видно
    }
);

if (footer) {
    observer.observe(footer);
}
