
// Seleciona o botão e o body
const botao = document.getElementById("alternarModo");
const corpo = document.body;

// Adiciona um evento de clique ao botão
botao.addEventListener("click", () => {
  // Alterna entre as classes 'claro' e 'escuro'
  if (corpo.classList.contains("claro")) {
    corpo.classList.remove("claro");
    corpo.classList.add("escuro");
    botao.textContent = "Alternar para Claro";
  } else {
    corpo.classList.remove("escuro");
    corpo.classList.add("claro");
    botao.textContent = "Alternar para Escuro";
  }
});

