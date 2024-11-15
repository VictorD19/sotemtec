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
function scroll() {

    var section = document.getElementById('formularioContato');

    section.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
    });
}
function enviarFormulario(event) {
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const projeto = document.getElementById('projeto').value;
    const descricao = document.getElementById('descricao').value;

    // Formata a mensagem para o WhatsApp
    const mensagem = `
      *Ola gostaria de fazer um orçamento*
      
      *Nome*: ${nome}
      *Celular*: ${celular}
      *E-mail*: ${email}
      *Projeto*: ${projeto}
      *Descrição*: ${descricao}
    `;

    // Codifica a mensagem para ser enviada na URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Número do WhatsApp
    const numeroWhatsApp = '49998218294';

    // URL para abrir o WhatsApp com a mensagem preencheda
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Abre a URL no navegador (fazendo o redirecionamento para o WhatsApp)
    window.open(urlWhatsApp, '_blank');
  }


window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.getElementById("scrollBtnFaleconoco").addEventListener('click',scroll)
document.getElementById('scrollBtn').addEventListener('click', scroll);