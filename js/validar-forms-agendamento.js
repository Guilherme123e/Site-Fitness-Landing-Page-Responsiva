// VALIDA O FORMS DA ABA AGENDAMENTO//

document.addEventListener('DOMContentLoaded', function () {
  const msg = document.getElementById('msg');

  function mostrarMensagem(texto, tipo) {
    msg.textContent = texto;
    msg.className = tipo; // 'erro', 'sucesso', 'preencher'
    msg.style.display = 'flex'; // sempre exibe com flex para centralizar
  }

  // Mostra mensagem inicial
  mostrarMensagem('Preencha o formulário', 'preencher');

  document.getElementById('meuForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('NOME').value.trim();
    const telefone = document.getElementById('TELEFONE').value.trim();
    const email = document.getElementById('E-MAIL').value.trim();

    if (!nome) {
      mostrarMensagem('Preencha o nome', 'erro');
      return;
    }
    if (!telefone || !/^\d{10,11}$/.test(telefone.replace(/\D/g, ''))) {
      mostrarMensagem('Preencha um telefone válido (10 ou 11 números)', 'erro');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      mostrarMensagem('Preencha um e-mail válido', 'erro');
      return;
    }

    mostrarMensagem('Enviado! - Entraremos em contato', 'sucesso');
    // this.submit(); // Descomente se quiser enviar o form depois da validação
  });
});
