
const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}



const form = document.querySelector("form")
let categoryone = document.querySelector('#basic');
let categorytwo = document.querySelector('#standard');
let categorythree = document.querySelector('#elite');

let paymentone = document.querySelector('#once');
let paymenttwo = document.querySelector('#two');
let paymentthree = document.querySelector('#three');
let paymentfour = document.querySelector('#four');

let oneyear = document.querySelector('#oney');
let twoyear = document.querySelector('#twoy');
let threeyear = document.querySelector('#threey');
let fiveyear = document.querySelector('#fivey');


let categoryPrice = 0;
let paymentrate = 0;
let hosting = 0;

categoryone.addEventListener('click', function() {
    categoryPrice = 150000;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

categorytwo.addEventListener('click', function() {
    categoryPrice = 300000;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

categorythree.addEventListener('click', function() {
    categoryPrice = 450000;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

paymentone.addEventListener('click', function() {
    paymentrate = 1;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

paymenttwo.addEventListener('click', function() {
    paymentrate = 2;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

paymentthree.addEventListener('click', function() {
    paymentrate = 3;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

paymentfour.addEventListener('click', function() {
    paymentrate = 4;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

oneyear.addEventListener('click', function() {
    hosting = 1;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

twoyear.addEventListener('click', function() {
    hosting = 2;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})

threeyear.addEventListener('click', function() {
    hosting = 3;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
        
    }
})

fiveyear.addEventListener('click', function() {
    hosting = 5;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        submit.removeAttribute('disabled');
    }
})




const submit = document.querySelector('#submit')

submit.disabled = true;



submit.addEventListener('click', function() {



    form.innerHTML = "";


    let totalprice = categoryPrice + hosting * 50000;
let iniprice = 0.4 * totalprice;
let remainder = 0.6 * totalprice;
let installment;

if (paymentrate === 2) {
    remainder = remainder * 1.1;
    totalprice = iniprice + remainder;
     installment = remainder / 2;
}

if (paymentrate === 3) {
    remainder = remainder * 1.15;
    totalprice = iniprice + remainder;
     installment = remainder / 3;
}

if (paymentrate === 4) {
    remainder = remainder * 1.2;
    totalprice = iniprice + remainder;
     installment = remainder / 4;
}

    let initial = document.createElement('p');
    initial.innerHTML = `for hosting the site on the internet for <span>${hosting}</span>years
    is <span>${hosting * 50000}</span>`;

    let host = document.createElement('p');
    host.innerHTML = `The fees for building the website is  <span>${categoryPrice}</span>`

    let total = document.createElement('p');
    total.innerHTML = `The total price for the website plus hosting is <span>${totalprice}</span>`;

    let installmen = document.createElement('p');
    installmen.textContent = installment;

    form.append(host);
    form.append(initial);
    form.append(total);

    
})





