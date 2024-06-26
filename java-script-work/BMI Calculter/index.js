
const formData = document.querySelector("form")


formData.addEventListener("submit" ,(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    // console.log(typeof height)
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(typeof weight)

    const result = document.querySelector(".result")
    

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "please give a valid  height"
    }


    else if (weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "please give a valid  weight"
    }
    

    else{
        const bmi =  (weight  / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            result.innerHTML = `you are under the weight =  ${bmi}`
            
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `you are helthy ${bmi}`
            
        }
        else if (bmi > 24.9) {
            result.innerHTML = `you are Fatty ${bmi}`
            
        }
        
     }

    






   

   


})