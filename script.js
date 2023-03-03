const cardItemEl = document.querySelectorAll(".card__item");
const cardAnswerActive = document.querySelector(".card__answer--active");

cardItemEl.forEach((cardItemEl) => {
  cardItemEl.addEventListener("click", () => {
    cardItemEl.classList.toggle("card__answer--active");
    console.log("Yo!");
  });
});
