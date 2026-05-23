/* =====================================================
   CHICO'S BURGUER - PEDIDOS
   Cálculo do total e formatação de valores
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  let clientes = document.querySelectorAll('.clientes');

  // Estrutura de repetição para passar por todos os pedidos
  for (let count = 0; count < clientes.length; count++) {

    // Quantidade
    let qtd = clientes[count].querySelector('.qtd').textContent;

    // Valor unitário
    let unitario = clientes[count].querySelector('.unitario').textContent;

    // Verifica se a qtd é válida
    if (qtd < 1 || isNaN(qtd)) {
      clientes[count].querySelector('.qtd').textContent = 'Inválido!';
      clientes[count].classList.add('linha-invalida');
    } else {
      // Verifica se o unitário é válido
      if (unitario < 0.01 || isNaN(unitario)) {
        clientes[count].querySelector('.unitario').textContent = 'Inválido!';
        clientes[count].classList.add('linha-invalida');
      } else {
        // Exibe o total formatado
        clientes[count].querySelector('.total').textContent = calcula_total(qtd, unitario);
        // Aplica formatação ao valor unitário
        clientes[count].querySelector('.unitario').textContent = formata_valor(parseFloat(unitario));
      }
    }
  }
});

// Função de cálculo do valor total
function calcula_total(qtd, unit) {
  let total = parseFloat(qtd) * parseFloat(unit);
  return formata_valor(total);
}

// Função de formatação para R$ (BRL)
function formata_valor(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Auto-preenche o valor unitário quando seleciona o produto
document.addEventListener('DOMContentLoaded', function () {
  const selectProduto = document.getElementById('servico');
  const inputUnitario = document.getElementById('unitario');

  if (selectProduto && inputUnitario) {
    selectProduto.addEventListener('change', function () {
      const option = this.options[this.selectedIndex];
      const preco = option.getAttribute('data-preco');
      if (preco) {
        inputUnitario.value = preco;
      }
    });
  }
});
