const year = document.querySelector("#currentyear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();
// this statement below is to get the current year in the footer
year.innerHTML = today.getFullYear();

// this statement is to get the last modified string in the footer
lastModified.innerHTML = new Date(document.lastModified);

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      year: 2005,
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      year: 1888,
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      year: 2015,
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      year: 2020,
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      year: 1974,
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      year: 1986,
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      year: 1983,
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      year: 2004,
      area: 17500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"    
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      year: 1893,
      area: 253000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
      templeName: "London England",
      location: "London, England",
      dedicated: "1958, September, 7",
      year: 1958,
      area:  42652,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650239-wallpaper.jpg"    
    },
    {
      templeName: "Phoenix Arizona",
      location: "Phoenix, Arizona, United States",
      dedicated: "2014, November, 16",
      year: 2014,
      area:  64870,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650239-wallpaper.jpg"    
    },
  ];

function createCard(temp) {
    const templeCard = document.createElement("section");
    let templeNam = document.createElement("h2");
    templeNam.innerHTML = temp.templeName;
    templeCard.append(templeNam);

    let locatio = document.createElement("p");
    locatio.innerHTML =  `<span>location</span>: ${temp.location}`;
    templeCard.append(locatio);

    let dedicateDate = document.createElement("p");
    dedicateDate.innerHTML = `<span>Dedicated</span>: ${temp.dedicated}`;
    templeCard.append(dedicateDate);

    let size = document.createElement("p");
    size.innerHTML = `<span>Size</span>: ${temp.area}`;
    templeCard.append(size);

    let image = document.createElement("img");
    image.src = (temp.imageUrl);
    image.setAttribute("loading", "lazy");
    image.setAttribute("alt", temp.templeName);
    templeCard.append(image);

    return templeCard;

    
}


let album = document.querySelector("#templeAlbum")

const menu = document.querySelector("#menu");
const navi = document.querySelector("nav");
const New = document.querySelector("#New");
const Old = document.querySelector("#Old");
const Large = document.querySelector("#Large");
const Small = document.querySelector("#Small")
const Home = document.querySelector("#Home");




menu.addEventListener("click", function() {


  menu.classList.toggle("show");
  navi.classList.toggle("show");
});



New.addEventListener("click",
newff);

Old.addEventListener("click",
oldff);

Home.addEventListener("click",
homeff);

Small.addEventListener("click",
smallff);

Large.addEventListener("click",
largeff);



temples.map(function(temple) {
  const section = createCard(temple);
  document.querySelector("#templeAlbum").append(section);
  });

  function homeff() {
    album.innerHTML = "";
    
    temples.map(function(temple) {
      const section = createCard(temple);
      document.querySelector("#templeAlbum").append(section);
      });
    };

function newff() {
  album.innerHTML = "";
  templesNew = temples.filter(temple => temple.year > 2000)
  
  templesNew.map(function(temple) {
    const section = createCard(temple);
    document.querySelector("#templeAlbum").append(section);
    });
  };

  function oldff() {
    album.innerHTML = "";
    templesOld = temples.filter(temple => temple.year < 1900)
    
    templesOld.map(function(temple) {
      const section = createCard(temple);
      document.querySelector("#templeAlbum").append(section);
      });
    };
  
    
  function smallff() {
    album.innerHTML = "";
    templesSmall = temples.filter(temple => temple.area < 10000)
    
    templesSmall.map(function(temple) {
      const section = createCard(temple);
      document.querySelector("#templeAlbum").append(section);
      });
    };

    
  function largeff() {
    album.innerHTML = "";
    templesLarge = temples.filter(temple => temple.area > 90000)
    
    templesLarge.map(function(temple) {
      const section = createCard(temple);
      document.querySelector("#templeAlbum").append(section);
      });
    };





  