function jogar() {
  noite = 1;
  
  // Começa um loop de 5 noites
  while (noite <= 5) {
    // Solicita a porta escolhida do jogador
    escolhaJogador = prompt("Noite " + noite + ", escolha a porta a ser fechada \n1- Porta da Direita \n2- Porta da Esquerda \n3- Duto de Ventilação da direita\n4- Duto de Ventilação da frente");
    // Se o jogador colocar uma opção fora das disponíveis, irá pedir que insira novamente.
    if (escolhaJogador > 0 && escolhaJogador <= 4) {
      portaAnimatronic = Math.floor(Math.random() * 4) + 1;
      
      // Se o jogador escolher a porta correta, venceu! Se não. Perdeu!
      if (escolhaJogador == portaAnimatronic) {
        alert("O Animatronic te pegou! Você morreu...");
        break;
      } else {
        alert("Parabéns! Você fechou a porta correta. O animatronic estava nessa porta: " + portaAnimatronic);
      }

      noite++;
    } else {
      alert("Lembre-se! São 4 entradas!");
      continue;
    }
  }
  // Se o jogador ultrapassar as 5 noites, ganhou!
  if (noite == 6) {
    alert("Yaaay! Você sobreviveu as 5 noites!");
  }
}
