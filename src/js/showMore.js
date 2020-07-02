const deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 480) {
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);
    const sectionMore = document.querySelector(".more");
    const buttonMore = document.querySelector(".button-more");

    buttonMore.addEventListener("click", () => {
      document.body.style.overflow === "auto"
        ? window.scrollBy({ top: -1000, behavior: "smooth" })
        : window.scrollBy({ top: 1000, behavior: "smooth" });
      document.body.style.overflow = `${
        document.body.style.overflow === "auto" ? "hidden" : "auto"
      }`;
      buttonMore.classList.toggle("button-active");
      sectionMore.classList.toggle("more-active");
    });
  });
}
