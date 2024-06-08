
const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}

