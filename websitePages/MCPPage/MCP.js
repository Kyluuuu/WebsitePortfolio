import "./MCP.css"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      else {
          entry.target.classList.remove('show')
      }
  });
});

window.addEventListener('load', () => {
  const bar = document.querySelector('.navBar')
  bar.classList.add('showUp')
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


const lightModeButton = document.getElementById('lightModeButton');
const moonIcon = lightModeButton.querySelector(".moon");
const sunnyIcon = lightModeButton.querySelector(".sunny");

lightModeButton.addEventListener('click', () => {
    let lightBool = !JSON.parse(localStorage.getItem('lightModeOn'))
    toggleDarkMode(lightBool)
    localStorage.setItem('lightModeOn', String(lightBool))
});

toggleDarkMode(JSON.parse(localStorage.getItem('lightModeOn')))

function toggleDarkMode(lightBool) {
    console.log(lightBool)
    const blackText = document.querySelectorAll('.hidden');

    if (lightBool) {
        moonIcon.style.display = "none";
        sunnyIcon.style.display = "block";

        document.body.style.backgroundColor = 'white';
        blackText.forEach(element => {
            element.style.color = 'black';
        })
    }
    else {
        sunnyIcon.style.display = "none";
        moonIcon.style.display = "block";

        document.body.style.backgroundColor = '#333';
        blackText.forEach(element => {
            element.style.color = 'white';
        })
    }
}


