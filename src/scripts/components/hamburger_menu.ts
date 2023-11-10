export const wrapper = document.querySelector(".menu-wrapper");
export const header = document.querySelector("header");
export const OffScreenCanvas = document.querySelector(".off-screen-canvas");

//Validation conditions
const checkWrapperOrCanvasIsNotActive =
  !wrapper?.classList?.contains("active") &&
  !OffScreenCanvas?.classList?.contains("active");


//Action Methods
const triggerMenu = () => {
  if (wrapper?.classList?.contains("active")) {
    wrapper.classList.remove("active");
    OffScreenCanvas?.classList.remove("active");
    header?.classList.remove("menu_active");
  } else {
    wrapper?.classList.add("active");
    OffScreenCanvas?.classList.add("active");
    header?.classList.add("menu_active");
  }
};

const setStickyNav = () => {
  if (checkWrapperOrCanvasIsNotActive) {
    header?.classList.toggle("scroll-mode", scrollY > 0);
  }
};

// Execute the humburger menu logic
wrapper?.addEventListener("click", triggerMenu);
// Execute the sticky navbar logic
document.addEventListener("scroll", setStickyNav);
// Runs on view transitions navigation
