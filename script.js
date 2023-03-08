const cardItemEl = document.querySelectorAll(".card__item");

// iterates through each element with ".card__item"
cardItemEl.forEach((el) => {
  // for each element, there's an event that triggers on click
  el.addEventListener("click", () => {
    // for each clicked ".card__item", the following function should be done
    cardItemEl.forEach(function (item) {
      // this checks elements with the active class and removes them.
      if (item.classList.contains("card__answer--active")) {
        item.classList.remove("card__answer--active");
        // if the item is the one that was clicked, this adds the active state
      } else if (item === el) {
        item.classList.add("card__answer--active");
        item.style.height = item.scrollHeight;
      }
    });
  });
});
