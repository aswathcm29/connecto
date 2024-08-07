require('dotenv').config();
const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const profileRouter = require('./routes/profileRoutes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const compression = require('compression')
const cors = require('cors')
const connection = require('./db')


connection()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(compression())
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/profile',profileRouter)

app.get('/',(req,res)=>{
    res.send('Hello world !');
    console.log('Check working')
})

app.listen(process.env.PORT || 'https://connecto-backend.vercel.app/',()=>{
    console.log('listening on port',process.env.PORT)
})

