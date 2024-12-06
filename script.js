document.querySelector('.contact-btn').addEventListener('click', function () {
  const phone = "5491122544870";
  const message = encodeURIComponent("¡Hola! Me gustaría más información.");
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
});
