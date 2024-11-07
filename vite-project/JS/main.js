import "../CSS/style.css";
import "../JS/products.js";
import { Animals } from "../JS/products.js";
document.querySelector(".darkMode").addEventListener("click", function () {
  document.body.className = "light";
});
document.querySelector(".lightMode").addEventListener("click", function () {
  document.body.className = "dark";
});
document.querySelector(".coolMode").addEventListener("click", function () {
  document.body.className = "cool";
});
document.querySelector(".warmMode").addEventListener("click", function () {
  document.body.className = "warm";
});
function cardInserter() {
  Animals.forEach((animal) => {
    const cardHTML = `
      <div class="card">
        <h1 class="card-header">Animal: ${animal.name}</h1>
        <h2 class="card-info">Price: ${animal.price}</h2>
        <h3 class="card-desc">Category: ${animal.category}</h3>
      </div>`;
    DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
  });
}
DOMSelectors.button.addEventListener("click", function () {
  cardInserter();
});
