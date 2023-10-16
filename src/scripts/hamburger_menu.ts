import { OffScreenCanvas, header, wrapper } from "./constants";

//Validation conditions
const checkScrollHeaderIsActive = header?.classList.contains("scroll-mode");
const checkWrapperOrCanvasIsNotActive =
  !wrapper?.classList?.contains("active") &&
  !OffScreenCanvas?.classList?.contains("active");


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
  if (checkWrapperOrCanvasIsNotActive) {
    header!.classList.toggle("scroll-mode", scrollY > 0);
  }
};

const closeMenuOnNavigation = () => {
  wrapper!.classList.remove("active");
  OffScreenCanvas!.classList.remove("active");
  header!.classList.remove("menu_active");
};

// Execute the humburger menu logic
wrapper!.addEventListener("click", triggerMenu);
// Execute the sticky navbar logic
addEventListener("scroll", setStickyNav);
// Runs on view transitions navigation
