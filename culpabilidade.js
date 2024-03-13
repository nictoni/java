function verificarCulpabilidade() {
    let pontuacao = 0;

    for (let i = 1; i <= 5; i++) {
        const checkboxSim = document.querySelector(`input[name="resposta${i}"]:checked`);

        if (checkboxSim) {
            pontuacao++;
        }
    }

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