//Seleciona a lista e o botão pelo ID
const lista = document.getElementById("lista");
const botaoRemover = document.getElementById("remover");

// Adiciona um evento ao botão
botaoRemover.addEventListener("click", () => {
  if (lista.lastChild) { // Verifica se há um último elemento na lista
    lista.removeChild(lista.lastChild); // Remove o último item
  }
});

