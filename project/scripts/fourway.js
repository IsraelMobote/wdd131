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
    priceInformation : ""
}, 
{
    name : "Design",
    description : `after you have met with our support agent assigned to you, you wil be engaged in
    virtual meetings to know how you want your website to look like, it's purpose and your target
    audience, after you have agreed on a design plan for the website, you will be required to pay 40% 
    of the website total cost to start and finish the website`,
    icon: `icons/icon-for-design-stage.png`,
    priceInformation : `view the <a href='prices.html'>pricing</a> section to calculate the 40% initial cost for your
    website`
}
]

document.querySelector('#button1').addEventListener('click', function() {setFourWaySection(stages[0])});
document.querySelector('#button2').addEventListener('click', function() {setFourWaySection(stages[1])});


function setFourWaySection(stage) {
    document.querySelector('#processHeading').textContent = stage.name;
    document.querySelector('#processSummary').textContent = stage.description;
    document.querySelector('#processIcon').setAttribute('src', stage.icon);

}





