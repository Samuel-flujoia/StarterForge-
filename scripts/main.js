// Archivo ligero para interacciones mínimas
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Inserta año y autor si hay placeholders
  const footer = document.querySelector('.footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('[AÑO]', year).replace('[AUTOR]', '[TU NOMBRE]');
  }
});
