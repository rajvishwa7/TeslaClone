// FullPage Scrolling Effect using fullpage.js

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollBar: true,
});

// Navigation code

const fullpageEl = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const closeBtn = document.querySelector(".navigation__close__btn");

const blurOverlay = document.querySelector(".blur__overlay");

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle("no-scroll");
};

const CLICK = "click";

menuBtn.addEventListener(CLICK, toggleNavigation);
closeBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);
