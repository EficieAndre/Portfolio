const modal = document.getElementById("modalInfo");
  const abrirBtn = document.getElementById("abrirModal");
  const fecharBtn = document.getElementById("fecharModal");

  abrirBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  fecharBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fecha o modal ao clicar fora dele
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });