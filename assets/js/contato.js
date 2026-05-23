/* =====================================================
   CHICO'S BURGUER - CONTATO PAGE
   Validação e envio simulado do formulário
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('frmContato');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nomesobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    // E-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, informe um e-mail válido.');
      return;
    }

    // Simulação de envio
    alert(
      'Obrigado, ' + nome.split(' ')[0] + '!\n\n' +
      'Sua mensagem foi enviada com sucesso. ' +
      'Entraremos em contato em breve pelo canal escolhido. 🍔'
    );

    form.reset();
  });

  // Máscara simples para telefone
  const telefone = document.getElementById('telefone');
  if (telefone) {
    telefone.addEventListener('input', function () {
      let v = this.value.replace(/\D/g, '');
      v = v.substring(0, 11);
      if (v.length > 6) {
        this.value = '(' + v.substring(0, 2) + ') ' + v.substring(2, 7) + '-' + v.substring(7);
      } else if (v.length > 2) {
        this.value = '(' + v.substring(0, 2) + ') ' + v.substring(2);
      } else {
        this.value = v;
      }
    });
  }
});
