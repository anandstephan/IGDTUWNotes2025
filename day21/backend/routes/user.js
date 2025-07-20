import { Router } from "express";
import requireLogin from "../middleware/requireLogin.js";
import User from '../models/user.js'
import Post from "../models/post.js";

const router = Router()

router.get("/user/:id",requireLogin,async(req,res) =>{
    const posts = await Post.find({postedBy:req.params.id})
    return res.status(200).json(posts)
})

//Anand ->                     blackwidow
//follower[],following[blackwidow]       followers[anandId] following[]
router.put("/follow",requireLogin,async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.user._id}
    })
    await User.findByIdAndUpdate(req.user._id,{
        $push:{following:req.body.followId}
    })
    return res.status(200).json({msg:"User Followed"})
})


router.put("/unfollow",requireLogin,async(req,res) =>{
    const user = await User.findByIdAndUpdate(req.body.followId,{
        $pull:{followers:req.user._id}
    })
    await User.findByIdAndUpdate(req.user._id,{
        $pull:{following:req.body.followId}
    })
    return res.status(200).json({msg:"User UnFollowed"})
})


export default router