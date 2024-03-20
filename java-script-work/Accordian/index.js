const faqs = document.querySelectorAll(".faqs")

// faqs.forEach((faqs)=>{
// faqs.addEventListener("click" , ()=>{
 
//     for(var i = 0; i<faqs.length; i++){
//         if(faqs[i] != faqs){
//             faqs[i].classList.remove("active");
//     }
// else{
//     faqs.classList.toggle("active");
// }

//     }  
// });
// });

faqs.forEach((item)=>{

    item.addEventListener("click" , ()=>{

        // item.classList.toggle("active") 

        for(var i = 0; i<faqs.length; i++){
            if(faqs[i] != item){
                faqs[i].classList.remove("active")
            }
            else{

                item.classList.toggle("active") 
            }

        }

    })
})













