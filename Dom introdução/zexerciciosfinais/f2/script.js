const caixa = document.getElementById('caixa');

// Definindo o evento de mouseover para mudar a cor de fundo
caixa.addEventListener('mouseover', function() {
    caixa.style.backgroundColor = 'red'; // Mudando para vermelho
});

// Definindo o evento de mouseout para voltar a cor original
caixa.addEventListener('mouseout', function() {
    caixa.style.backgroundColor = 'blue'; // Voltando para azul
});