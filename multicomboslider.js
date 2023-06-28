/*let currentSlide = 0;
let a = 0;

var slides = document.getElementsByClassName('imageSlides');

function showSlide(n, a, d) {
    if (d == 'next') {
      console.log(n,a);
      if (n < slides.length) {
        for (var i = 0; i < a; i++) {
            slides[i].classList.remove('active');
        }
        for (var i = a; i < n + 3; i++) {
            slides[i].classList.add('active');
        }
      }
    } else {
      console.log(n,a,slides.length);
        for (var i = n + 3; i < slides.length; i++) {
          slides[i].classList.remove('active');
        }
        for (var i = n; i < n + 3; i++) {
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
            a = a - 3;
            currentSlide = currentSlide - 3;
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
}*/

let currentSlide = 0;
let a = 0;
const slides = document.getElementsByClassName('imageSlides');
// const slidesPerView = 3;

function showSlide(n, a, d) {
    if (d === 'next') {
        if (n < slides.length) {
            for (let i = 0; i < slides.length; i++) {
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
            document.getElementsByClassName('previous')[0].disabled = true;
        } else {
            a -= getSlidesPerView();
            currentSlide -= getSlidesPerView();
            if (currentSlide >= 0) {
                showSlide(currentSlide, a, direction);
            }
        }
    } else if (direction === 'next') {
        if (currentSlide >= slides.length - getSlidesPerView()) {
            document.getElementsByClassName('next')[0].disabled = true;
        } else {
            a += getSlidesPerView();
            currentSlide += getSlidesPerView();
            showSlide(currentSlide, a, direction);
        }
    }
}

function getSlidesPerView() {
    const viewportWidth = screen.width;
    console.log(viewportWidth);
    if (viewportWidth <= 991 && viewportWidth >768) {
        console.log("<= 991")
        return 2;
    } else if (viewportWidth <= 768) {
        console.log("<= 480")
        return 1;
    } else {
        console.log("else   ")
        return 3;
    }
}

showSlide(currentSlide, a, 'next');

window.addEventListener('resize', function () {
    showSlide(currentSlide, a, 'next');
});

// function showSlide(n, a, d) {
//   if (d === 'next') {
//     if (n < slides.length) {
//       for (let i = 0; i < slides.length; i++) {
//         if (i >= a && i < n + slidesPerView) {
//           slides[i].classList.add('active');
//         } else {
//           slides[i].classList.remove('active');
//         }
//       }
//     }
//   } else {
//     for (let i = 0; i < slides.length; i++) {
//       if (i >= n && i < n + slidesPerView) {
//         slides[i].classList.add('active');
//       } else {
//         slides[i].classList.remove('active');
//       }
//     }
//   }
// }

// function showDirection(direction) {
//   if (direction === 'previous') {
//     if (currentSlide === 0) {
//       document.getElementsByClassName('previous').disabled = true;
//     } else {
//       a -= slidesPerView;
//       currentSlide -= slidesPerView;
//       if (currentSlide >= 0) {
//         showSlide(currentSlide, a, direction);
//       }
//     }
//   } else if (direction === 'next') {
//     if (currentSlide >= slides.length - slidesPerView) {
//       document.getElementsByClassName('next').disabled = true;
//     } else {
//       a += slidesPerView;
//       currentSlide += slidesPerView;
//       showSlide(currentSlide, a, direction);
//     }
//   }
// }

// // Initial display
// showSlide(currentSlide, a, 'next');