import { OffScreenCanvas, header, wrapper } from "@scripts/constants";

const closeMenuOnNavigationAndRemoveLoader = () => {
  let curtain = document.querySelector(".curtain");
  let loader = sessionStorage.getItem("preloader");

  if (loader !== null) {
    curtain?.remove();
  }

  wrapper!.classList.remove("active");
  OffScreenCanvas!.classList.remove("active");
  header!.classList.remove("menu_active");
};

document.addEventListener(
  "astro:after-swap",
  closeMenuOnNavigationAndRemoveLoader
);