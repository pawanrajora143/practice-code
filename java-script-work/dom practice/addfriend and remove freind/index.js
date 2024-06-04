

var a = document.querySelector("h1")

var addFriend = document.querySelector("#add")


var flag = 0;


addFriend.addEventListener("click" , function(){

    if(flag == 0){
        a.innerHTML="Freind"
        a.style.color="green"
        addFriend.innerHTML="Remove Friend"
        addFriend.style.backgroundColor="green"
        flag = 1;
        
    }

    else{
        a.innerHTML="Stranger"
        a.style.color="red"
        addFriend.innerHTML="Add Friend"
        addFriend.style.backgroundColor="black"
        flag = 0;
    }

   
    
})



// removeFriend.addEventListener("click" , function(){

//     a.innerHTML="Stranger"
//     a.style.color="green"
// })