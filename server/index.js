const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//models/schema
const UserModel = require('./models/Users')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://norf:norf@cluster0.71y4lk4.mongodb.net/users?retryWrites=true&w=majority')

app.get('/', async(req,res)=>{
    UserModel.find({},(err,result)=>{
        try {
            res.json(result)
        } catch (err) {
            res.send(err)
        }
    })
})

app.post('/newuser', async (req,res)=>{
    const addNewUser = req.body
    const newUser = new UserModel(addNewUser)
    await newUser.save()
    res.json(addNewUser)
})

app.listen(3001,()=>{console.log('connect to port 3001')})