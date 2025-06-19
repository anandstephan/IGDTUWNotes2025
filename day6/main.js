// console.log("steve") // 
// setTimeout(()=>{
//     console.log("Black Widow")
// },100)

// for(let i=0;i<1000000000;i++);

// console.log("Natasha Romanoff")lback 


//Callback ,Promises & Async Await 

//Functions

// function jiit(){// Normal Function
//     console.log("welcome to IGDTU")
// }

// const sayMyName = () =>{ //Arrow / Thick Arrow
//     console.log("My name is Anand")   
// }

// //Anonymouus
// document.getElementById("abc").addEventListener("click",function(){

// })

// //Callback // High Order Function
// setTimeout(()=>{
//     console.log("hi")
// },2000)

// //IIFE --> Immediate Invoke Function Expression
// (()=>{
//     console.log("hi")
// })();

//Array
let arr = [1,2,3,4,5,7,10]
let result =arr.forEach((item,idx) =>{
    return item
})
console.log("result",result)

let result1 =arr.map((item,idx) =>{
    return item
})
// console.log("result",result1)

let filter = arr.filter(item => item%2===0)
console.log("filter",filter)

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

