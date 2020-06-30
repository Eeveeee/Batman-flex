const sectionMore = document.querySelector(".more");
const buttonMore = document.querySelector(".button-more");

buttonMore.addEventListener("click", () => {
  buttonMore.classList.toggle("button-active");
  sectionMore.classList.toggle("more-active");
});
