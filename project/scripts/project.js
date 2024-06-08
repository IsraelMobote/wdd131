
const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}



const form = document.querySelector("form")
const buttn = document.querySelector('#button')
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


categoryone.addEventListener('click', function() { setCategory(150000) });
categorytwo.addEventListener('click', function() { setCategory(300000) });
categorythree.addEventListener('click', function() { setCategory(450000) });

paymentone.addEventListener('click', function() { setPayment(1) });
paymenttwo.addEventListener('click', function() { setPayment(2) });
paymentthree.addEventListener('click', function() { setPayment(3) });
paymentfour.addEventListener('click', function() { setPayment(4) });

oneyear.addEventListener('click', function() { setHosting(1) });
twoyear.addEventListener('click', function() { setHosting(2) });
threeyear.addEventListener('click', function() { setHosting(3) });
fiveyear.addEventListener('click', function() { setHosting(5) });

function setCategory(num) { 
    categoryPrice = num;
    check();
}

function setPayment(num) { 
    paymentrate = num;
    check();
}

function setHosting(num) { 
    hosting = num;
    check();
}



function check() {
    if (categoryPrice != 0 && paymentrate != 0 && hosting !=0) {
        button.removeAttribute('disabled');
    }
}



button.addEventListener('click', function() {

let totalprice = categoryPrice + hosting * 50000;
let iniprice = 0.4 * totalprice;
let remainder = 0.6 * totalprice;
let installment;

if (paymentrate === 1) {
     installment = remainder
}
else if (paymentrate === 2) {
    remainder = remainder * 1.1;
     installment = remainder / 2;
}

else if (paymentrate === 3) {
    remainder = remainder * 1.15;
     installment = remainder / 3;
}

else if (paymentrate === 4) {
    remainder = remainder * 1.2;
     installment = remainder / 4;
}

    const website = document.querySelector('#websitePrice');
    website.textContent = categoryPrice / 1000;

    const host = document.querySelector('#hosting');
    host.textContent = hosting * 50;

    const total = document.querySelector('#total');
    total.textContent =  totalprice / 1000;

    const init = document.querySelector('#initial');
    init.textContent =  0.4 * totalprice /1000 ;

    const installmen = document.querySelector('#monthlypayment')

    if (paymentrate == 1) {
        installmen.textContent =  `${(installment /1000).toFixed()},000 once after the 
        website completion date`
    }
    else {
    installmen.textContent = `${(installment /1000).toFixed()},000 once in a month for ${paymentrate} months after the 
    website completion date`
    }
})


