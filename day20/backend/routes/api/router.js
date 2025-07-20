const express =  require('express')
const bcrypt = require('bcrypt')
const users = require('../../users')
const User = require('../../model/User')
const router = express.Router()


router.post("/addUser",async (req,res) =>{
    console.log(req.body)
    const encryptedPassword = await bcrypt.hash(req.body.password,12)
    // users.push({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:encryptedPassword,city:req.body.city})

    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:encryptedPassword,
        city:req.body.city,
        email:req.body.email
    })
    const response = await newUser.save()
    console.log("==>",response)
    return res.status(200).json({msg:"User Created Successfully",response})
})


router.get("/showUsers",async (req,res) =>{
    const users = await User.find()
    return res.status(200).json(users)
})

//UPDATE -> User.findByIdAndUpdate()

//DELETE -> User.findByIdAndDelete()

module.exports = router