const openBtn = document.querySelector(".open__btn");
const closeBtn = document.querySelector(".close__btn");
const box = document.querySelector(".modal");
const body = document.querySelector("body");

function modalActive() {
    box.classList.add("active");
    body.classList.add("bodyActive");
}

function modalClose() {
    box.classList.remove("active");
    body.classList.remove("bodyActive");

}

openBtn.addEventListener("click", modalActive);
closeBtn.addEventListener("click", modalClose);