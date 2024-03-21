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
if(window.scrollY >300){
backToTop.style.display="block"
}
else{
        backToTop.style.display="none"
}
})


// ===============code header sticky button=============

const header = document.querySelector("#header")
const imgageChange1 = document.querySelector(".frst1")
const imgageChange2 = document.querySelector(".frst2")

window.addEventListener("scroll" , ()=> {
if(window.scrollY >400){

    header.classList.add("sticky")
    imgageChange1.style.display="none"
    imgageChange2.style.display="block"
}
else{
    header.classList.remove("sticky")
    imgageChange1.style.display="block"
    imgageChange2.style.display="none"
}

})


