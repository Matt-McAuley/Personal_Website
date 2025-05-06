import cards from '/js/pages/projects/projects-data.js';
import { createCard } from '/js/functions.js';

createCard(cards);

let slideIndex = 1;

function plusSlides(n, projectName) {
  showSlides(slideIndex += n, projectName);
}

function showSlides(n, projectName) {
  let i;
  console.log(`#${projectName}.slide`)
  let slides = document.querySelectorAll(`.slide[data-project="${projectName}"]`);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const prevs = document.querySelectorAll(".prev");
const nexts = document.querySelectorAll(".next");
prevs.forEach((prev) => {
  const projectName = prev.dataset.project;
  prev.onclick = (e) => {
    e.stopPropagation();
    plusSlides(-1, projectName);
  }
});
nexts.forEach((next) => {
  const projectName = next.dataset.project;
  next.onclick = (e) => {
    e.stopPropagation();
    plusSlides(1, projectName);
  }
});

cards.forEach(card => {
  showSlides(slideIndex, card.title);
})
