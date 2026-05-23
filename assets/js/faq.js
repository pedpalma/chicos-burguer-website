/* =====================================================
   CHICO'S BURGUER - FAQ ACCORDION
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq_item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq_question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha todos
      faqItems.forEach(i => i.classList.remove('open'));

      // Abre o clicado (se ainda não estava aberto)
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});
