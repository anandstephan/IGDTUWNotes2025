import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        likes:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
        comments:[{
            text:String,
            postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
        }],
        postedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
})

const Post = mongoose.model('Post',postSchema)

export default Post