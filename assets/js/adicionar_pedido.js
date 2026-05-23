/* CHICO'S BURGUER - ADICIONAR PEDIDO */

document.addEventListener("DOMContentLoaded", function () {
  const botaoAdicionar = document.querySelector("#adicionar");

  if (!botaoAdicionar) return;

  botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.querySelector("#formulario-de-pedido");
    const novoPedido = obtemPedido(form);

    // Validação
    if (
      !novoPedido.nome ||
      !novoPedido.servico ||
      !novoPedido.qtd ||
      !novoPedido.unitario
    ) {
      alert("Por favor, preencha todos os campos do pedido.");
      return;
    }

    if (parseInt(novoPedido.qtd) < 1 || isNaN(novoPedido.qtd)) {
      alert("Quantidade inválida! Informe um número maior que zero.");
      return;
    }

    if (parseFloat(novoPedido.unitario) <= 0 || isNaN(novoPedido.unitario)) {
      alert("Valor unitário inválido!");
      return;
    }

    adicionaPedido(novoPedido);
    form.reset();

    // Feedback visual
    alert("Pedido adicionado com sucesso! 🍔");
  });
});

// Captura dados do formulário
function obtemPedido(formulario) {
  return {
    nome: formulario.nome.value.trim(),
    qtd: formulario.qtd.value.trim(),
    servico: formulario.servico.value.trim(),
    unitario: formulario.unitario.value.trim(),
  };
}

// Adiciona nova linha na tabela
function adicionaPedido(dados) {
  const tabela = document.querySelector("#tabela-clientes");
  tabela.appendChild(montaTR(dados));
}

// Cria nova linha (TR)
function montaTR(dados) {
  const linha = document.createElement("tr");
  linha.classList.add("clientes");

  linha.appendChild(montaTD(dados.nome, "nome"));
  linha.appendChild(montaTD(dados.servico, "servico"));
  linha.appendChild(montaTD(dados.qtd, "qtd"));
  linha.appendChild(
    montaTD(formata_valor(parseFloat(dados.unitario)), "unitario"),
  );
  linha.appendChild(montaTD(calcula_total(dados.qtd, dados.unitario), "total"));

  return linha;
}

// Cria coluna (TD)
function montaTD(dado, classeCSS) {
  const coluna = document.createElement("td");
  coluna.textContent = dado;
  if (classeCSS) coluna.classList.add(classeCSS);
  return coluna;
}
