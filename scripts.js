// Se você decidir adicionar funcionalidades dinâmicas, este é o lugar para fazê-lo
// Por exemplo, se você quiser uma rolagem suave ao clicar em links internos

document.addEventListener('DOMContentLoaded', function () {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});
