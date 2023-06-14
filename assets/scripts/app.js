const menu = document.querySelector(".m-menu");
const nav = document.querySelector(".m-nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("m-nav--active");
});
