// EFEITO PARA COLOCAR A IMAGEM NA TELA PRINCIPAL AO PASSAR O MOUSE SOBRE O CARD NA ABA INICIO

document.addEventListener('DOMContentLoaded', () => {
  const fundo1 = document.querySelector('.fundo1');

  let overlay = document.createElement('div');
  overlay.classList.add('plano-overlay');

  // Criar o elemento de legenda
  const legenda = document.createElement('div');
  legenda.classList.add('legenda');

  overlay.appendChild(legenda);
  fundo1.appendChild(overlay);

  const textoPadrao = "Navegue sobre os cards para saber mais";
  const imagemPadrao = 'css/imagens/c.jpg';

  // Configuração inicial da imagem de fundo
  fundo1.style.backgroundImage = `url('${imagemPadrao}')`;
  fundo1.style.backgroundSize = 'cover';
  fundo1.style.backgroundPosition = 'center';
  fundo1.style.backgroundRepeat = 'no-repeat';

  // Inserir texto padrão na legenda
  legenda.innerHTML = textoPadrao.replace(/\n/g, '<br>');

  const cards = [
    {
      selector: '.silver',
      imagem: 'css/imagens/s1.jpg',
      texto: "Silver: academia, tênis de mesa, vôlei e piscina.\nClique para saber mais."
    },
    {
      selector: '.gold',
      imagem: 'css/imagens/g1.jpg',
      texto: "Gold: inclui Silver + tênis, judô e futebol.\nClique para saber mais."
    },
    {
      selector: '.platinum',
      imagem: 'css/imagens/p1.jpg',
      texto: "Platinum: inclui Gold + golfe e massagem grátis.\nClique para saber mais."
    },
    {
      selector: '.diamond',
      imagem: 'css/imagens/d1.jpg',
      texto: "Diamond: todos os esportes ilimitados e benefícios VIP.\nClique para saber mais."
    },
    {
      selector: '.precosi',
      imagem: 'css/imagens/gym.jpg',
      texto: "Academia moderna para manter sua saúde.\nClique para saber mais."
    },
    {
      selector: '.precogo',
      imagem: 'css/imagens/tenis.jpg',
      texto: "Quadras de tênis para diversão e competição.\nClique para saber mais."
    },
    {
      selector: '.precopla',
      imagem: 'css/imagens/futebol.jpg',
      texto: "Campo de futebol para jogos emocionantes.\nClique para saber mais."
    },
    {
      selector: '.precodi',
      imagem: 'css/imagens/pool.jpg',
      texto: "Piscina aquecida para lazer e exercícios.\nClique para saber mais."
    }
  ];

  cards.forEach(card => {
    const elemento = document.querySelector(card.selector);
    if (!elemento) return;

    elemento.addEventListener('mouseenter', () => {
      fundo1.style.backgroundImage = `url('${card.imagem}')`;
      legenda.innerHTML = card.texto.replace(/\n/g, '<br>');
      overlay.classList.add('ativo');
    });

    elemento.addEventListener('mouseleave', () => {
      fundo1.style.backgroundImage = `url('${imagemPadrao}')`;
      legenda.innerHTML = textoPadrao.replace(/\n/g, '<br>');
      overlay.classList.remove('ativo');
    });
  });
});
