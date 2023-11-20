document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".content");

  document.getElementById("btnApresentacao").addEventListener("click", function () {
    scrollToSection(0);
  });

  document.getElementById("btnHistoria").addEventListener("click", function () {
    scrollToSection(1);
  });

  document.getElementById("btnEducacao").addEventListener("click", function () {
    scrollToSection(2);
  });

  document.getElementById("btnHabilidades").addEventListener("click", function () {
    scrollToSection(3);
  });

  function scrollToSection(sectionIndex) {
    const sections = document.querySelectorAll(".section");
    const targetSection = sections[sectionIndex];

    mainContent.scrollTo({
      left: targetSection.offsetLeft,
      behavior: 'smooth'
    });
  }
});
