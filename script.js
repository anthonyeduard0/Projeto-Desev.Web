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
/*Dark mode*/
const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");

});
/*Dark mode*/


    // Adicione ou remova a classe 'dark' em outras seções conforme necessário
    // Exemplo:
    // document.getElementById('banner').classList.toggle('dark');
    // document.getElementById('footer-content').classList.toggle('dark');
    // ...


function enviarEmail() {
    // Obtém o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Verifica se o e-mail é válido (pode adicionar mais validações se necessário)
    if (isValidEmail(email)) {
        // Limpa o campo de e-mail
        document.getElementById('email').value = '';

        // Aqui você pode adicionar lógica para enviar o e-mail ou realizar outras ações
        console.log('E-mail enviado com sucesso:', email);
    } else {
        // Exibe uma mensagem de erro ou realiza outra ação, se o e-mail não for válido
        alert('Por favor, insira um endereço de e-mail válido.');
    }
}

function isValidEmail(email) {
    // Adicione aqui a lógica de validação do e-mail (pode ser uma expressão regular, etc.)
    // Este é um exemplo simples que verifica se o e-mail possui um formato básico
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

// Parte do Modal//
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () =>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

//Modal Florianopolis
const openModalButtonf = document.querySelector("#open-modalf");
const closeModalButtonf = document.querySelector("#close-modalf");
const modalf = document.querySelector("#modalf");
const fadef = document.querySelector("#fadef");
const toggleModalf = () =>{
    modalf.classList.toggle("hidef");
    fadef.classList.toggle("hidef");
}

[openModalButtonf, closeModalButtonf, fadef].forEach((el) => {
    el.addEventListener("click", () => toggleModalf());
});
//Modal Porto de Galinhas
const openModalButtonp = document.querySelector("#open-modalp");
const closeModalButtonp = document.querySelector("#close-modalp");
const modalp = document.querySelector("#modalp");
const fadep = document.querySelector("#fadep");
const toggleModalp = () =>{
    modalp.classList.toggle("hidep");
    fadep.classList.toggle("hidep");
}

[openModalButtonp, closeModalButtonp, fadep].forEach((el) => {
    el.addEventListener("click", () => toggleModalp());
});
