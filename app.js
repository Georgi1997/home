const menu = document.querySelector(".navbar__nav");
const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger div");
const menuLinks = document.querySelectorAll(".navbar__item");
const navSlide = function () {
  burger.addEventListener("click", function () {
    menu.classList.toggle("nav-active");
    //change lines color
    burgerLines.forEach((link) => {
      if (!link.classList.toggled) link.classList.toggle("toggled");
    });
    //animate links
    menuLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLink .7s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
};

navSlide();
