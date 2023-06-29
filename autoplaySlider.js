let currentSlide = 0;
const slides = document.getElementsByClassName('imageslides');
const slidesPerView = 3;


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
  currentSlide++;
  console.log(currentSlide);
  if (currentSlide >= slides.length || currentSlide === slides.length - 3) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

const autoplay = setInterval(nextSlide, 2000);



