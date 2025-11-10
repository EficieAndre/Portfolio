document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do menu que apontam para IDs internos
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // evita o salto instantâneo

            const targetId = this.getAttribute("href"); // ex: "#projetos"
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
