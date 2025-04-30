document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".ham");
    const navbar = document.querySelector(".head");
    hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    });
});