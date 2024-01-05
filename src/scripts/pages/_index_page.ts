const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const curtain = document.querySelector(".curtain");
const marquee = document.querySelector(".infinite-marquee");

onload = () => {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.body.style.overflow = "hidden";
  marquee?.classList.add("hidden");
  header!.style.display = "none";
};

curtain?.addEventListener("animationend", () => {
  sections.forEach((section) => {
    section.style.display = "flex";
  });
  document.body.style.overflowX = "hidden";
  header!.style.display = "flex";
  marquee?.classList.remove("hidden");
  sessionStorage.setItem("preloader", "rendered");
  document.body.style.overflowY = "scroll";
});