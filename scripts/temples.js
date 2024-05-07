const year = document.querySelector("#currentyear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();
// this statement below is to get the current year in the footer
year.innerHTML = today.getFullYear();

// this statement is to get the last modified string in the footer
lastModified.innerHTML = new Date(document.lastModified);

const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");

menu.addEventListener("click", function() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
})