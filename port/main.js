window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
const servicemodals = document.querySelectorAll(".service-modal");
const learnmorebtns = document.querySelectorAll(".learn-more-btn");
const modalclosebtns = document.querySelectorAll(".modal-close-btn");
var modal = function(modalclick){
    servicemodals[modalclick].classList.add("active");
}
learnmorebtns.forEach((learnmorebtns, i)=>{
    learnmorebtns.addEventListener("click", () => {modal(i);
    });
});
modalclosebtns .forEach((modalclosebtns)=>{
    modalclosebtns.addEventListener("click", () => {
        servicemodals.forEach((modalview) => {
            modalview.classList.remove("active");
        });
    });
});
const portfoliomodals = document.querySelectorAll(".portfolio-modal");
const imgcards = document.querySelectorAll(".img-card");
const portfolioclosebtns = document.querySelectorAll(".portfolio-close-btn");
var portfoliomodal = function(modalclick){
    portfoliomodals[modalclick].classList.add("active");
}
imgcards.forEach((imgcard, i)=>{
    imgcard.addEventListener("click", () => {portfoliomodal(i);
    });
});
portfolioclosebtns .forEach((portfolioclosebtn)=>{
    portfolioclosebtn.addEventListener("click", () => {
        portfoliomodals.forEach((portfoliomodalview) => {
            portfoliomodalview.classList.remove("active");
        });
    });
});

const themebtn = document.querySelector(".theme-btn");

themebtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themebtn.classList.toggle('sun');

    localStorage.setItem("saved-theme", getcurrenttheme());
    localStorage.setItem("saved-icon", getcurrenticon());
});

const getcurrenttheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getcurrenticon = () => themebtn.classList.contains("sun") ? "sun" : "moon";

const savedtheme = localStorage.getItem("saved-theme");
const savedicon = localStorage.getItem("saved-icon");

if(savedtheme){
    document.body.classList[savedtheme == "dark" ? "add" : "remove"]("dark-theme");
    themebtn.classList[savedicon === "sun" ? "add" : "remove"]("sun");
}

const scrolltopbtn = document.querySelector(".scrolltotop-btn");

window.addEventListener("scroll", function(){
scrolltopbtn.classList.toggle("active", this.window.scrollY > 500);
});

scrolltopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () =>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionheight = current.offsetHeight;
        let sectiontop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectiontop && scrollY <= sectiontop + sectionheight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navitems = document.querySelectorAll(".nav-items a");
   
menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
        });

closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
            });

            navitems.forEach((navitem) => {
                navitem .addEventListener("click", () =>{
                    navigation.classList.remove("active");
                });
            });


        ScrollReveal({
        // reset: true,
        distance:"60px",
        duration: 2500,
        delay: 100
        });

        ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02',{delay: 500, origin: 'left' });
        ScrollReveal().reveal('.home .info h3, .home .info p,.about-info .btn',{delay: 600, origin: 'right' });
        ScrollReveal().reveal('.home .info .btn',{delay: 700, origin: 'bottom' });
        ScrollReveal().reveal('.media-icons i, .contact-left li',{delay: 500, origin: 'left', interval: 200 });
        ScrollReveal().reveal('.home-img, .about-img',{delay: 500, origin: 'bottom' });
        ScrollReveal().reveal('.about .description, .contact-right',{delay: 600, origin: 'right' });
        ScrollReveal().reveal('.about .professional-list li',{delay: 600, origin: 'right', interval: 200 });
        ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .contact-left h2',{delay: 700, origin: 'left', interval: 200 });
        ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card',{delay: 800, origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('footer .group',{delay: 500, origin: 'top', interval: 200 });
        
        // const alternateColor = document.querySelectorAll(".alternate-style");
        // function setActiveStyle(color) {
        //   alternateColor.forEach((style) => {
        //     if (color === style.getAttribute("title")) {
        //       style.removeAttribute("disabled");
        //     } else {
        //       style.setAttribute("disabled", "true");
        //     }
        //   });
        // }