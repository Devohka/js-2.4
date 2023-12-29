const btnEl = document.querySelector("#btn");
const titleEl = document.querySelector("#title");
const textEl = document.querySelector("#text");


btnEl.addEventListener("click", () => {
    titleEl.textContent = "text no text";
    textEl.style.backgroundColor = "red";
});