import express from 'express'
import { Router } from 'express'
import requireLogin from '../middleware/requireLogin.js'
import Post from '../models/post.js'
const router = Router()

router.post("/createPost",requireLogin,async (req,res) =>{
    const {title,body,pic} = req.body
    if(!title || !body || !pic){
        return res.status(422).json({error:'Please Fill all the Fields'})
    }
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    await post.save()
    return res.status(200).json({msg:"Post Created Successfully"})
})

router.post("/mypost",requireLogin,async (req,res) =>{
    try {
    const result = await Post.find({postedBy:req.user._id})
    return res.status(200).json({myPost:result})        
    } catch (error) {
        console.log("Error",error)
    }

})

router.post("/allpost",requireLogin,async(req,res) =>{
    try {
        const result = await Post.find()
        return res.status(200).json({msg:"All Posts",result})
    } catch (error) {
        console.log("Error",error)
    }
})

router.post("/like",requireLogin,async (req,res) =>{
    const result = await Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    })
    return res.status(200).json({result})
})

router.post("/unlike",requireLogin,async (req,res) =>{
    const result = await Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    })
    return res.status(200).json({result})
})

router.put("/comment",requireLogin,async(req,res) =>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    const result = await Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    })
    return res.status(200).json({msg:"Comment Added",result})
})

router.delete('/deletepost/:postId',requireLogin,async (req,res) =>{
    const result = await Post.findOne({_id:req.params.postId})
    console.log(result)
    if(result.postedBy._id.toString() === req.user._id.toString()){
        await Post.findByIdAndDelete(result._id)
    }
return res.status(200).json({msg:"Post Deleted Successfully"})
})

router.get("/getsubpost",requireLogin,async(req,res) =>{
   const result= Post.find({postedBy:{$in:req.user.following}})
   console.log(result)
//    return res.status(200).json({result}) 
})

export default router