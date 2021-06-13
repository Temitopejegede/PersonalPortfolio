jQuery(document).ready(function() {
    jQuery(this).scrollTop(0);
    });
    
   
    //typing animation script
    
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    const textArray = [ 'Developer', 'ML Enthusiast', 'Programmer', 'CompSci Student' ];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
    if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
    }
    }
    
    function erase() {
    if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
    } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 900);
    }
    }
    
    
    window.onscroll = function() {
    myFunction()
    };
    
    var navbar = document.getElementsByClassName("navigation");
    
    var sticky = navbar.offsetTop;
    
    function myFunction() {
    if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
    } else {
     navbar.classList.remove("sticky");
    }
      }
    
    
    //code for the hamburger
    window.onload = function() {
    document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.navigation').classList.toggle('active');
    });
    };
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) setTimeout(type, newTextDelay + 100);
    });
    
    
   
    
    const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    rotate:{
    x:0,
    y:1,
    z:0,
    },
    desktop: true,
        mobile: true,
    reset: true,
    })
    
    sr.reveal('.navscroll1',{origin: 'top', delay: 500, interval: 100, reset: true})
    
    sr.reveal('.header_main_content_h1',{origin: 'right'})
    sr.reveal('.classForScroll',{origin: 'left'})
    sr.reveal('.scrollRevealSocials',{origin: 'right', delay: 800, interval: 200})
    sr.reveal('.header_main_img',{origin: 'right', delay: 300})
    sr.reveal('.cta',{origin: 'left'})
    
    
    
    sr.reveal('.about-heading',{origin: 'bottom'})
    sr.reveal('.scrollRevealAbout',{origin: 'right'})
    
    
    sr.reveal('.skill-section-heading', {origin: 'bottom'})
    
    sr.reveal('.skills__subtitle', {origin: 'left', delay: 200, interval: 50})
    
    sr.reveal('.developmentL', {origin: 'right', delay: 400, interval: 100})
    sr.reveal('.developmentR', {origin: 'left', delay: 300, interval: 100})
    sr.reveal('.dataScienceL', {origin: 'left', delay: 300, interval: 100})
    sr.reveal('.dataScienceR', {origin: 'right', delay: 200, interval: 100})
    
    sr.reveal('.databaseL', {origin: 'left', delay: 100})
    sr.reveal('.databaseR', {origin: 'right', delay: 100})
    
    sr.reveal('.LanguagesL', {origin: 'left', delay: 300, interval: 100})
    sr.reveal('.LanguagesR', {origin: 'right', delay: 200, interval: 100})