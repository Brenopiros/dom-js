
// Seleciona a lista e o botão pelo ID
const lista = document.getElementById("lista");
const botaoAdicionar = document.getElementById("adicionar");

// Adiciona um evento ao botão
botaoAdicionar.addEventListener("click", () => {
  const novoItem = document.createElement("li"); // Cria um novo elemento <li>
  novoItem.textContent = `Item ${lista.children.length + 1}`; // Define o texto do item
  lista.appendChild(novoItem); // Adiciona o novo item à lista
});

