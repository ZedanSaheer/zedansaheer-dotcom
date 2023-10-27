const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const curtain = document.querySelector(".curtain");
const marquee = document.querySelector(".infinite-marquee");

onload = () => {
  sections.forEach((section) => {
    section.style.display = "none";
    header!.style.display = "none";
    marquee?.classList.add("hidden");
    document.body.style.overflow = "hidden";
  });
};

curtain?.addEventListener("animationend", () => {
  sections.forEach((section) => {
    section.style.display = "flex";
  });
  header!.style.display = "flex";
  marquee?.classList.remove("hidden");
  document.body.style.overflowY = "scroll";
  sessionStorage.setItem("preloader", "rendered");
});