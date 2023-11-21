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
    // Obter o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Validar o e-mail (você pode adicionar sua lógica de validação aqui)

    // Enviar para algum lugar (por exemplo, exibir no console)
    console.log('E-mail enviado para: ' + email);

    // Limpar o campo de e-mail, se necessário
    document.getElementById('email').value = '';
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