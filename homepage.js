const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".services").forEach( button => button. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".services").forEach(button => { 
    button. addEventListener("click" , () => {
    const dropdown = button.nextElementSibling;

    button.classList.toggle('services--active');

    if (button.classList.contains('services--active')) {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    } else {
        dropdown.style.maxHeight = 0;
    };
    });
});
