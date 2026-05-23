/* =====================================================
   CHICO'S BURGUER - PRODUTOS PAGE
   Popup de detalhes do produto
   ===================================================== */

const popup = document.getElementById("popupDetalhes");
const popupNome = document.getElementById("popup-nome");
const popupDescricao = document.getElementById("popup-descricao");
const popupPreco = document.getElementById("popup-preco");
const popupClose = document.getElementById("popupClose");

const popupImg = document.getElementById("popup-img");

function abrirDetalhes(nome, descricao, preco, imagem) {
  popupNome.textContent = nome;
  popupDescricao.textContent = descricao;
  popupPreco.textContent = preco;
  if (popupImg && imagem) {
    popupImg.src = imagem;
    popupImg.alt = nome;
  }
  popup.classList.add("active");
  document.body.style.overflow = "hidden";
}

function fecharPopup() {
  popup.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", function () {
  // Fechar ao clicar no X
  if (popupClose) {
    popupClose.addEventListener("click", fecharPopup);
  }

  // Fechar ao clicar fora do conteúdo
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) fecharPopup();
    });
  }

  // Fechar com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup && popup.classList.contains("active")) {
      fecharPopup();
    }
  });
});
