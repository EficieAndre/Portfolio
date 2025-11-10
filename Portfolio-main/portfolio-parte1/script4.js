document.addEventListener("DOMContentLoaded", function () {
    // ----- Rolagem suave -----
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ----- Carrosséis múltiplos -----
    const carrosseis = document.querySelectorAll(".carrossel");

    carrosseis.forEach(carrossel => {
        const slides = carrossel.querySelectorAll(".carrossel__item");
        const btnProximo = carrossel.querySelector(".carrossel__botao.proximo");
        const btnAnterior = carrossel.querySelector(".carrossel__botao.anterior");
        let slideAtual = 0;

        function mostrarSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("ativo", i === index);
            });
        }

        if (btnProximo && btnAnterior) {
            btnProximo.addEventListener("click", () => {
                slideAtual = (slideAtual + 1) % slides.length;
                mostrarSlide(slideAtual);
            });

            btnAnterior.addEventListener("click", () => {
                slideAtual = (slideAtual - 1 + slides.length) % slides.length;
                mostrarSlide(slideAtual);
            });
        }

        // Avanço automático a cada 5 segundos (independente por carrossel)
        setInterval(() => {
            slideAtual = (slideAtual + 1) % slides.length;
            mostrarSlide(slideAtual);
        }, 5000);
    });
});
