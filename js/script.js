const btn = document.querySelector(".btn");
const btnX = document.querySelector(".x-btn");
const modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
    modal.style.display = "flex";
})

btnX.addEventListener("click", () => {
    modal.style.display = "none";
})