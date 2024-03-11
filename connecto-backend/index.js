require('dotenv').config();
const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const connection = require('./db')


connection()
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())

app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)

app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})

