const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) =>{
   if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if(err) console.log('error',err)
            res.writeHead(200,{'Content-type':"text/plain"})
            res.end(content)
        })
   }else if(req.url === '/about')//http:192.168.1.37:3000/about
   {
    fs.readFile(path.join(__dirname,'public','about.html'),(err,content) =>{
        if(err) console.log("Error",err)
        res.writeHead(200,{'Content-type':"text/html"})
        res.end(content)
    })
   }
   else if(req.url === '/contact'){
    fs.readFile(path.join(__dirname,'public','contact.html'),(err,content) =>{
        if(err) console.log("Error",err)
        res.writeHead(200,{'content-type':'text/html'})
        res.end(content)
    })
   }
})

const PORT = 3000

server.listen(PORT,()=>console.log(`Server is running at ${PORT}`))