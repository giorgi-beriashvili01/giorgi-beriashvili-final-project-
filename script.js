let burgerMenu = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".menu");

burgerMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add("show");
    burgerMenu.style.display = "none";
    xMark.style.display = "block";
})

xMark.addEventListener("click", ()=> {
    mobileMenu.classList.remove("show");
    burgerMenu.style.display = "block";
    xMark.style.display = "none";
})