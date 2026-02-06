// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // ==============================
    // MENU TOGGLE (RESPONSIVO)
    // ==============================
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    const icon = menuToggle ? menuToggle.querySelector("i") : null;

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", (e) => {
            // Previne comportamentos estranhos no mobile
            e.stopPropagation(); 
            
            nav.classList.toggle("active");
            menuToggle.classList.toggle("open");

            // Alterna o ícone (Bars <-> Xmark)
            if (icon) {
                if (nav.classList.contains("active")) {
                    icon.className = "fa-solid fa-xmark";
                } else {
                    icon.className = "fa-solid fa-bars";
                }
            }
        });

        // FECHAR MENU AO CLICAR EM QUALQUER LINK
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuToggle.classList.remove("open");
                if (icon) icon.className = "fa-solid fa-bars";
            });
        });

        // FECHAR MENU AO CLICAR FORA (Melhor usabilidade)
        document.addEventListener("click", (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove("active");
                menuToggle.classList.remove("open");
                if (icon) icon.className = "fa-solid fa-bars";
            }
        });
    }

    // ==============================
    // FORMULÁRIO DE LEADS
    // ==============================
    const form = document.getElementById("leadForm");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const nomeInput = form.querySelector('input[type="text"]');
            const whatsappInput = form.querySelector('input[type="tel"]');

            const nome = nomeInput.value.trim();
            const whatsappCliente = whatsappInput.value.trim();

            if (!nome || !whatsappCliente) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // --- SEU WHATSAPP (LUCAS) ---
            const meuNumero = "5599999999999"; 
            
            const mensagem = `Olá Lucas! Meu nome é ${nome} (Tel: ${whatsappCliente}) e gostaria de agendar uma aula experimental.`;
            const linkWhatsApp = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;

            alert(`Obrigado, ${nome}! Redirecionando...`);
            window.open(linkWhatsApp, "_blank");
            form.reset();
        });
    }
});