function debounce(fun,delay){
    let timer;
    return function(...args){
        const context = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun.apply(context,args)
        },delay)
    }
}

function handleSearch(event) {
    console.log("Searching for ",event.target.value)
}

const debouncedSearch = debounce(handleSearch,300)


document.getElementById('search').addEventListener("input",debouncedSearch)