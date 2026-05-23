/* =====================================================
   CHICO'S BURGUER - BUSCAR PEDIDO
   Filtragem da tabela por nome
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const campoFiltro = document.querySelector('#filtrar-tabela');

  if (!campoFiltro) return;

  campoFiltro.addEventListener('input', function () {
    const clientes = document.querySelectorAll('.clientes');
    const filtro = this.value;

    if (filtro.length > 0) {
      for (let cli = 0; cli < clientes.length; cli++) {
        const cliente = clientes[cli];
        const tdNome = cliente.querySelector('.nome');
        if (!tdNome) continue;

        const nome = tdNome.textContent;
        const expressao = new RegExp(filtro, 'i');

        if (!expressao.test(nome)) {
          cliente.classList.add('invisivel');
        } else {
          cliente.classList.remove('invisivel');
        }
      }
    } else {
      // Sem filtro: exibe todos
      for (let cli = 0; cli < clientes.length; cli++) {
        clientes[cli].classList.remove('invisivel');
      }
    }
  });
});
