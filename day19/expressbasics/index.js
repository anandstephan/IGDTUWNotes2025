const express = require('express') //import
const path = require('path')
const members = require('./Members.js') //import
const app = express()




// app.use(express.static(path.join(__dirname,'public')))

//GET (READ),POST(CREATE),PUT(UPDATE),DELETE(DELETE)
//API
// app.get("/test",(req,res) =>{
//     return res.status(200).json({msg:"Hello Server App"})
// })

// app.post("/test/:id",(req,res) =>{
//     console.log(req.params.id)
//     // return res.status(200).json({msg:"This is from post"})
// })

//Representation STate Transfer 



app.use(express.json()) //accept any json data // Middleware

//API
app.post("/addMember",(req,res) =>{ //ADD User (CREATE) (POST)
        let user = req.body
        members.push(user)
        return res.status(200).json({msg:"Member Added Succeesfully",members})
})


app.get('/member/:name',(req,res) =>{ // READ (GET)
    const name = req.params.name
    const member = members.filter(item =>item.name === name)
    if(member.length!==0){
        return res.status(200).json({msg:"Member found",member:member[0]})
    }else{
        return res.status(200).json({msg:"No Member Found"})
    }
})
app.get("/members",(req,res) =>{ //READ (GET)
    return res.status(200).json({msg:"All Member",members})
})

app.delete("/member/:id",(req,res) =>{ // DElETE (DELETE)
    let id = req.params.id
    const updatedMembers = members.filter(item => item.id!= id)
    return res.status(200).json({msg:"Member Deleted Successfully",updatedMembers})
})

app.put("/member/:id",(req,res) =>{
    let id = parseInt(req.params.id)
    members.forEach(item => {
        if(item.id === id){
            item.name = req.body.name
        }
    })
    return res.status(200).json({msg:"Member Updated",members})
})



const PORT = 3000

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))