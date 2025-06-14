let form = document.querySelector("#book-form")
const list = document.querySelector("#book-list")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let isbn = document.querySelector("#isbn").value
    
    if(title.length===0 || author.length===0 || isbn.length===0){
        alert("Please Fill all the Field!!!")
        return;
    }

    const list = document.querySelector("#book-list")
    const row = document.createElement("tr")//<tr></tr>
    row.innerHTML = `
    <td>${title}</td>
        <td>${author}</td>
            <td>${isbn}</td>
            <td><td class="btn btn-danger float-right delete"><a  type="button" >X</a></td>
            `
    list.appendChild(row)
    document.querySelector("#title").value = null
    document.querySelector("#author").value = null
    document.querySelector("#isbn").value = null
    
    //Append object in the local storage
    let books
    if(localStorage.getItem("books") === null){
        books = []
    } else{
        books = JSON.parse(localStorage.getItem("books"))
    }
    books.push({title,author,isbn}) // [{title:'abc',author:"pqr",isbn:123}]
    localStorage.setItem("books",JSON.stringify(books))

})

list.addEventListener('click',function(e){
    // console.log(e.target.classList.contains("delete"))
    if(e.target.classList.contains("delete")){
        let parentElement = e.target.parentElement.parentElement
        list.removeChild(parentElement) // Remove from the UI
        //--Remove book from local storage
        let isbn = e.target.parentElement.previousElementSibling.textContent
        let books = JSON.parse(localStorage.getItem("books"))
        let newbooks = []
        for(let i=0;i<books.length;i++){
            if(books[i].isbn!==isbn){
                newbooks.push(books[i])
            }
        }
        localStorage.setItem("books",JSON.stringify(newbooks))

    }
})

window.addEventListener("DOMContentLoaded",function(){
   let books = JSON.parse(localStorage.getItem("books"))
   const list = document.querySelector("#book-list")
   for(let i=0;i<books.length;i++){
    const row = document.createElement("tr")//<tr></tr>
    row.innerHTML = `
    <td>${books[i].title}</td>
        <td>${books[i].author}</td>
            <td>${books[i].isbn}</td>
        <td><a class="btn btn-danger float-right delete" href="#">X</a></td>
            `
    list.appendChild(row)
   }
  
})