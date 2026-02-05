// ==============================
// MENU TOGGLE (RESPONSIVO)
// ==============================
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Ícones do menu
const ICON_OPEN = "☰"; // ou qualquer emoji/símbolo
const ICON_CLOSE = "✕";

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");

  // Alterna o ícone
  menuToggle.textContent = menuToggle.classList.contains("open") ? ICON_CLOSE : ICON_OPEN;
});

// FECHAR MENU AO CLICAR EM LINK (mobile)
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.textContent = ICON_OPEN;
    }
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
  const whatsapp = whatsappInput.value.trim().replace(/\D/g, ""); // apenas números

  // Validação básica
  if (!nome || !whatsapp) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!/^\d{10,15}$/.test(whatsapp)) {
    alert("Digite um número de WhatsApp válido (somente números, DDD + número).");
    return;
  }

  // Cria link do WhatsApp
  const mensagem = `Olá, meu nome é ${nome} e quero agendar uma aula experimental.`;
  const linkWhatsApp = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

  // Abre WhatsApp em nova aba
  window.open(linkWhatsApp, "_blank");

  // Feedback visual
  alert(`Obrigado, ${nome}! Você será redirecionado para o WhatsApp.`);

  // Reseta formulário
  form.reset();
});
