import '../indexPage/indexCSS.css';

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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const scrollText= document.getElementById('scrollText');

window.addEventListener('wheel', (event) => {
    const delta = event.deltaY;
      if (delta > 0) {
        scrollText.classList.add('scrollHide')
        scrollText.classList.remove('scrollAnimation')
      }
});

window.addEventListener('scroll', () => {
    scrollText.classList.add('scrollHide')
    scrollText.classList.remove('scrollAnimation')
});

window.history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});


const experienceButton = document.getElementById('experience');

experienceButton.addEventListener('click', () => {
    const section = document.getElementById('experienceSection');
    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = document.querySelector('.navBar').offsetHeight;
    const scalingOffset = navbarHeight * 1.2;
    window.scrollTo({
        top: offsetTop - scalingOffset,
        behavior: 'smooth',
    });
});

const projectsButton = document.getElementById('projects');

projectsButton.addEventListener('click', () => {
    const section = document.getElementById('projectSection');
    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = document.querySelector('.navBar').offsetHeight;
    const scalingOffset = navbarHeight * 1.2;

    window.scrollTo({
        top: offsetTop - scalingOffset,
        behavior: 'smooth',
    });
    
});

const aboutButton = document.getElementById('about');

aboutButton.addEventListener('click', () => {
    const section = document.getElementById('aboutSection');
    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = document.querySelector('.navBar').offsetHeight;
    const scalingOffset = navbarHeight * 1.2;

    window.scrollTo({
        top: offsetTop - scalingOffset,
        behavior: 'smooth',
    });
    
});

const contactButton = document.getElementById('contact');

contactButton.addEventListener('click', () => {
    const section = document.getElementById('contactSection');
    const offsetTop = section.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = document.querySelector('.navBar').offsetHeight;
    const scalingOffset = navbarHeight * 1.2;

    window.scrollTo({
        top: offsetTop - scalingOffset,
        behavior: 'smooth',
    });
    
});

const homeButton = document.getElementById('home');

homeButton.addEventListener('click', (event) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    const scrollAnimationDuration = 1000;
    setTimeout(() => {
        scrollText.classList.remove('scrollHide')
        scrollText.classList.add('scrollAnimation');
    }, scrollAnimationDuration);
});

const lightModeButton = document.getElementById('lightModeButton');
let lightModeOn = true;

lightModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    lightModeOn = !lightModeOn;

    const title = document.querySelector('.beginTitle h1');
    const technology = document.querySelector('.innerLeftAbout p');
    const beginTitle2 = document.querySelector('.beginTitle h2');
    const technology2 = document.querySelector('.Technology');
    const scrollCSS = document.querySelector('.scroll');
    const blackText = document.querySelectorAll('.hidden');
    const blackBarProject = document.querySelectorAll('.allProjectsContainer');
    const blackBarExperience = document.querySelectorAll('.allExperienceContainer');

    if (lightModeOn) {
        document.body.style.backgroundColor = 'white';
        title.style.color = 'black'; 
        technology.style.color = 'black';
        beginTitle2.style.color = '#555';
        technology2.style.color = '#555';
        scrollCSS.style.color = 'black'; 
        blackText.forEach(element => {
            element.style.color = 'black';
            element.style.borderColor = 'black';
        })
        blackBarProject.forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'black';
        })
        blackBarExperience.forEach(element => {
            element.style.color = 'black';
            element.style.borderColor = 'black';
        })
    }
    else {
        document.body.style.backgroundColor = '#333';
        title.style.color = 'white'; 
        technology.style.color = 'white'
        beginTitle2.style.color = '#999';
        technology2.style.color = '#999';
        scrollCSS.style.color = 'white'; 
        blackText.forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'white';
        })
        blackBarProject.forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'white';
        })
        blackBarExperience.forEach(element => {
            element.style.color = 'white';
            element.style.borderColor = 'white';
        })
    }
    
}

toggleDarkMode();





