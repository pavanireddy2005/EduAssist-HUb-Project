const titles = document.querySelectorAll('.title');
let openInfo = null;

titles.forEach(t => {
    t.addEventListener('click', () => {
        const info = t.nextElementSibling;

        if (openInfo && openInfo !== info) {
            openInfo.classList.remove('open');
        }

        info.classList.toggle('open');
        openInfo = info.classList.contains('open') ? info : null;
    });
});

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        const info = target.querySelector('.info');

        if (openInfo && openInfo !== info) {
            openInfo.classList.remove('open');
        }

        info.classList.add('open');
        openInfo = info;
    });
});