import "../CSS/style.css";
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
