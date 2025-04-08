function jogo() {
  personagem = ["", "", ""];

  inimigos = ["", "", ""];

  vidaPersonagem = 0;
  vidaInimigos = 0;

  for (let i = 0; i < 3; i++) {
    listaPersonagens = [
      "Aang",
      "Katara",
      "Sokka",
      "Toph Beifong",
      "Zuko",
      "Uncle Iroh",
      "Suki",
      "Haru",
      "Teo",
      "Appa"
    ];
    let j = prompt(
      "Digite o número correspondente ao seu combatente " +
        (i + 1) +
        "\n1 - Aang\n2 - Katara\n3 - Sokka\n4 - Toph Beifong\n5 - Zuko\n6 - Uncle Iroh\n7 - Suki\n8 - Haru\n9 - Teo\n10 - Appa"
    );
    if (j > 0 && j <= 10) {
      personagem[i] = listaPersonagens[j];
      vidaPersonagem += Math.floor(Math.random() * 10) + 1;
      alert("Personagens escolhidos: " + personagem)
    } else {
      alert("Tente um número de 1 a 10");
      i--;
    }
  }

  for (let i = 0; i < 3; i++) {
    RandomizadorInimigos = Math.floor(Math.random() * 10);
    listaInimigos = [
      "Azula",
      "Fire Lord Ozai",
      "Mai",
      "Ty Lee",
      "Admiral Zhao",
      "Long Feng",
      "Dai Li Agents",
      "Combustion Man",
      "Hama",
      "General Fong"
    ];

    inimigos[i] = listaInimigos[RandomizadorInimigos];
    vidaInimigos += Math.floor(Math.random() * 10) + 1;
  }
  
  alert("Inimigos escolhidos: " + inimigos)

  while (vidaInimigos > 0 && vidaPersonagem > 0) {
    turno = Math.floor(Math.random() * 2);
    dano = Math.floor(Math.random() * 10) + 1;
    if (turno == 0) {
      vidaInimigos -= dano;
      alert(
        "Seu time deu " +
          dano +
          " de dano aos inimigos que agora estão com " +
          vidaInimigos +
          " de vida"
      );
    }

    if (turno == 1) {
      vidaPersonagem -= dano;
      alert(
        "Seu time recebeu " +
          dano +
          " de dano dos inimigos e agora está com " +
          vidaPersonagem +
          " de vida"
      );
    }
  }

  if (vidaInimigos <= 0) {
    alert(
      "Seu time venceu! Parabéns aos personagems: " +
        personagem +
        " por vencerem dos inimigos: " +
        inimigos +
        " e sobreviverem com " +
        vidaPersonagem +
        " de vida"
    );
  }

  if (vidaPersonagem <= 0) {
    alert(
      "Seu time perdeu! Parabéns aos inimigos: " +
        inimigos +
        " por vencerem dos personagems: " +
        personagem +
        " e sobreviverem com " +
        vidaInimigos +
        " de vida. Que fracasso!"
    );
  }
}
