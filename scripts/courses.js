const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],

    enrollstudent(sectionNumber,chara) {
        this.sections[sectionNumber - 1].enrolled += chara;
        outputSection(this.sections);
    },
  
};


function setNameandNumber() {
document.querySelector("#courseName").innerHTML = aCourse.code.valueOf();
document.querySelector("#courseCode").innerHTML = aCourse.name.valueOf();
};


function outputSection(sections) {
    const html = sections.map((section) => 
        `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>
        `
);    
    document.querySelector("#sections").innerHTML = html.join("");
};

outputSection(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener('click', function(w) {
    w = 1;
    const num = document.querySelector("#sectionNumber").value;
    aCourse.enrollstudent(num, w);
});



document.querySelector("#dropStudent").addEventListener('click', function(w) {
    w = -1;
    const num = document.querySelector("#sectionNumber").value;
    aCourse.enrollstudent(num, w);
});

const names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesb = names.map(name => name.length);
console.log(namesb);

let result = namesb.reduce((total,value) => total + value,0)/ names.length
console.log(result);







