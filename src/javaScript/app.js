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
var swiperHone = new Swiper(".home__swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet:  (index, className) =>{
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
      },
      autoplay : {
        display : 500,
      }
    });

//  ---------------------- CHANGE BACKGROUND HEADER --------------------------
const bgHander = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add('bg-header'):
                        header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHander )

//  ---------------------- SHOW SCROLL UP --------------------------
const scrollUP =  () =>{
    const scrollUP = window.document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUP.classList.add("show-scroll") :
                           scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUP)

//  ---------------------- SHOW SCROLL UP --------------------------
const sections = document.querySelectorAll('section[id]')

scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass =  document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
    
}

window.addEventListener('scroll', scrollActive)
