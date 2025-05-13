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

//  ---------------------- REMOVE MENU MOBILE --------------------------
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () =>{
   const navMenu = document.getElementById("nav-menu")
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener("click", linkAction))

//  ---------------------- SWIPER HOME --------------------------
const swiperHome = new Swiper (".home__swiper",{
    pagination : {
        el : ".swiper-pagination",
        clickkable : true,
        renderBullet : (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>"
        }
    }
})
