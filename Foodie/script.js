const images = [
    'assets/pic7.png',
    'assets/pic8.png',
    'assets/pic1.png' 
];

let currentImageIndex = 0;
const imageElement = document.getElementById('slider-image');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Change every 3 seconds
