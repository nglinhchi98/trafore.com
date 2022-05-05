const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".services").forEach( button => button. addEventListener("click", () => {
    hamburger.classList.remove("active");
//  navMenu.classList.remove("active");
}))

('nav ul li .service').click(function(){
('nav ul li .service span').toggleClass("rotate");})