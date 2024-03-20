// ===============code for nav toogle=============

const nav = document.querySelector("ul")
const navtoggle = document.querySelector(".nav-toggle")
navtoggle.addEventListener("click" , function(){
    
    if(navtoggle.firstElementChild.classList.contains("fa-bars"))
    {
        navtoggle.firstElementChild.classList.replace("fa-bars" , "fa-times");
        nav.style.left="0"
    }
    else{
        navtoggle.firstElementChild.classList.replace("fa-times" , "fa-bars")
        nav.style.left="-100%"
    }
})

// ===============code for Back to top button=============


const backToTop = document.querySelector(".on-top")

window.addEventListener("scroll" , ()=> {
if(window.scrollY > 600){

    backToTop.style.display="block"
    
}
else{

    backToTop.style.display="none"
}

})


