
const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}

let visits = JSON.parse(localStorage.getItem("totalVisits")) || 0;

visits += 1
localStorage.setItem("totalVisits", visits)
