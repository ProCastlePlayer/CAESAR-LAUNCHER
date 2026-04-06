const gamesData = {
  star: {
    title: "Star Guardian",
    desc: "Um jogo de tiro espacial épico! Enfrente hordas de inimigos e proteja a galáxia.",
    pc: "Setas (Mover) | Espaço (Atirar)",
    mobile: "Botões virtuais na tela",
    link: "https://procastleplayer.github.io/STAR-GUARDIAN---GAME/"
  },
  hacker: {
    title: "Hacker Simulator",
    desc: "Entre no sistema, burle firewalls e torne-se o mestre da rede.",
    pc: "Clique com o mouse",
    mobile: "Toque na tela",
    link: "https://procastleplayer.github.io/ProjetoBomDia/"
  },
  pixel: {
    title: "Super Pixel Drive",
    desc: "Corrida arcade com gráficos retrô. AINDA NÃO DISPONÍVEL",
    pc: "Setas para ir para os lados",
    mobile: "Em Breve",
    link: "#"
  }
};

function openModal(gameId) {
  const game = gamesData[gameId];
  
  document.getElementById('modalTitle').innerText = game.title;
  document.getElementById('modalDesc').innerText = game.desc;
  document.getElementById('pcControls').innerText = game.pc;
  document.getElementById('mobileControls').innerText = game.mobile;
  document.getElementById('playButton').href = game.link;
  
  document.getElementById('gameModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('gameModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('gameModal');
  if (event.target == modal) {
    closeModal();
  }
}
