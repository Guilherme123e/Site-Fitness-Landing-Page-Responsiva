const imageData = [
  //EFEITO PARA PASSAR IMAGEM PARA O LADO NA ABA MODALIDADES

  {
    selector: 'm1',
    imagem: 'imagens/gym.jpg',
    texto: '5 academias modernas, equipadas com aparelhos de última geração para saúde e condicionamento físico.'
  },
  {
    selector: 'm2',
    imagem: 'imagens/tenis.jpg',
    texto: '8 quadras de tênis profissionais, ideais para treinos, torneios e lazer.'
  },
  {
    selector: 'm3',
    imagem: 'imagens/futebol.jpg',
    texto: '3 campos de futebol com gramado natural, perfeitos para jogos e campeonatos.'
  },
  {
    selector: 'm4',
    imagem: 'imagens/pool.jpg',
    texto: '5 piscinas aquecidas, incluindo piscinas olímpicas e recreativas para todas as idades.'
  },
  {
    selector: 'm5',
    imagem: 'imagens/golf.jpg',
    texto: '1 campo de golfe profissional com 18 buracos, para os amantes do esporte e do lazer.'
  },
  {
    selector: 'm6',
    imagem: 'imagens/basquete.jpg',
    texto: '4 quadras de basquete cobertas, para treinos e partidas entre associados.'
  },
  {
    selector: 'm7',
    imagem: 'imagens/judo.jpg',
    texto: '2 dojôs climatizados para aulas de judô, karatê e artes marciais diversas.'
  },
  {
    selector: 'm8',
    imagem: 'imagens/tenisdemesa.jpg',
    texto: '6 mesas de tênis de mesa para partidas rápidas e momentos de descontração.'
  },
  {
    selector: 'm9',
    imagem: 'imagens/volei.jpg',
    texto: '3 quadras de vôlei de areia e 2 quadras cobertas para jogos em equipe.'
  },
  {
    selector: 'm10',
    imagem: 'imagens/massagem.jpg',
    texto: '3 salas de massagem e spa, oferecendo conforto e relaxamento em um ambiente exclusivo.'
  }
];

let current = 0;

const imageDisplay = document.getElementById('image-display');
const imageText = document.getElementById('image-text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateImage() {
  // Remove todas as classes m1, m2, ..., m10
  imageDisplay.className = '';
  const currentData = imageData[current];
  imageDisplay.classList.add(currentData.selector);
  imageText.textContent = currentData.texto;
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + imageData.length) % imageData.length;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % imageData.length;
  updateImage();
});

// Inicializa a primeira imagem
updateImage();
