function getData(){
fetch('https://dummyjson.com/products?limit=500')
    .then(res => res.json())
    .then(data => console.log(data))
}

getData()