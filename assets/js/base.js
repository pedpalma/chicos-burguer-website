/* =====================================================
   CHICO'S BURGUER - BASE JS
   Hamburger menu + comportamentos globais
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // ============ HAMBURGER MENU ============
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    // Fechar nav ao clicar em um link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });

    // Fechar nav ao clicar fora
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
      }
    });
  }
});
