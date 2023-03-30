/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}

/* scroll section active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* STICKY nAVBAR */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon and navbar when click navbar link(scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


 /* Scroll reval */
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration:2000,
    delay:200
 });
  
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});



 const typed = new Typed('.multiple-text', {
    strings: ['Wellcome'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
	
 });
 const type = new Typed('.single-text', {
    strings: ['Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
	
 });

 const skillsContent = document.getElementsByClassName('skills__content'),
       skillsHeader = document. querySelectorAll('.skills__header')

 function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
    
 }

 skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
 }
 )

 /* Services modal
 const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modelCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

 modalBtns.forEach((modalBtn , i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
 })

 modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
 }) */

 const prt_section = document.querySelector(".portfolio");
 const zoom_icons = document.querySelectorAll(".zoom-icon");
 const modal_overlay = document.querySelectorAll(".modal-overlay");


zoom_icons.forEach((icn) => 
 icn.addEventListener("click", () => {
    prt_section.classList.add("open");
 })
);

modal_overlay.addEventListener("click", ()=> 
 prt_section.classList.remove("open"),
);







