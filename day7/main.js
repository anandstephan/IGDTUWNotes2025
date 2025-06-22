//Callback 
// function trip(cb){
//     console.log("Going to a restaurant")
//     if(2===4){
//         cb()
//     }else{
//         console.log("Sorry! you're not eating golgaapa")
//     }
// }
// function golGappe(){
//     console.log("Eating GolGappe")
// }

// trip(golGappe)

function addToCart(cb){
    console.log("Adding Item To Cart")//Intern
    let res = "success"//API
    if(res === 'success'){
        cb(function (){
            console.log("Thanks for Shopping")
        })
    }else{
        console.log("You're not getting the item")
    }
}

function payment(greet){
    console.log("pay 2000 INR")
    greet()
}

// addToCart(payment)


// let addToCart = new Promise((resolve,reject) =>{
//         //Logic resolve,reject
//             resolve("hi Deepika")
   
// })
// addToCart
//     .then(res => {
//         payment()
//     })
//     .then(data => data())
//     .catch(err => console.log("Error",err))


// console.log("A")
// setTimeout(()=>{
//     console.log("B")
// },0)
// console.log("C")

//A C B

// console.log("A")
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(res => console.log(res))


// console.log("C")

let btn = document.getElementById("btn")
let result = document.querySelector("#result")

function addBtnListener(){
    console.log("A")
    fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then(res => res.json())
    .then(response => {
        console.log(response.data.data)
        let result1= response.data.data
        result.innerHTML = ''
        let html=""// count++ // count = count+2 count+=2
        result1.forEach(item => {
            html  += `<div> 
                        <h1>${item.title}</h1>
                        <h3>${item.description}</h3>
                        <img src=${item.thumbnail}/ >
                        <h3>Rs.${item.price}</h3>
                </div>`

        })
        result.innerHTML = html

    })
    .catch(err => console.log("Error",err))
    console.log("B")
}

// btn.addEventListener("click",addBtnListener)
window.addEventListener("DOMContentLoaded",addBtnListener)