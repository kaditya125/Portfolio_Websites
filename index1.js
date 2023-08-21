let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' +id+']').classList.add('active');
           });
        };
    });


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-conent, .heading',{ origin: 'top' });
 ScrollReveal().reveal('.home_img, .services-container, .portfolio-box, .contact form',{ origin: 'top' });
 ScrollReveal().reveal('.home-conent h1, .about_img',{ origin: 'left' });
 ScrollReveal().reveal('.home-conent p, .about-content',{ origin: 'right' });

 const typed = new Typed('.multiple-text',{
    strings: ['JAVA DEVELOPER,FRONTEND DEVELOPER,PAINTER,DATA MINER'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });
 const typed1 = new Typed('.me',{
    strings: [' Me'],
    typeSpeed: 500,
    backSpeed: 500,
    backDelay: 1000,
    loop: true
 });
 const typed2 = new Typed('.services',{
    strings: ['Services'],
    typeSpeed: 500,
    backSpeed: 500,
    backDelay: 1000,
    loop: true
 });
 const typed3 = new Typed('.!!',{
    strings: ['!!!'],
    typeSpeed: 500,
    backSpeed: 500,
    backDelay: 1000,
    loop: true
 });