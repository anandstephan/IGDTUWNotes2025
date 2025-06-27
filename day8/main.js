let btn = document.getElementById("btn")
let target = document.getElementById("target")
let result = document.getElementById('result')

console.log(result)
function getData(){
fetch('https://dummyjson.com/products?limit=500')
    .then(res => res.json())
    .then(data => {
        result.innerHTML = ''
        data.products.forEach(item => {
            // console.log(item)
            let col = document.createElement("div");//<div></div>
            col.className = "col-md-4 col-sm-6 mb-4";//<div class="col-md-4 col-sm-6 mb-4"></div>

            // Create card inside column
            col.innerHTML = `
                <div class="card text-white bg-primary h-100">
                    <h1 style="display:none">${item.id}</h1>
                    <div class="card-header"><h5>${item.brand}</h5></div>
                    <div class="card-body">
                        <img src="${item.images[0]!==undefined ? item.images[0]:"https://images.unsplash.com/photo-1750175546521-67761dbc7400?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"}" class="img-thumbnail mb-2" width="100%" height="200"/>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            `;

            result.appendChild(col);

        })

        Array.from(document.getElementsByClassName("card")).forEach(item =>{
            item.addEventListener("click",function(){
                
                let id = item.firstElementChild.textContent
                console.log(id)
                window.location.href="http://localhost:5501/day8/product.html?pid="+id
            })
        })
    })
}
getData()
btn.addEventListener("click",function(){
    getData()
})

// btn.addEventListener("click",getData)