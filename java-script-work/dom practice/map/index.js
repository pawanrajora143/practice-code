

const data = [
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 1",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 3 ",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 4",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 5",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Product 6",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting"
    },
    
]



const container = document.querySelector(".container")


const storeData = data.map((item)=>{


    container.innerHTML += `<div class="item">
                <img src="https://plus.unsplash.com/premium_photo-1682148388324-ae6ce01fbf18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                <h2>Product 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                <button>Buy</button>
            </div> `

})

storeData()