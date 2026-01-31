window.onload = function () {
  const heading = document.getElementById("heading");

  heading.textContent = "Welcome to JavaScript DOM Manipulation";
  heading.style.color = "white";
  heading.style.backgroundColor = "teal";
  heading.style.textAlign = "center";

  heading.classList.add("main-heading");
};
