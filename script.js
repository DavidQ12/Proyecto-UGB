$(document).ready(function () {
    // Scroll suave
    $('nav ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const targetId = $(this).attr('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });

    // Efecto de aparición al hacer scroll
    const sections = $('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.each(function () {
        observer.observe(this);
    });

    // Acordeón
    $('.acordeon-btn').on('click', function () {
        $(this).next('.acordeon-contenido').toggleClass('activo');
    });

    // Validación del formulario de login
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Datos de usuario y contraseña (simulados)
        const validUsername = "ugbhub";
        const validPassword = "123456";

        // Obtener valores del formulario
        const username = $('#username').val();
        const password = $('#password').val();

        // Validar credenciales
        if (username === validUsername && password === validPassword) {
            // Redirigir al portafolio si las credenciales son correctas
            window.location.href = "portafolio.html";
        } else {
            // Mostrar mensaje de error
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    });
})