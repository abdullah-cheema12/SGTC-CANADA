// ACCORDIAN 

var accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        // Close all panels and remove active class from other accordions
        accordions.forEach((acc) => {
            if (acc !== this) {
                acc.classList.remove('active');
                acc.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle current accordion and panel
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

// COUNTER

function animateCounter(counterId, targetNumber, increment, intervalTime) {
    const counter = document.getElementById(counterId);
    let currentNumber = 0;

    const interval = setInterval(() => {
        currentNumber += increment;
        counter.textContent = currentNumber + "+";

        if (currentNumber >= targetNumber) {
            clearInterval(interval);
            counter.textContent = targetNumber + "+";
        }
    }, intervalTime);
}

function startCounters(entries, observer) {
    entries.forEach(entry => {
        const counterIds = ['clients-counter', 'products-counter', 'services-counter', 'countries-counter'];

        if (entry.isIntersecting) {
            // Start the counters when the element is visible
            animateCounter('clients-counter', 150, 10, 50);
            animateCounter('products-counter', 4000, 200, 50);
            animateCounter('services-counter', 15, 1, 50);
            animateCounter('countries-counter',10, 1, 50);
        } else {
            // Reset the counters when the element leaves the viewport
            counterIds.forEach(counterId => {
                const counter = document.getElementById(counterId);
                counter.textContent = "0+";
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null, // Null means it will observe based on the viewport
        threshold: 0.2 // 20% of the element must be visible to trigger
    };

    const observer = new IntersectionObserver(startCounters, observerOptions);
    const targetDiv = document.querySelector('.counter-div'); // Target the div you want to observe

    observer.observe(targetDiv); // Start observing the target div
});