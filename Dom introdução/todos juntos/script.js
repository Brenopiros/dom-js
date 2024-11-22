
// script.js
const jogadores = [];

document.getElementById('escalarBtn').addEventListener('click', () => {
    const posicao = document.getElementById('posicao').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const numero = document.getElementById('numero').value.trim();

    if (!posicao || !nome || !numero) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (confirm(`Você tem certeza que deseja escalar ${nome} (${posicao}, número ${numero})?`)) {
        jogadores.push({ posicao, nome, numero });
        atualizarLista();
        limparCampos();
    }
});

document.getElementById('removerBtn').addEventListener('click', () => {
    const numeroRemover = document.getElementById('numeroRemover').value.trim();

    if (!numeroRemover) {
        alert('Por favor, insira um número.');
        return;
    }

    const index = jogadores.findIndex(jogador => jogador.numero === numeroRemover);

    if (index === -1) {
        alert('Jogador não encontrado.');
        return;
    }

    if (confirm(`Você tem certeza que deseja remover o jogador de número ${numeroRemover}?`)) {
        jogadores.splice(index, 1);
        atualizarLista();
    }
});

function atualizarLista() {
    const lista = document.getElementById('listaJogadores');
    lista.innerHTML = '';

    jogadores.forEach(jogador => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome} - ${jogador.posicao} (Número: ${jogador.numero})`;
        lista.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById('posicao').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
}

document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

