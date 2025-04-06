function jogar() {
  idade = prompt("Quantos anos você tem?");
  if (idade < 18) {
    alert("Você está proibido de jogar! Volte quando tiver mais de 18 anos");
  }

  if (idade >= 18) {
    alert("Vamos jogar! Aperte OK para continuar");
    escolhaJogador = prompt(
      "Qual sua escolha? \n1- Infantaria \n2- Cavalaria \n3- Atiradores"
    );
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) {
      alert("Empate! Parabéns, você conseguiu não perder.");
    }

    if (escolhaJogador == 1) {
      if (escolhaComputador == 3) {
        alert("Você ganhou! Infantaria ganha dos Atiradores");
      }

      if (escolhaComputador == 2) {
        alert("Parabéns! Você perdeu, Infantaria perde para a Cavalaria");
      }
    }

    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        alert("Você ganhou! Cavalaria ganha da Infantaria");
      }

      if (escolhaComputador == 3) {
        alert("Parabéns! Você perdeu, Cavalaria perde para os Atiradores");
      }
    }

    if (escolhaJogador == 3) {
      if (escolhaComputador == 2) {
        alert("Você ganhou! Atiradores ganham da Cavalaria");
      }

      if (escolhaComputador == 1) {
        alert("Parabéns! Você perdeu, Atiradores perdem para a Infantaria");
      }
    }
  }
}