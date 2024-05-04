const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    // how do we know which key was pressed?
    console.log(e);
    // checkout e.code, e.key, and e.keyCode
    // what is the difference?
}

const inpt = document.querySelector("#favchap");
const butin = document.querySelector("button");
const list = document.querySelector("ul");


butin.addEventListener('click', function () {
    if (inpt.value.trim() !== "") {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.textContent = inpt.value;
        deleteButton.textContent = "❌";
        listItem.append(deleteButton);
        list.append(listItem);
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
        });
        inpt.focus();
        inpt.value = " ";

    }
});

