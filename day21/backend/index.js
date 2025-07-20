import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import AuthRouter from './routes/auth.js'
import postRouter from './routes/post.js'
import userRouter from './routes/user.js'
const app = express()


async function connectDB(){
    try {
    const response =  await mongoose.connect('mongodb+srv://anandstephen:1234567890@cluster0.m8g8e.mongodb.net/IGCLONE')
        console.log("DB Connected Successful")
} catch (error) {
        console.log("Connection Error",error)
    }
}

connectDB()
app.use(cors())
app.use(express.json())
app.use(AuthRouter)
app.use(postRouter)
app.use(userRouter)



const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))