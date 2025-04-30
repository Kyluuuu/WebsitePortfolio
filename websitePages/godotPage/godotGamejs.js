import "./godotGamecss.css";
import "../main.css";

// Intersection Observer to show elements when they come into view
const r = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// Observe all elements with the class 'hidden'
const i = document.querySelectorAll(".hidden");
i.forEach(el => r.observe(el));

// Show navbar on load
window.addEventListener("load", () => {
  document.querySelector(".navBar").classList.add("showUp");
});


// Light mode toggle
const c = document.getElementById("lightModeButton"),
      s = c.querySelector(".moon"),
      l = c.querySelector(".sunny");

c.addEventListener("click", () => {
  let lightModeOn = !JSON.parse(localStorage.getItem("lightModeOn"));
  d(lightModeOn);
  localStorage.setItem("lightModeOn", String(lightModeOn));
});

// Light/dark mode styling logic
d(JSON.parse(localStorage.getItem("lightModeOn")));

function d(lightModeOn) {
  console.log(lightModeOn);
  const hiddenElements = document.querySelectorAll(".hidden");

  if (lightModeOn) {
    s.style.display = "none";
    l.style.display = "block";
    document.body.style.backgroundColor = "white";
    hiddenElements.forEach(el => {
      el.style.color = "black";
    });
  } else {
    l.style.display = "none";
    s.style.display = "block";
    document.body.style.backgroundColor = "#333";
    hiddenElements.forEach(el => {
      el.style.color = "white";
    });
  }
}
