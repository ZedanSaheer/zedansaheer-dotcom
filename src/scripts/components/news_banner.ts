const container = document.querySelector(".news-container");
const data = document.querySelector(".news-data");

if (container!.clientWidth < data!.clientWidth) {
    data!.classList.add("animate");
}