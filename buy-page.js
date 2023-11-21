let currentIndex = 0;
    const fotos = document.querySelectorAll('.foto');

    function showFoto(index) {
        fotos.forEach((foto, i) => {
            if (i === index) {
                foto.style.display = 'block';
            } else {
                foto.style.display = 'none';
            }
        });
    }

    function changeBanner() {
        currentIndex = (currentIndex + 1) % fotos.length;
        showFoto(currentIndex);
    }