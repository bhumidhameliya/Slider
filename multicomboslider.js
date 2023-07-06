let currentSlide = 0;
let a = 0;
const slides = document.getElementsByClassName('imageSlides');
// const slidesPerView = 3;

function showSlide(n, a, d) {
    console.log(n,a);
    if (d === 'next') {
        if (n < slides.length) {
            for (let i = 0; i < slides.length; i++) {
                // console.log(a,n + getSlidesPerView());
                if (i >= a && i < n + getSlidesPerView()) {
                    slides[i].classList.add('active');
                } else {
                    slides[i].classList.remove('active');
                }
            }
        }
    } else {
        for (let i = 0; i < slides.length; i++) {
            if (i >= n && i < n + getSlidesPerView()) {
                slides[i].classList.add('active');
            } else {
                slides[i].classList.remove('active');
            }
        }
    }
}

function showDirection(direction) {
    if (direction === 'previous') {
        if (currentSlide === 0) {
            document.querySelector('.previous').disabled = true;
        } else {
            a -= getSlidesPerView();
            currentSlide -= getSlidesPerView();
            if (currentSlide >= 0) {
                document.querySelector('.next').disabled = false;
                showSlide(currentSlide, a, direction);
            }
        }
    } else if (direction === 'next') {
        if (currentSlide >= slides.length - getSlidesPerView()) {
            document.querySelector('.next').disabled = true;
        } else {
            a += getSlidesPerView();
            currentSlide += getSlidesPerView();
            document.querySelector('.previous').disabled = false;
            showSlide(currentSlide, a, direction);
        }
    }
}

function getSlidesPerView() {
    const viewportWidth = screen.width;

    if (viewportWidth <= 991 && viewportWidth >767) {
        return 2;
    } else if (viewportWidth <= 767) {
        return 1;
    } else {
        return 3;
    }
}

showSlide(currentSlide, a, 'next');

window.addEventListener('resize', function () {
    showSlide(currentSlide, a, 'next');
});