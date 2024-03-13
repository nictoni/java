// Função para fazer uma pergunta e obter a resposta do usuário
function fazerPergunta(pergunta) {
    const resposta = prompt(pergunta).toLowerCase();
    return resposta === 'sim' ? 1 : 0;
}

// Função principal do programa
function verificarCulpabilidade() {
    let pontuacao = 0;

    // Perguntas e pontuações
    const perguntas = [
        'Mora perto da vítima?',
        'Já trabalhou com a vítima?',
        'Telefonou para a vítima?',
        'Esteve no local do crime?',
        'Devia para a vítima?'
    ];

    // Fazer cada pergunta e somar a pontuação
    for (let i = 0; i < perguntas.length; i++) {
        pontuacao += fazerPergunta(perguntas[i]);
    }

    // Verificar a culpabilidade com base na pontuação
    if (pontuacao === 5) {
        alert('Você é considerado o assassino!');
    } else if (pontuacao >= 3) {
        alert('Você é considerado cúmplice.');
    } else if (pontuacao >= 2) {
        alert('Você é apenas um suspeito, necessitando de mais investigações.');
    } else {
        alert('Você está liberado.');
    }
}

// Chamar a função principal para iniciar o questionário
verificarCulpabilidade();
