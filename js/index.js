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

window.onload = function() {
    animateCounter('clients-counter', 200, 10, 50);
    animateCounter('products-counter', 5000, 200, 50);
    animateCounter('services-counter', 10, 1, 50);
    animateCounter('countries-counter', 3, 1, 50);
};