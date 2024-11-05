function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Função para aplicar a animação
function animateOnScroll() {
    const elements = document.querySelectorAll('.hidden'); // Elementos a serem animados

    elements.forEach((element) => {
        if (isInViewport(element)) {
            // Adiciona a classe de animação e remove a classe hidden
            if (element.classList.contains('fade-in')) {
                element.classList.remove('hidden');
                element.classList.add('fade-in');
            } else if (element.classList.contains('slide-up')) {
                element.classList.remove('hidden');
                element.classList.add('slide-up');
            }
        }
    });
}

// Adiciona o evento de scroll e executa uma vez no carregamento
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);