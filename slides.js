let slideIndex = 1;
manualSlides(slideIndex);

const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("mouseenter", manualSlides);
wrapper.addEventListener("mouseleave", autoSlides);
var timeOut;

function plusSlides(n) {
  manualSlides((slideIndex += n));
}

function currentSlide(n) {
  manualSlides((slideIndex = n));
}

function manualSlides(n) {
  clearTimeout(timeOut);
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let autoSlideIndex = 0;
autoSlides(autoSlideIndex);

function autoSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  slides[autoSlideIndex - 1].style.display = "block";
  clearTimeout(timeOut);
  timeOut = setTimeout(autoSlides, 3000); 
}
