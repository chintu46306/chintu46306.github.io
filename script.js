<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 39c0f27 (init)
console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
        if(  document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
        document.querySelector('.main').style.width = '100%'

       }
       else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'   
        }, 350);
    }
<<<<<<< HEAD
})
=======
})
=======
/* toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* scroll selections active link */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrolly;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* sticky navbaar */

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* remove toggle icon and navbar when click navbar link (scroll)  */

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* scroll to top button */

ScrollReveal({
 // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom'}
);
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' }
);

ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' }
);


/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
>>>>>>> fbe03a4 (init)
>>>>>>> 39c0f27 (init)
