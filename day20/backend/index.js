const express = require('express')
const cors = require('cors')
const connectionDB = require('./model/connection')

const app = express()



app.use(cors())
app.use(express.json())


try {
    connectionDB()
} catch (error) {
    
}


app.use('/users',require('./routes/api/router')) //localhost:3000/users/addUser -> POST





const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))