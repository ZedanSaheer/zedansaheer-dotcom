const container = document.querySelector(".news-container");
const data = document.querySelector(".news-data");

console.log(container!.clientWidth);
console.log(data!.clientWidth);

if (container!.clientWidth < data!.clientWidth) {
    data!.classList.add("animate");
}