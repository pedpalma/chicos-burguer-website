/* =====================================================
   CHICO'S BURGUER - HERO SLIDER
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;
  const AUTO_DELAY = 6000;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, AUTO_DELAY);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      const i = parseInt(this.dataset.slide, 10);
      showSlide(i);
      resetAutoSlide();
    });
  });

  // Pausar slider ao passar o mouse
  const hero = document.querySelector('.hero_slider');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    hero.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
});
