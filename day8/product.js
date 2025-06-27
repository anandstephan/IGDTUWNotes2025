const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
let id = urlParams.get('pid')

window.addEventListener('DOMContentLoaded',function(){

   fetch('https://dummyjson.com/products/'+id)
   .then(res => res.json())
   .then(data => {
    console.log(data)
        let pname = document.getElementById("pname")
        let pimg = document.getElementById("pimg")
        let cat = document.getElementById("cat")
        let desc = document.getElementById("desc")
        let price = document.getElementById("price")
        pname.innerText = data.brand
        pimg.src = data.images[0]
        cat.innerText= data.category
        desc.innerText = data.description
        price.innerText = "Rs. "+Math.round(data.price)
   })
})