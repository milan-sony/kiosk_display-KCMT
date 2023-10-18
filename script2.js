const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

var imgDiv = document.getElementById("img-background");
let currentIndex = 0;

function changeBackground() {
    // imgDiv.style.backgroundImage = `url('images/${images[currentIndex]}')`;
    imgDiv.style.backgroundImage= `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('images/${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

//Call changeBackground function immediately every 5000ms (5 second)
setInterval(changeBackground, 5000);