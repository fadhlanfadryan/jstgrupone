document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const resultElement = document.getElementById('result');
    const foodRecommendationElement = document.getElementById('foodRecommendations');
    let currentSlide = 0;
    let score = 0;

    const positiveFoods = [
        {
            name: "Nasi Goreng",
            img: "nasi-goreng.jpg",
            address: "Jalan Raya Jakarta No. 123"
        },
        {
            name: "Sate",
            img: "sate.jpg",
            address: "Jalan Raya Bandung No. 456"
        },
        {
            name: "Gado-Gado",
            img: "gado-gado.jpg",
            address: "Jalan Raya Surabaya No. 789"
        }
    ];

    const negativeFoods = [
        {
            name: "Kopi Hitam",
            img: "kopi-hitam.jpg",
            address: "Jalan Raya Jakarta No. 901"
        },
        {
            name: "Es Teler",
            img: "es-teler.jpg",
            address: "Jalan Raya Bandung No. 234"
        },
        {
            name: "Bakso",
            img: "bakso.jpg",
            address: "Jalan Raya Surabaya No. 567"
        }
    ];

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        slides[n].classList.add('active');
        currentSlide = n;
    }

    function nextSlide(points) {
        if (points === 2) {
            score++; // Increase score for positive answers
        } else if (points === 1) {
            score--; // Decrease score for negative answers
        }
        if (currentSlide < slides.length - 2) {
            showSlide(currentSlide + 1);
        } else {
            showResults();
        }
    }

    function showResults() {
        let resultText;

        if (score > 0) {
            resultText = `Total Score: ${score}\n\nEmosi Anda cenderung Positif!`;
            displayFoodRecommendations(positiveFoods);
        } else {
            resultText = `Total Score: ${score}\n\nEmosi Anda cenderung Negatif!`;
            displayFoodRecommendations(negativeFoods);
        }

        resultElement.innerText = resultText;
        showSlide(slides.length - 1);
    }

    function displayFoodRecommendations(foods) {
        foodRecommendationElement.innerHTML = '';
        foods.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
                <img src="${food.img}" alt="${food.name}">
                <div class="food-info">
                    <h4>${food.name}</h4>
                    <p>${food.address}</p>
                </div>
            `;
            foodRecommendationElement.appendChild(foodItem);
        });
    }

    // Add event listener to the "Let's Go" button
    document.querySelector('.start-button').addEventListener('click', () => {
        document.querySelector('.start-button').style.display = "none";
        showSlide(1);
    });

    // Initialize slide navigation
    slides.forEach((slide, index) => {
        const buttons = slide.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const points = parseInt(button.getAttribute('data-points'));
                nextSlide(points);
            });
        });
    });

    // Initial setup: hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index !== 0) slide.classList.add('hidden');
    });
});