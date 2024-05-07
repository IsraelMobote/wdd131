let d = 7;
const output = document.querySelector("ul");
const options = { weekday: 'long' };
const today = new Date();
let todayString = new Intl.DateTimeFormat('en-US', options).format(today);
document.querySelector("p").innerHTML = `today : ${todayString}`;

for (let i = 1; i < d; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let nextDayString = new Intl.DateTimeFormat('en-US', options).format(nextDay);
    let lid = document.createElement('li');
    lid.textContent = nextDayString;
    output.appendChild(lid);
}