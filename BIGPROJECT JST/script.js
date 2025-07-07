let currentSlide = 0;
let score = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    slides[n].classList.add('active');
    currentSlide = n;
}

function nextSlide(points) {
    score += points;
    if (currentSlide < slides.length - 2) {
        showSlide(currentSlide + 1);
    } else {
        showResults();
    }
}

function showResults() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Total Score: ${score}`;
    showSlide(slides.length - 1);
}

showSlide(0);
