// ==============================
// MENU TOGGLE (RESPONSIVO)
// ==============================
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const icon = menuToggle.querySelector("i"); // Seleciona o ícone interno

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");

    // Alterna a classe do ícone do FontAwesome entre barras e X
    if (menuToggle.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// FECHAR MENU AO CLICAR EM LINK (mobile)
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// ==============================
// FORMULÁRIO DE LEADS
// ==============================
const form = document.getElementById("leadForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nomeInput = form.querySelector('input[type="text"]');
    const whatsappInput = form.querySelector('input[type="tel"]');

    const nome = nomeInput.value.trim();
    const whatsappCliente = whatsappInput.value.trim();

    // Validação básica
    if (!nome || !whatsappCliente) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // --- CONFIGURAÇÃO DO WHATSAPP ---
    // Substitua pelo SEU número (DDI + DDD + Número) sem espaços ou traços
    const meuNumero = "5599999999999"; 
    
    const mensagem = `Olá Lucas! Meu nome é ${nome} (Tel: ${whatsappCliente}) e gostaria de agendar uma aula experimental.`;
    const linkWhatsApp = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;

    // Feedback visual e Redirecionamento
    alert(`Obrigado, ${nome}! Redirecionando para o WhatsApp...`);
    window.open(linkWhatsApp, "_blank");

    // Reseta formulário
    form.reset();
});