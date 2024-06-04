
const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}



const form = document.querySelector("form")
const button = document.querySelector('#button')
button.disabled = true;

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


categoryone.addEventListener('click', setCategoryPrice(150000))
categorytwo.addEventListener('click', setCategoryPrice(300000))
categorythree.addEventListener('click', setCategoryPrice(450000))

paymentone.addEventListener('click', setPaymentRate(1));
paymenttwo.addEventListener('click', setPaymentRate(2));
paymentthree.addEventListener('click', setPaymentRate(3));
paymentfour.addEventListener('click', setPaymentRate(4));

oneyear.addEventListener('click', setHosting(1))
twoyear.addEventListener('click', setHosting(2))
threeyear.addEventListener('click', setHosting(3))
fiveyear.addEventListener('click', setHosting(5))


function setHosting(number) {
    hosting = number;
    if (categoryPrice != 0 && paymentrate != 0 && hosting !=0) {

        
    }
}
 

function setPaymentRate(number) {
    paymentrate = number;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        button.removeAttribute('disabled');
    }
}

function setCategoryPrice(number) {
    categoryPrice = number;
    if (categoryPrice != 0 && paymentrate != 0 && hosting!=0) {
        button.removeAttribute('disabled');
    }
}


button.addEventListener('click', function() {

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

    const website = document.querySelector('#websitePrice');
    website.textContent = categoryPrice / 1000;

    const host = document.querySelector('#hosting');
    host.textContent = hosting * 50;

    let total = document.createElement('p');
    total.innerHTML = `The total price for the website plus hosting is <span>${totalprice}</span>`;

    let installmen = document.createElement('p');
    installmen.textContent = installment;
    
})





