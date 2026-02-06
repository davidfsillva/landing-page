// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {

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
