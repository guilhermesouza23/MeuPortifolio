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

    document.getElementById("submitBtn").addEventListener("click", function () {
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  // Aqui você pode enviar os dados para o seu servidor ou enviar por e-mail usando um serviço backend
  // Por enquanto, vamos apenas exibir os dados no console para fins de demonstração
  for (const pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  // Limpar o formulário após enviar
  form.reset();
      document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".content");

  // ... Seções anteriores

  document.getElementById("btnContato").addEventListener("click", function () {
    scrollToSection("contato");
  });

  document.getElementById("submitBtn").addEventListener("click", function () {
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    // Aqui você pode enviar os dados para o seu servidor ou enviar por e-mail usando um serviço backend
    // Por enquanto, vamos apenas exibir os dados no console para fins de demonstração
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Limpar o formulário após enviar
    form.reset();
  });
});

});
  }
});
