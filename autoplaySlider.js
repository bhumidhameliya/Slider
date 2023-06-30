let currentSlide = 0;
const slides = document.getElementsByClassName('imageslides');
const slidesPerView = 3;
const dotsContainer = document.querySelector('.dots-container');
let slideIndex = 0;


function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      if (i >= currentSlide && i < currentSlide + slidesPerView) {
        slides[i].classList.add('active');
      } else {
        slides[i].classList.remove('active');
      }
    }
}

function showDirection(direction) {
  if (direction === 'previous') {
    if (currentSlide == 0) {
      document.querySelector('.previous').disabled = true;
    } else {
      currentSlide--;
      if (currentSlide >= 0) {
        document.querySelector('.next').disabled = false;
        showSlide();
      }
    }
  } else if (direction === 'next') {
    if (currentSlide >= slides.length - slidesPerView) {
      document.querySelector('.next').disabled = true;
    } else {
      currentSlide++;
      document.querySelector('.previous').disabled = false;
      showSlide();
    }
  }
}

function nextSlide() {
  if (currentSlide >= slides.length - slidesPerView) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide();
}

showSlide();

let autoplayEnabled = true;
let autoplayInterval;

function toggleAutoplay(value) {
  autoplayEnabled = value;
  if (autoplayEnabled) {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 2000);
  } else {
    clearInterval(autoplayInterval);
  }
}

toggleAutoplay(autoplayEnabled);


function createDots() {
  const numSlides = slides.length;
  for (let i = 0; i < numSlides - slidesPerView + 1; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      slideIndex = i;
      showSlide();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = Array.from(dotsContainer.getElementsByClassName('dot'));
  dots.forEach((dot, index) => {
    if (index >= slideIndex && index < slideIndex + slidesPerView) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

createDots();