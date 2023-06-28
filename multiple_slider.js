let currentSlide = 0;
const slides = document.getElementsByClassName('imageslides');

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (i >= currentSlide && i < currentSlide + 3) {
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
    if (currentSlide >= slides.length - 1) {
      document.querySelector('.next').disabled = true;
    } else {
      currentSlide++;
      document.querySelector('.previous').disabled = false;
      showSlide();
    }
  }
}


