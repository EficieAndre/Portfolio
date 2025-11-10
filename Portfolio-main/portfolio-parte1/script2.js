// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");
  const erroMensagem = document.getElementById("erro-mensagem");

  // Regex simples e confiável para e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(inputEl, erroEl, mensagemTexto) {
    erroEl.textContent = mensagemTexto;
    inputEl.classList.add("invalido");
    inputEl.classList.remove("valido");
  }

  function clearError(inputEl, erroEl) {
    erroEl.textContent = "";
    inputEl.classList.remove("invalido");
    inputEl.classList.add("valido");
  }

  function validateAll() {
    let valido = true;

    // Nome
    if (nome.value.trim() === "") {
      showError(nome, erroNome, "Por favor, preencha seu nome.");
      valido = false;
    } else {
      clearError(nome, erroNome);
    }

    // Email
    const emailValor = email.value.trim();
    if (emailValor === "") {
      showError(email, erroEmail, "Por favor, preencha seu e-mail.");
      valido = false;
    } else if (!emailRegex.test(emailValor)) {
      showError(email, erroEmail, "Por favor, insira um e-mail válido.");
      valido = false;
    } else {
      clearError(email, erroEmail);
    }

    // Mensagem
    if (mensagem.value.trim() === "") {
      showError(mensagem, erroMensagem, "Por favor, escreva uma mensagem.");
      valido = false;
    } else {
      clearError(mensagem, erroMensagem);
    }

    return valido;
  }

  // Validação ao submeter
  form.addEventListener("submit", function (event) {
    const ok = validateAll();

    if (!ok) {
      // impede envio apenas quando houver erro
      event.preventDefault();
      const primeiroErro = document.querySelector(".invalido");
      if (primeiroErro) primeiroErro.focus();
    } else {
      event.preventDefault();
alert("Mensagem enviada com sucesso!");
form.reset();
[nome, email, mensagem].forEach(el => el.classList.remove("valido"));
    }
  });

  // Limpa mensagem de erro enquanto o usuário digita
  [nome, email, mensagem].forEach((el) => {
    el.addEventListener("input", () => {
      const idErro = "erro-" + el.id;
      const erroEl = document.getElementById(idErro);
      if (!erroEl) return;

      if (el === nome) {
        if (el.value.trim() === "") showError(el, erroEl, "Por favor, preencha seu nome.");
        else clearError(el, erroEl);
      } else if (el === email) {
        const v = el.value.trim();
        if (v === "") showError(el, erroEl, "Por favor, preencha seu e-mail.");
        else if (!emailRegex.test(v)) showError(el, erroEl, "Por favor, insira um e-mail válido.");
        else clearError(el, erroEl);
      } else if (el === mensagem) {
        if (el.value.trim() === "") showError(el, erroEl, "Por favor, escreva uma mensagem.");
        else clearError(el, erroEl);
      }
    });
  });
});