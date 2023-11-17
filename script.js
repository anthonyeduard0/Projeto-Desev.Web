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

