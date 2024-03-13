document.addEventListener('DOMContentLoaded', function () {
    const sortearButton = document.querySelector(".botao-sortear");

    sortearButton.addEventListener('click', Jogar);

    function Jogar() {
        const jogador1 = document.querySelector(".Player1");
        const jogador2 = document.querySelector(".Player2");

        const escolhaJogador1 = jogador1.value.toLowerCase();
        const escolhaJogador2 = jogador2.value.toLowerCase();

        if (escolhaJogador1 === "pedra" || escolhaJogador1 === "papel" || escolhaJogador1 === "tesoura") {
            if (escolhaJogador2 === "pedra" || escolhaJogador2 === "papel" || escolhaJogador2 === "tesoura") {
                // Ambos os jogadores fizeram escolhas válidas
                DeterminarResultado(escolhaJogador1, escolhaJogador2);
            } else {
                alert("Jogador 2 fez uma escolha inválida. Por favor, escolha pedra, papel ou tesoura.");
            }
        } else {
            alert("Jogador 1 fez uma escolha inválida. Por favor, escolha pedra, papel ou tesoura.");
        }
    }

    function DeterminarResultado(escolhaJogador1, escolhaJogador2) {
        // Lógica para determinar o vencedor e exibir o resultado
        let resultado = "";

        if (escolhaJogador1 === escolhaJogador2) {
            resultado = "Empate!";
        } else if (
            (escolhaJogador1 === "pedra" && escolhaJogador2 === "tesoura") ||
            (escolhaJogador1 === "papel" && escolhaJogador2 === "pedra") ||
            (escolhaJogador1 === "tesoura" && escolhaJogador2 === "papel")
        ) {
            resultado = "Jogador 1 vence!";
        } else {
            resultado = "Jogador 2 vence!";
        }

        // Exibir o resultado
        alert(resultado);
    }
});

