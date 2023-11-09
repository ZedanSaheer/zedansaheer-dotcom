const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const curtain = document.querySelector(".curtain");
const marquee = document.querySelector(".infinite-marquee");

onload = () => {
  sections.forEach((section) => {
    document.body.style.overflow = "hidden";
    section.style.display = "none";
    header!.style.display = "none";
    marquee?.classList.add("hidden");
  });
};

curtain?.addEventListener("animationend", () => {
  sections.forEach((section) => {
    section.style.display = "flex";
  });
  document.body.style.overflowX = "hidden";
  header!.style.display = "flex";
  marquee?.classList.remove("hidden");
  document.body.style.overflowY = "scroll";
  sessionStorage.setItem("preloader", "rendered");
});