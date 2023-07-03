let currentSlide = 0;
const slides = document.getElementsByClassName('imageslides');
const slidesPerView = 3;
const dotsContainer = document.querySelector('.dots-container');
let slideIndex = 0;
let dots = [];


function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      if (i >= currentSlide && i < currentSlide + slidesPerView) {
        slides[i].classList.add('active');
      } else {
        slides[i].classList.remove('active');
      }
    }
    updateDots();
}

function showDirection(direction) {
  if (direction === 'previous') {
    console.log(currentSlide);
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
  dotsContainer.innerHTML = '';
  dots = [];
  const totalSlides = Math.ceil(slides.length - 2);
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide();
    });
    dots.push(dot);
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  // const totalSlides = Math.ceil(slides.length / slidesPerView);
  const activeDotIndex = Math.floor(currentSlide / 1);
  for (let i = 0; i < dots.length; i++) {
    if (i === activeDotIndex) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
}

createDots();
updateDots();