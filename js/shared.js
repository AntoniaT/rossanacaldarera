const burgerMenu = document.querySelector("#burgerMenu");
const closeNav = document.querySelector("#closeMenu");

burgerMenu.addEventListener("click", openMenu);


function openMenu() {
    let openNav = document.querySelector(".overlay")
    openNav.classList.remove("hidden")
    console.log("I am working");
}

function closeMenu (){
    closeNav.classList.add("hidden");
}
