//  ---------------------- SHOW MENU --------------------------
const navMenu = window.document.getElementById('nav-menu')
const navToggle = window.document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

// menu show
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

// menu hidden
if (navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}