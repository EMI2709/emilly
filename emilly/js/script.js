let menuMobile = document.getElementById("menuMobile");
let iconMobile = document.getElementById("iconMenu");
let topMenu = document.querySelector(".top");
let midMenu = document.querySelector(".mid");
// menuMobile.addEventListener("click,", () =>  {
//     if (iconMobile.classList.contains("fa-bars")) {
//         iconMobile.classList.remove("fa-bars");
//         iconMobile.classList.add("fa-x");
//         topMenu.style.left = "0px";
//         midMenu.style.left = "0px";
//     }
//     else {
//         iconMobile.classList.remove("fa-x");
//         iconMobile.classList.add("fa-bars");
//         topMenu.style.left = "-1000px";
//         midMenu.style.left = "-1000px";
//     }
// })
menuMobile.addEventListener("click", menuOpen)

function menuOpen() {
    if (iconMobile.classList.contains("fa-bars")) {
        iconMobile.classList.remove("fa-bars");
        iconMobile.classList.add("fa-x");
        topMenu.style.left = "0px";
        midMenu.style.left = "0px";
    }
    else {
        iconMobile.classList.remove("fa-x");
        iconMobile.classList.add("fa-bars");
        topMenu.style.left = "-1000px";
        midMenu.style.left = "-1000px";
    }
}