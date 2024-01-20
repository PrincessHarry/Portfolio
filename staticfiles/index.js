
// const navbarToggle = document.getElementById('navbar-toggle');
// const navbar = document.querySelector('.navbar');

// navbarToggle.addEventListener('click', () => {
//   navbar.classList.toggle('active');
// });



// Testimonials
const testimonialSlides = document.querySelectorAll('.testimonial');
let currentTestimonialSlide = 0;
testimonialSlides[0].classList.add('active');

function goToTestimonialSlide(slideIndex) {
    testimonialSlides[currentTestimonialSlide].classList.remove('active');
    testimonialSlides[slideIndex].classList.add('active');
    currentTestimonialSlide = slideIndex;
}

function nextTestimonialSlide() {
    const nextTestimonialSlideIndex = (currentTestimonialSlide + 1) % testimonialSlides.length;
    goToTestimonialSlide(nextTestimonialSlideIndex);
}

setInterval(() => {
    nextTestimonialSlide();
}, 6000);

// Projects
const projectsContainer = document.querySelector('.my_project');
const projectSlides = document.querySelectorAll('.project');
const projectIndicatorsContainer = document.querySelector('.indicators');

let currentProjectSlide = 0;

function showProjectSlide(projectIndex) {
    projectSlides.forEach((project, index) => {
        if (index === projectIndex) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

function createProjectIndicators() {
    projectSlides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => {
            showProjectSlide(index);
            currentProjectSlide = index;
            updateProjectIndicators();
        });
        projectIndicatorsContainer.appendChild(indicator);
    });
}

function updateProjectIndicators() {
    const projectIndicators = document.querySelectorAll('.indicator');
    projectIndicators.forEach((indicator, index) => {
        if (index === currentProjectSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextProjectSlide() {
    currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
    showProjectSlide(currentProjectSlide);
    updateProjectIndicators();
}

function prevProjectSlide() {
    currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
    showProjectSlide(currentProjectSlide);
    updateProjectIndicators();
}

createProjectIndicators();
showProjectSlide(currentProjectSlide);
updateProjectIndicators();

// typing text
// const text = "Software Developer";
// const softwareText = document.getElementById("software-text");

// function addTypingEffect(text) {
//   let i = 0;
//   setInterval(() => {
//     softwareText.textContent = text.slice(0, i++);
//     if (i > text.length) i = 0;
//   }, 100);
// }
// addTypingEffect(text);

//skill background
// function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const icons = document.querySelectorAll('.icon');
//     icons.forEach(icon => {
//       const left = random(0, window.innerWidth - 50); // Adjust the width of the icon
//       const top = random(0, window.innerHeight - 50); // Adjust the height of the icon
//       icon.style.left = left + 'px';
//       icon.style.top = top + 'px';
//     });
//   });
  
  