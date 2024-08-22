const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');
const container = document.querySelector('.movies-english');

function updateButtonVisibility() {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft === 0) {
        slideLeft.style.display = 'none';
    } else {
        slideLeft.style.display = 'block';
    }
    if (container.scrollLeft >= maxScrollLeft) {
        slideRight.style.display = 'none';
    } else {
        slideRight.style.display = 'block';
    }
}

slideLeft.addEventListener('click', () => {
    container.scrollBy({
        left: -555, // Adjust the value based on your image width
        behavior: 'smooth'
    });
});

slideRight.addEventListener('click', () => {
    container.scrollBy({
        left: 555, // Adjust the value based on your image width
        behavior: 'smooth'
    });
});

// Add event listener to check scroll position
container.addEventListener('scroll', updateButtonVisibility);

// Initialize button visibility on page load
updateButtonVisibility();




document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.plus-icon');
        
        // Toggle answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1kxvykp e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>';
        } else {
            answer.style.display = 'block';
            icon.innerHTML = '<svg style="flex-shrink: 0; transform: rotate(-45deg); height: 55px;" xmlns="http://www.w3.org/2000/svg" fill="none" width="36" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1kxvykp e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>';
        }
    });
});

