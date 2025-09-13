// spinner key liye 



const spinner = document.querySelector("#spinner");


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; 


  spinner.style.transform = `rotate(${scrollY * 9}deg)`; 

  
  spinner.style.top = `${50 + scrollY * 0.1}%`; 
});


// navbar ke liye 

const navItems = document.querySelectorAll(".navbar-nav .nav-item");


navItems.forEach((item, index) => {
  setTimeout(() => {
    item.style.opacity = "1"; 
    item.style.transform = "translateY(0)"; 
    item.style.transition = "opacity 0.9s ease, transform 0.9s ease"; 
  }, index * 300); 
});


const counterInput = document.getElementById('counter');


counterInput.addEventListener('input', (event) => {
  console.log(`Current value: ${counterInput.value}`);
});


// shevrons ke liye 


document.addEventListener("DOMContentLoaded", function () {
  const chevrons = document.querySelectorAll(".shapes > div");

  chevrons.forEach((chevron, index) => {
    const speed = 2; 
    let position = window.innerHeight;

    function animateChevron() {
      position -= speed; 

      if (position < -chevron.offsetHeight) {
        position = window.innerHeight;
      }

      chevron.style.top = `${position}px`; 
      requestAnimationFrame(animateChevron);
    }

    setTimeout(animateChevron, index * 2000); 
  });
});











const sections = document.querySelectorAll('section');

    
const revealSections = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    
    if (sectionTop < windowHeight - 100) {
      section.classList.add('show');
    }
  });
};


window.addEventListener('scroll', revealSections);


revealSections();

// cookie wala section -===========================================================================================


function openModel(){
  document.getElementById("myModel").showModal();
}
function closeModel(){
  document.getElementById("myModel").close();
}

// pop up wala section =============================================================================================



function closecrose(){
  document.getElementById("pop-up").close();
}



// toggle switch ka code =========================================================================================

function toggleSwitch(element) {
  element.classList.toggle("active");
}




 

// horizontally rotation para ==============================================================================
const marqueeTrack = document.getElementById("marquee-track");
const marqueeContainer = document.getElementById("marquee-container");
let offset = 0;
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? 1 : -1;
    offset += direction * 5; 
    const trackWidth = marqueeTrack.scrollWidth;
    if (offset > trackWidth / 2) offset -= trackWidth / 2;
    if (offset < 0) offset += trackWidth / 2;

    marqueeTrack.style.transform = `translateX(${-offset}px)`;
    lastScrollY = currentScrollY;
});