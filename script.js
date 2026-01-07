const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let interval;

// 👉 CHANGE SPEED HERE (milliseconds)
const SLIDE_SPEED = 3000; // 3 seconds

/* Show Slide */
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

/* Next & Prev */
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* Auto Slide */
function startAutoSlide() {
  interval = setInterval(nextSlide, SLIDE_SPEED);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

/* Events */
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
    resetAutoSlide();
  });
});

/* Init */
showSlide(index);
startAutoSlide();
