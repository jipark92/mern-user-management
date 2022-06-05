const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//router
let indexRouter = require('./routes/index')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://norf:norf@cluster0.71y4lk4.mongodb.net/users?retryWrites=true&w=majority')

app.use('/',indexRouter)

app.listen(process.env.PORT || 3001,()=>{console.log('connect to port 3001')})