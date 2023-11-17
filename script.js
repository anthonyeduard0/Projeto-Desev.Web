let currentIndex = 0;
const images = document.querySelectorAll('#banner img');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Initial setup
showImage(currentIndex);

// Auto-rotate banner every 3 seconds
setInterval(nextImage, 3000);
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
}) 

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Adicione ou remova a classe 'dark' em outras seções conforme necessário
    // Exemplo:
    // document.getElementById('banner').classList.toggle('dark');
    // document.getElementById('footer-content').classList.toggle('dark');
    // ...
});
function enviarEmail() {
    // Obter o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Validar o e-mail (você pode adicionar sua lógica de validação aqui)

    // Enviar para algum lugar (por exemplo, exibir no console)
    console.log('E-mail enviado para: ' + email);

    // Limpar o campo de e-mail, se necessário
    document.getElementById('email').value = '';
}
