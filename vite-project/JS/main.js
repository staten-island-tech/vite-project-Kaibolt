import "../CSS/style.css";
import "../JS/products.js";
import { DOMSelectors } from "../JS/DOM.js";
import { animals } from "../JS/products.js";
document.querySelector(".darkMode").addEventListener("click", function () {
  document.body.className = "dark";
});
document.querySelector(".lightMode").addEventListener("click", function () {
  document.body.className = "light";
});
document.querySelector(".coolMode").addEventListener("click", function () {
  document.body.className = "cool";
});
document.querySelector(".warmMode").addEventListener("click", function () {
  document.body.className = "warm";
});
document.querySelector("#reset").addEventListener("click", function () {
  console.log("works");
});
function defaultAnimal(animals) {
  animals.forEach((animal) =>
    document
      .querySelector(".cardContainer")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="card"><h1 class="card-header">Animal: ${animal.name}</h1><br><img class="card-img" src="${animal.img_url}" alt="${animal.alt_description}"><h2 class="card-desc">Price: ${animal.price}</h2><h3 class="card-desc">Category: ${animal.category}</h3></div>`
      )
  );
}
defaultAnimal(animals);
document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector(".cardContainer").innerHTML = "";
  defaultAnimal(animals);
});

document.querySelector("#nocSale").addEventListener("click", function () {
  const nocOnly = animals.filter((animal) => animal.category === "Nocturnal");
  document.querySelector(".cardContainer").innerHTML = "";
  defaultAnimal(nocOnly);
});
document.querySelector("#mamSale").addEventListener("click", function () {
  const mamOnly = animals.filter((animal) => animal.category === "Mammal");
  document.querySelector(".cardContainer").innerHTML = "";
  defaultAnimal(mamOnly);
});

//document.querySelector("#mamSale").addEventListener("click", function () {
//  const allcate = animals.map((animal) => animal.category);
//  const mamOnly = allcate.includes("Mammal");
//  document.querySelector(".cardContainer").innerHTML = "";
//  defaultAnimal(mamOnly);
//});
