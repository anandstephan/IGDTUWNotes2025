// Feature
// Add Item
// Delete Item
// Update
// -------Add Item---------
// Step 1 first get the btn and attach the listener
// Step 2 get the Value from the input box
// Step 3 append on the last item

let btn = document.getElementById("komal")
// console.log(btn)
let items = document.getElementById("items") //<ul></ul>


btn.addEventListener('click',function(){
    let inputVal = document.getElementById("input").value
    let listItem = document.createElement("li") //<li></li>
    listItem.appendChild(document.createTextNode(inputVal)) // <li>abc </li>
    listItem.className = 'list-group-item' // <li class="list-group-item">abc</li>
    items.prepend(listItem)//<ul><li class="list-group-item">abc</li>
    document.getElementById("input").value="" 
})

items.addEventListener("dblclick",function(e){
    items.removeChild(e.target)
})