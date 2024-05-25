const steps = ["one", "two", "three"];
function listTemplate(step) {
  return   `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);

document.querySelector("#myList").innerHTML = stepsHtml.join("");

grades = ['A','B','A']

function getGPA(grade) {
    let point = 0
    if (grade === "A") {
        point = 4;
    }
    else if (grade === "B") {
        point = 3;
    }
    return point;
}

const points = grades.map(getGPA);

console.log(points);

const gpa = points.reduce((total,value) => total + value) / points.length;

console.log(gpa.toFixed(2));
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const fruitsNew =  fruits.filter((fruit) => fruit.length < 6);

console.log(fruitsNew);

 const array = [12, 34, 21, 54];
 const luckyNumber = 21;

 let luckyIndex = array.indexOf(luckyNumber);
 console.log(luckyIndex);



