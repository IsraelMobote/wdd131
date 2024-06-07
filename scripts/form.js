const year = document.querySelector("#currentyear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();

// this statement below is to get the current year in the footer
year.innerHTML = today.getFullYear();

// this statement is to get the last modified string in the footer
lastModified.innerHTML = new Date(document.lastModified);

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagegrating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ]


  const selectElement = document.querySelector("#productName");


  function appendListItems(product) {
    const option = document.createElement("option");
    option.innerHTML = product.name;
    option.setAttribute("value",product.id);
    selectElement.append(option);
  }

  products.forEach((prod) =>
    appendListItems(prod)
  );

  let totalReview = JSON.parse(localStorage.getItem("totalReviews")) || 0;
  document.querySelector("#submit").addEventListener('click', function() {
    totalReview = totalReview + 1;
    localStorage.setItem("totalReviews",totalReview);
    });
   

