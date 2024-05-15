// the codes below is to calculate the windchill and pass it into the appropriate HTML element

const temp = 2;

const tempString = `${temp}ºC`;
document.querySelector('#temp').textContent = tempString;

const windSpeed = 12.56;

const windString = `${windSpeed}mph`;
document.querySelector('#wind').textContent = windString;

function calculateWindChill(T, V) {

    if (T <= 10 && V >3) {
    const windchill = 13.12 + 0.6215 * T + V**0.16 * (0.3965 * T - 11.37);
    return `${windchill.toFixed(2)}ºC`;}
}

document.querySelector('#windchill').textContent = calculateWindChill(temp,windSpeed);


// this codes below are for the footer element to apply javascript to it
const year = document.querySelector("#currentyear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();

// this statement below is to get the current year in the footer
year.innerHTML = today.getFullYear();

// this statement is to get the last modified string in the footer
lastModified.innerHTML = new Date(document.lastModified);