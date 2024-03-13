require('dotenv').config();
const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const profileRouter = require('./routes/profileRoutes')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const compression = require('compression')
const cors = require('cors')
const connection = require('./db')


connection()
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    // optionsSuccessStatus:   200,
}
app.use(cors(corsOptions))
app.use(cookieParser())

app.use(express.json())
app.use(bodyParser.json())

// app.use(express.urlencoded({ extended: false }))


app.use(compression())
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/profile',profileRouter)
app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})

