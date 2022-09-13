"use strict";

const navToggle = document.querySelector(".nav__container__menu");
const dropdownMenu = document.querySelector(".nav__container__dropdown");

function openNav() {
  navToggle.addEventListener("click", () =>
    dropdownMenu.classList.toggle("is-open")
  );
}

openNav();
