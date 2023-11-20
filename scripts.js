document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector("main");

  document.getElementById("btnApresentacao").addEventListener("click", function () {
    loadContent("apresentacao.html");
  });

  document.getElementById("btnHistoria").addEventListener("click", function () {
    loadContent("historia.html");
  });

  document.getElementById("btnEducacao").addEventListener("click", function () {
    loadContent("educacao.html");
  });

  document.getElementById("btnHabilidades").addEventListener("click", function () {
    loadContent("habilidades.html");
  });

  document.getElementById("btnProjetos").addEventListener("click", function () {
    loadContent("projetos.html");
  });

  document.getElementById("btnContato").addEventListener("click", function () {
    loadContent("contato.html");
  });

  function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        mainContent.innerHTML = html;
      });
  }
});
