// Variable let const var
// let a = "steve"
// const b = "Aashi"
// a="Punya"
// console.log(a)
// console.log(b)

// function helloWorld( msg){
//     alert(msg)
// }

// helloWorld("Hi Delhi")
// const helloWorld = (msg) =>{
//     alert(msg)
// }
//heterongous
const items = ["hi","punya","brij","harshita","raj","subrata",2,4,2==2,{name:'steve'}]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i] +" hello")
// }

// arr.forEach(item => {
//     console.log(item)
// })

function showArrVal(arr){
    arr.forEach(cheez => {
        console.log(cheez)
    })
}

// showArrVal(items)

const obj = {
    name:'steve',
    designation:"Full Stack dev",
}
// console.log(obj.name,obj.designation)

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("heading").innerHTML = '<h1>Hello Punya</h1>'
})