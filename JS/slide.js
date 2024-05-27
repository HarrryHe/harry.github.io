let currentIndex = 1;
const totalSlides = 3;

function changeSlide() {
    document.getElementById('indicator' + currentIndex).checked = true;
    currentIndex++;
    if (currentIndex > totalSlides) {
        currentIndex = 1;
    }
}

setInterval(changeSlide, 5000);