const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");



menu.addEventListener('click', func);

function func() {
    menu.classList.toggle("show");
    navi.classList.toggle("show");
}

const stages = [{
    name : "Meet",
    description :  `upon contacting us either through whatsApp or Email, you will be assigned to your own support agent 
    who will engage you in virtual meetings and in chat sessions to discuss about your
    website. This support agent will guide you through our interactive process from start to Website
     completion`,
    icon: `icons/icon-for-meet-stage.png`,
    iconAlt: "icon-for-meet-stage",
    priceInformation : ""
}, 
{
    name : "Design",
    description : `after you have met with our support agent assigned to you, you wil be engaged in
    virtual meetings to know how you want your website to look like, it's purpose and your target
    audience, after you have agreed on a design plan for the website, you will be required to pay 40% 
    of the website total cost to start and finish the website`,
    icon: `icons/icon-for-design-stage.png`,
    iconAlt: "icon-for-design-stage",
    priceInformation : `view the <a href='prices.html'>pricing</a> section to calculate the 40% initial cost for your
    website`
},
{
    name : "Develop",
    description : `In this stage, our web developers with the aid of your assigned support agent work 
    together to build and complete your website. You are not to pay any amount during this stage.
     If there is any need for pictures on the site, our photographers will get in touch 
    with you to discuss on how to provide those images. So Relax, We have got you covered.`,
    icon: `icons/icon-for-develop-stage.png`,
    iconAlt: "icon-for-develop-stage",
    priceInformation : ""
},
{
    name : "Completion",
    description : `This is the final stage in providing you with a website accessible to all Internet Users.
    Your website will be ready at this stage and it will be shown and demonstrated to you by your assigned
    support agent. If you have any suggestions for change, feel free to tell our support agent and it will
    be implemented on the website. For your website to go live on the Internet, you will have to pay 
    your remaining balance(60% of the total cost) or the first month of your installment plan if you
    decide to pay by installments. After this, your website will be hosted on the Internet and it will be
    accessible for anyone on the internet to see and use`,
    icon: `icons/icon-for-completion-stage.png`,
    iconAlt: "icon-for-completion-stage",
    priceInformation : ""
}

]

document.querySelector('#button1').addEventListener('click', function() {setFourWaySection(stages[0])});
document.querySelector('#button2').addEventListener('click', function() {setFourWaySection(stages[1])});
document.querySelector('#button3').addEventListener('click', function() {setFourWaySection(stages[2])});
document.querySelector('#button4').addEventListener('click', function() {setFourWaySection(stages[3])});


function setFourWaySection(stage) {
    document.querySelector('#processHeading').textContent = stage.name;
    document.querySelector('#processSummary').textContent = stage.description;
    document.querySelector('#processIcon').setAttribute('src', stage.icon);
    document.querySelector('#processIcon').setAttribute('loading', 'lazy');
    document.querySelector('#processIcon').setAttribute('alt', stage.iconAlt);
}





