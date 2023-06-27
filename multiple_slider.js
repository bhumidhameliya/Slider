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
        showSlide();
      }
    }
  } else if (direction === 'next') {
    if (currentSlide >= slides.length - 1) {
      document.querySelector('.next').disabled = true;
    } else {
      currentSlide++;
      showSlide();
    }
  }
}

/*
let currentSlide = 0;
let a = 0;

var slides = document.getElementsByClassName('imageSlides');

function showSlide(n, a, d) {
    if (d == 'next') {
        for (var i = 0; i < a; i++) {
            slides[i].classList.remove('active');
        }
        for (var i = a; i < n + 3; i++) {
            slides[i].classList.add('active');
        }
    } else {
        for (var i = a; i < n + 3; i++) {
            slides[i].classList.remove('active');
        }
        for (var i = 0; i < a; i++) {
            slides[i].classList.add('active');
        }
    }
}

function showDirection(direction) {
    if (direction === 'previous') {
        console.log("prev");
        if (currentSlide === 0) {
            document.getElementsByClassName("previous").disabled = true;
        } else {
            a = a + 3;
            alert(a);
            currentSlide = currentSlide + 3;
            alert(currentSlide);
            if (currentSlide >= 0) {
                showSlide(currentSlide, a, direction);
            }
        }
    } else if (direction === 'next') {
        if (currentSlide >= slides.length - 1) {
            document.getElementsByClassName("next").disabled = true;
        } else {
            a = a + 3;
            currentSlide = currentSlide + 3;
            showSlide(currentSlide, a, direction);
        }
    }
}
*/
