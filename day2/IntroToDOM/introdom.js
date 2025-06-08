
// console.log(document)
// document.body.style.backgroundColor="red" // DOM

// 5 functions
// document.getElementById("abc") // ById Method
// let header = document.getElementById("main-header")
// header.style.setProperty('background-color', 'blue', 'important');

// let title = document.getElementById("header-title")
// console.log(title)
// title.textContent = "Hello Subrata"
// title.innerHTML = '<marquee>Hello Punya</marquee>'
// title.style.border="2px solid red"


// document.getElementsByClassName() // ByClassName Method
// let items = document.getElementsByClassName("list-group-item")
// // console.log(items[0])
// // items[0].textContent= 'Bhavya'
// // items[0].style.fontWeight="bold"
// // items[0].style.backgroundColor="yellow"
// // items[1].textContent = "Hi Komal"

// for(let i=0;i<items.length;i++){
//     if(i%2==0){
//         items[i].style.backgroundColor="yellow"
//     }else{
//         items[i].style.backgroundColor="blue"
//     }
// }

//QuerySelector
// console.log(document.querySelector("#header-title")) // # stands for id , . stands for class, if you can't pass anything they think as a Tag
// let headerTitle = document.querySelector("#header-title")
// console.log(headerTitle)
// headerTitle.innerText = "Change Anything"

// let list = document.querySelector(".list-group-item")
// console.log(list

//QuerySelector All
// let list = document.querySelectorAll(".list-group-item")
// console.log(list)

// Event Listener

let btn = document.getElementById("btn")
// console.log(btn)
// btn.addEventListener("click",function(){
//    let inputVal = document.getElementById("input").value
//    let firstItem = document.querySelector(".list-group-item")
//    firstItem.textContent = inputVal
//    document.getElementById("input").value = ''
// })

btn.addEventListener("dblclick",function(){
    let inputVal = document.getElementById("input").value
    let firstItem = document.querySelector(".list-group-item")
    firstItem.textContent = inputVal
    document.getElementById("input").value = ''
})


// window.addEventListener("DOMContentLoaded",function(){
//     alert("hi guyzzzz")
// })

// let mainBox = document.getElementById("main")

// mainBox.addEventListener("mousemove",function(e){
//         console.log(Math.round(e.clientX/3),e.clientY)
//         let red = Math.round(e.clientX/3)
//         let green = Math.round(e.clientY)
//         let rgba = rgba(${red},${green},0)
//         let rgba1 =  rgba(${green},${red},0)
//         document.body.style.backgroundColor= rgba
//         mainBox.style.backgroundColor = rgba1
// })
