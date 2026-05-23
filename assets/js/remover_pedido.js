/* =====================================================
   CHICO'S BURGUER - REMOVER PEDIDO
   Duplo clique na linha para excluir
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const tabela = document.querySelector('table');

  if (!tabela) return;

  tabela.addEventListener('dblclick', function (event) {
    const linha = event.target.parentNode;

    // Garante que estamos em uma linha de cliente
    if (!linha || !linha.classList.contains('clientes')) return;

    if (confirm('Deseja realmente apagar este pedido?')) {
      // Adiciona o efeito de fade out
      linha.classList.add('fadeOut');

      // Atrasa a exclusão real para a animação completar
      setTimeout(function () {
        linha.remove();
      }, 600);
    }
  });
});
