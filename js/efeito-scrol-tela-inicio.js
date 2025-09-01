//SCRIPT DE SCROLL INTELIGENTE//

let lastScrollTop = window.scrollY;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  const direction = scrollTop > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollTop;

  if (direction === 'down' && scrollPercent > 10 && scrollPercent < 90) {
    window.scrollTo({ top: documentHeight, behavior: 'smooth' });
  }

  if (direction === 'up' && scrollPercent > 10 && scrollPercent > 90) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
