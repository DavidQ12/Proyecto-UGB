document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de aparición al hacer scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Acordeón
    const acordeonBtns = document.querySelectorAll('.acordeon-btn');
    acordeonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const contenido = btn.nextElementSibling;
            contenido.classList.toggle('activo');
        });
    });
});
