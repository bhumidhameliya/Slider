var currentSlide = 0;
var slides = document.getElementsByClassName('imageSlides');

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[n].classList.add('active');
}

function previousSlide() {
  
  if (currentSlide === 0) {
    document.getElementsByClassName("previous").disabled = true;
  }else {
    currentSlide--;
    if (currentSlide >= 0) {
        showSlide(currentSlide);
    }
  }
  console.log(currentSlide);
}

function nextSlide() {
    if (currentSlide >= slides.length-1) {
        document.getElementsByClassName("next").disabled = true;
    } else {
        currentSlide++;
        showSlide(currentSlide);
    }
    
}
