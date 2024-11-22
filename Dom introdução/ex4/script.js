
// Seleciona a caixa e o botão pelo ID
const caixa = document.getElementById("caixa");
const botao = document.getElementById("mudarCor");

// Adiciona um evento ao botão
botao.addEventListener("click", () => {
  if (caixa.classList.contains("vermelho")) {
    caixa.classList.remove("vermelho");
    caixa.style.backgroundColor = "blue";
  } else {
    caixa.classList.add("vermelho");
    caixa.style.backgroundColor = "red";
  }
});

