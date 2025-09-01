// EFEITO PARA COLOCAR A IMAGEM NA TELA PRINCIPAL AO PASSAR O MOUSE SOBRE O CARD NA ABA MODALIDADES//

document.addEventListener('DOMContentLoaded', function () {
  const fundo3 = document.querySelector('.fundo3');

  // Cria o container do texto uma única vez
  let textoDiv = document.createElement('div');
  textoDiv.classList.add('texto');
  fundo3.appendChild(textoDiv);

  const cards = [
    {
      selector: '.m1',
      imagem: '/css/imagens/gym.jpg',
      texto: '5 academias modernas, equipadas com aparelhos de última geração para saúde e condicionamento físico.'
    },
    {
      selector: '.m2',
      imagem: '/css/imagens/tenis.jpeg',
      texto: '8 quadras de tênis profissionais, ideais para treinos, torneios e lazer.'
    },
    {
      selector: '.m3',
      imagem: '/css/imagens/futebol.jpg',
      texto: '3 campos de futebol com gramado natural, perfeitos para jogos e campeonatos.'
    },
    {
      selector: '.m4',
      imagem: '/css/imagens/pool.jpg',
      texto: '5 piscinas aquecidas, incluindo piscinas olímpicas e recreativas para todas as idades.'
    },
    {
      selector: '.m5',
      imagem: '/css/imagens/golf.jpg',
      texto: '1 campo de golfe profissional com 18 buracos, para os amantes do esporte e do lazer.'
    },
    {
      selector: '.m6',
      imagem: '/css/imagens/basquete.jpg',
      texto: '4 quadras de basquete cobertas, para treinos e partidas entre associados.'
    },
    {
      selector: '.m7',
      imagem: '/css/imagens/judo.jpg',
      texto: '2 dojôs climatizados para aulas de judô, karatê e artes marciais diversas.'
    },
    {
      selector: '.m8',
      imagem: '/css/imagens/tenisdemesa.jpg',
      texto: '6 mesas de tênis de mesa para partidas rápidas e momentos de descontração.'
    },
    {
      selector: '.m9',
      imagem: '/css/imagens/volei.jpg',
      texto: '3 quadras de vôlei de areia e 2 quadras cobertas para jogos em equipe.'
    },
    {
      selector: '.m10',
      imagem: '/css/imagens/massagem.jpg',
      texto: '3 salas de massagem e spa, oferecendo conforto e relaxamento em um ambiente exclusivo.'
    }
  ];

  const imagemPadrao = "/css/imagens/fundo3.jpg";

  // Inicializa fundo e texto
  fundo3.style.backgroundImage = `url('${imagemPadrao}')`;
  fundo3.style.backgroundSize = 'cover';
  fundo3.style.backgroundPosition = 'center';
  fundo3.style.backgroundRepeat = 'no-repeat';
  textoDiv.textContent = 'Navegue sobre os cards para saber mais.';

  cards.forEach(card => {
    const elemento = document.querySelector(card.selector);
    if (elemento) {
      elemento.addEventListener('mouseenter', () => {
        fundo3.style.backgroundImage = `url('${card.imagem}')`;
        fundo3.style.backgroundSize = '100% auto';
        fundo3.style.backgroundPosition = 'left center';
        fundo3.style.backgroundRepeat = 'no-repeat';

        textoDiv.textContent = card.texto;
      });

      elemento.addEventListener('mouseleave', () => {
        fundo3.style.backgroundImage = `url('${imagemPadrao}')`;
        fundo3.style.backgroundSize = 'cover';
        fundo3.style.backgroundPosition = 'center';
        fundo3.style.backgroundRepeat = 'no-repeat';

        textoDiv.textContent = 'Navegue sobre os cards para saber mais.';
      });
    }
  });
});
