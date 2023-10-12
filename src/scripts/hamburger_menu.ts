const wrapper = document.querySelector(".menu_wrapper");
const header = document.querySelector("header");
const OffScreenCanvas = document.querySelector(".off-screen-canvas");

//Validation conditions
const checkScrollHeaderIsActive = header?.classList.contains("scroll-mode");
const checkWrapperOrCanvasIsActive =
  wrapper?.classList?.contains("active") &&
  OffScreenCanvas?.classList?.contains("active");


//Action Methods
const triggerMenu = () => {

  if (wrapper?.classList?.contains("active")) {
    wrapper!.classList.remove("active");
    OffScreenCanvas!.classList.remove("active");
    header!.classList.remove("menu_active");
  } else {
    wrapper!.classList.add("active");
    OffScreenCanvas!.classList.add("active");
    header!.classList.add("menu_active");
  }
};

const setStickyNav = () => {
  if (!checkWrapperOrCanvasIsActive) {
    header?.classList.toggle("scroll-mode", window.scrollY > 0);
  }
};

const closeMenuOnNavigation = () => {
  wrapper!.classList.remove("active");
  OffScreenCanvas!.classList.remove("active");
};

// Execute the humburger menu logic
wrapper!.addEventListener("click", triggerMenu);
// Execute the sticky navbar logic
window.addEventListener("scroll", setStickyNav);
// Runs on view transitions navigation
document.addEventListener("astro:after-swap", closeMenuOnNavigation);