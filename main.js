

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


