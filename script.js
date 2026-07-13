const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const certModal = document.getElementById('certModal');
const certImage = document.getElementById('certImage');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
        certImage.src = card.dataset.cert;
        certModal.classList.add('open');
        certModal.setAttribute('aria-hidden', 'false');
    });
});

function closeModal(){
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    certImage.src = '';
}

modalClose.addEventListener('click', closeModal);
certModal.addEventListener('click', (e) => {
    if(e.target === certModal) closeModal();
});

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.project-link').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});
