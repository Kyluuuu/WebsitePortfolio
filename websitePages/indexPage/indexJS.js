import "./indexCSS.css";
import "../main.css";

// IntersectionObserver for hidden elements
const S = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    // } else {
    //   entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => S.observe(el));

// Show navbar on load
window.addEventListener("load", () => {
  document.querySelector(".navBar").classList.add("showUp");
});

// ScrollText hide animation
const scrollText = document.getElementById("scrollText");
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    scrollText.classList.add("scrollHide");
    scrollText.classList.remove("scrollAnimation");
  }
});

// Slow scroll effect
let slowScrollBox = document.getElementById("slowScrollBox");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  slowScrollBox.style.transform = `translateY(${-scrollY * 0.3}px)`;
  scrollText.classList.add("scrollHide");
  scrollText.classList.remove("scrollAnimation");
});

// Navigation button scrolls
const scrollToSection = (buttonId, sectionId) => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    const targetTop = document.getElementById(sectionId).getBoundingClientRect().top + window.scrollY;
    const offset = document.querySelector(".navBar").offsetHeight * 1.2;
    window.scrollTo({ top: targetTop - offset, behavior: "smooth" });
  });
};

scrollToSection("projects", "projectSection");
scrollToSection("about", "aboutSection");
scrollToSection("contact", "contactSection");

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    scrollText.classList.remove("scrollHide");
    scrollText.classList.add("scrollAnimation");
  }, 1000);
});

// Light/Dark mode toggle
const lightModeButton = document.getElementById("lightModeButton");
const moonIcon = lightModeButton.querySelector(".moon");
const sunIcon = lightModeButton.querySelector(".sunny");

lightModeButton.addEventListener("click", () => {
  const isLight = !JSON.parse(localStorage.getItem("lightModeOn"));
  applyTheme(isLight);
  localStorage.setItem("lightModeOn", String(isLight));
});

// Apply theme from localStorage on load
applyTheme(JSON.parse(localStorage.getItem("lightModeOn")));

function applyTheme(isLight) {

  const h1 = document.querySelector(".beginTitle h1");
  const aboutText = document.querySelector(".innerLeftAbout p");
  const h2 = document.querySelector(".beginTitle h2");
  const techText = document.querySelector(".Technology p");
  const scrollHint = document.querySelector(".scroll");
  const hiddenEls = document.querySelectorAll(".hidden");
  const allProjects = document.querySelectorAll(".allProjectsContainer");
  const allExperience = document.querySelectorAll(".allExperienceContainer");
  const box = document.querySelector(".box");
  const sunFore = document.querySelector(".scrollBoxDivSunFore");
  const moonFore = document.querySelector(".scrollBoxDivMoonFore");
  const gradientDark = document.querySelector(".scrollBoxDivGradientDark");
  const gradientLight = document.querySelector(".scrollBoxDivGradientLight");

  if (isLight) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
    aboutText.style.color = "black";
    h2.style.color = "#666";
    techText.style.color = "#666";
    scrollHint.style.color = "black";
    sunFore.style.opacity = 1;
    moonFore.style.opacity = 0;
    gradientLight.style.opacity = 1;
    gradientDark.style.opacity = 0;
    box.style.backgroundColor = "white";

    hiddenEls.forEach((el) => {
      el.style.color = "black";
      el.style.borderColor = "black";
    });

    allProjects.forEach((el) => {
      el.style.color = "white";
    });

    allExperience.forEach((el) => {
      el.style.color = "black";
    });
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    document.body.style.backgroundColor = "#333";
    h1.style.color = "white";
    aboutText.style.color = "white";
    h2.style.color = "#999";
    techText.style.color = "#999";
    scrollHint.style.color = "white";
    sunFore.style.opacity = 0;
    moonFore.style.opacity = 1;
    gradientLight.style.opacity = 0;
    gradientDark.style.opacity = 1;
    box.style.backgroundColor = "#333";

    hiddenEls.forEach((el) => {
      el.style.color = "white";
      el.style.borderColor = "white";
    });

    allProjects.forEach((el) => {
      el.style.color = "white";
    });

    allExperience.forEach((el) => {
      el.style.color = "white";
    });
  }
}
