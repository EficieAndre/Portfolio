// ====== Mensagem dinâmica de boas-vindas ======
        const mensagem = document.getElementById("mensagemBoasVindas");
        const hora = new Date().getHours();
        let texto = "";

        if (hora < 12) {
            texto = "Bom dia, visitante!";
        } else if (hora < 18) {
            texto = "Boa tarde!";
        } else {
            texto = "Boa noite!";
        }

        mensagem.textContent = texto;