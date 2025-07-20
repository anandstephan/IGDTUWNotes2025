import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const requireLogin =async (req,res,next) =>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({msg:"You must be login"})
    }
    const token = authorization.replace("Bearer ","")

    try {
        const payload = jwt.verify(token,'catanddogs')
        const {id} = payload
        const userData = await User.findById(id)
        if(!userData){
            return res.status(401).json({error:"User Not Found"})
        }
        req.user = userData
        next()

    } catch (error) {
       console.log("error",error) 
    }
}

export default requireLogin