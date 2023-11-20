document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".content");

  document.getElementById("btnApresentacao").addEventListener("click", function () {
    scrollToSection("apresentacao");
  });

  document.getElementById("btnEducacao").addEventListener("click", function () {
    scrollToSection("educacao");
  });

  document.getElementById("btnHabilidades").addEventListener("click", function () {
    scrollToSection("habilidades");
  });

  document.getElementById("btnProjetos").addEventListener("click", function () {
    scrollToSection("projetos");
  });

  function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    mainContent.scrollLeft = targetSection.offsetLeft;
  }
});
