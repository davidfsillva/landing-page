// ==============================
// MENU TOGGLE (RESPONSIVO)
// ==============================
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");

  // Animação do ícone ☰ → ✕
  if (menuToggle.classList.contains("open")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

// FECHAR MENU AO CLICAR EM LINK (mobile)
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.textContent = "☰";
    }
  });
});

// ==============================
// FORMULÁRIO DE LEADS
// ==============================
const form = document.getElementById("leadForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value.trim();
  const whatsapp = form.querySelector('input[type="tel"]').value.trim();

  // Validação simples do número de WhatsApp (apenas dígitos)
  const numeroValido = /^\d{10,15}$/.test(whatsapp.replace(/\D/g, ""));

  if (!nome || !whatsapp) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!numeroValido) {
    alert("Digite um número de WhatsApp válido (somente números, DDD + número).");
    return;
  }

  // Simulação de envio para WhatsApp
  const mensagem = `Olá, meu nome é ${nome} e quero agendar uma aula experimental.`;
  const linkWhatsApp = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`;

  // Abrir WhatsApp em nova aba
  window.open(linkWhatsApp, "_blank");

  // Feedback visual e reset do formulário
  alert(`Obrigado, ${nome}! Você será redirecionado para o WhatsApp.`);
  form.reset();
});
