import "../CSS/style.css";
document.querySelector("#darkMode").addEventListener("click", function () {
  const changer = document.querySelector("#darkMode");
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    changer.innerHTML = "Light Mode";
  }
  if (document.body.classList.contains("light")) {
    document.body.classList.add("cool");
    document.body.classList.remove("light");
    changer.innerHTML = "Cool Mode";
  }
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    changer.innerHTML = "Warm Mode";
  }
});
