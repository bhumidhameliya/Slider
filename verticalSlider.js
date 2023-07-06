const slidesContainer = document.querySelector('.image-slider');
const slides = document.querySelectorAll('.imageslides');
const slideHeight = slides[0].offsetHeight;
let currentSlide = 0;
// const slideCount = slides.length;
// const sliderContainer = document.querySelector('.slider-container');

function showSlide() {
  const newPosition = -currentSlide * slideHeight;
  slidesContainer.style.transform = `translateY(${newPosition}px)`;
}

function downSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function upSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}


const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

if (downButton && upButton) {
  downButton.addEventListener('click', downSlide);
  upButton.addEventListener('click', upSlide);
}
setInterval(downSlide, 3000);
showSlide();