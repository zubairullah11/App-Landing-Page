document.addEventListener('DOMContentLoaded', () => {

    function initializeSlider(sliderSelector, slidesSelector, itemSelector, dotsContainerSelector, slidesToShow) {
        const slider = document.querySelector(sliderSelector);
        const slides = slider.querySelector(slidesSelector);
        const items = slides.querySelectorAll(itemSelector);
        const dotsContainer = document.querySelector(dotsContainerSelector);
        const dots = dotsContainer.querySelectorAll('.dot');
        
        const totalItems = items.length;
        const totalGroups = totalItems - slidesToShow + 1;
        let currentIndex = 0;

        const updateSlider = () => {
            const itemWidth = items[0].offsetWidth + (parseFloat(window.getComputedStyle(items[0]).marginRight) || 0);
            
            const transformValue = -currentIndex * itemWidth;
            slides.style.transform = `translateX(${transformValue}px)`;
            
            updateDots();
        };

        const updateDots = () => {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        setInterval(() => {
            currentIndex = (currentIndex + 1) % (totalGroups);
            updateSlider();
        }, 3000);

        dotsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dot')) {
                const dotIndex = Array.from(dots).indexOf(e.target)	
                currentIndex = dotIndex;
                updateSlider();
            }
        });

        updateSlider();
    }

    initializeSlider('.screenshots .slider', '.slides', 'img', '.screenshots .slider-dots', 4);

    initializeSlider('.student-reviews .slider', '.slides', '.reviews', '.student-reviews .slider-dots', 3);
});