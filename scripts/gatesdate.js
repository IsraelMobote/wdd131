const year = document.querySelector("#currentyear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();

year.innerHTML = today.getFullYear();
//lastModified.innerHTML = `${new Intl.DateTimeFormat("en-US", {dateStyle: "short"}).format(today)}
//${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

lastModified.innerHTML = new Date(document.lastModified);