var a = document.querySelector("h1")
a.style.color="yellow"
var button = document.querySelector("button")


var bulm = 0;


button.addEventListener("click" , function(){

    if(bulm == 0){
        a.style.backgroundColor="yellow"
        bulm = 1
        button.innerHTML="on"
    }
else{
    a.style.backgroundColor="transparent"
    bulm = 0
    button.innerHTML="off"
}
    
})