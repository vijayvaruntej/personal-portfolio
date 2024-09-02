/* TOGGLE ICON NAVBAR */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* SCROLL SECTION ACTIVE LINK */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    };
});
/*  STICKY NAVBAR */
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*REMOVE TOGGLE ICON AND NAVBAR */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};
/*-----------------------SCROLLOREVEAL -----------------------*/
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay: 200, 
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'top' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*-----------------------TYPED JS -----------------------*/
const typed = new Typed('.multiple-text', {
    strings: ['B.Tech Graduate','Java Developer', 'Professional Video Editor', 'Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay:1000,
    loop: true,
});

/*-----------------------CONTACT -----------------------*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // Construct the mailto link
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage: ' + message)}`;
  
    // Open the mailto link
    window.location.href = mailtoLink;
  });
  
