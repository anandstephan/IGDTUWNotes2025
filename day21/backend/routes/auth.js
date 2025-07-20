import { Router } from "express";
import User from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import requireLogin from "../middleware/requireLogin.js";
const router = Router()

router.post("/signup",async(req,res) =>{
    const {name,email,password,pic} = req.body

    if(!email || !name || !password){
        return res.status(422).json({error:"Please Fill All the Fields"})
    }else{
       const savedUser= await User.findOne({email:email})
       if(savedUser){
        return res.status(422).json({error:"User Already exists"})
       }else{
        //save
        const encryptPasswrod = await bcrypt.hash(password,12)
        const newUser = new User({
            name,
            email,
            password:encryptPasswrod,
            pic
        })
        await newUser.save()
        return res.status(200).json({msg:"User Added Succesfully"})
       }
    }
})

router.post("/login",async(req,res) =>{
    const {email,password} = req.body
     if(!email || !password){
        return res.status(422).json({error:"Please Fill All the Fields"})
    }else{
        const userFoundOrNot = await User.findOne({email:email})
        if(userFoundOrNot){
            const UserValidOrNot = await bcrypt.compare(password,userFoundOrNot.password)
            if(UserValidOrNot){
                const token = jwt.sign({id:userFoundOrNot._id},'catanddogs') //token
                return res.status(200).json({token,userFoundOrNot})
            }else{
                return res.status(422).json({error:"Invalid Password"})
            }
        }else{
            return res.status(422).json({error:'Invalid Email'})
        }
    }
})

router.get("/protected",requireLogin,(req,res) =>{
    res.send(req.user)
})


export default router