let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Rolando para baixo
    document.getElementById("appbar").style.top = "-70px"; // Esconde a barra
  } else {
    // Rolando para cima
    document.getElementById("appbar").style.top = "0"; // Mostra a barra
  }

  lastScrollTop = currentScroll;
});
