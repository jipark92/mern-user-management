let express = require('express')
let router = express.Router()

//models/schema
let UserModel = require('../models/Users')

//read
router.get('/', async(req,res)=>{
    UserModel.find({},(err,result)=>{
        try {
            res.json(result)
        } catch (err) {
            res.send(err)
        }
    })
})

//create(post)
router.post('/newuser', async (req,res)=>{
    const addNewUser = req.body
    const newUser = new UserModel(addNewUser)
    await newUser.save()
    res.json(addNewUser)
})

//delete 
router.delete('/deleteuser/:id', async (req,res)=>{
    const id = req.params.id
    await UserModel.findByIdAndRemove(id).exec()
})

//update
router.put('/updateuser',(req,res)=>{    
    const newName = req.body.newName
    const newEmail = req.body.newEmail
    const newAge = req.body.newAge
    const newPhone = req.body.newPhone
    const newGender = req.body.newGender
    const newStatus = req.body.newStatus
    const newDate = req.body.newDate
    const id = req.body.id

    try {
        UserModel.findById(id,(err,singleUser)=>{
        singleUser.name = newName
        singleUser.email = newEmail
        singleUser.age = Number(newAge)
        singleUser.phone = Number(newPhone)
        singleUser.gender = newGender
        singleUser.status = newStatus
        singleUser.date = newDate
        singleUser.save()
        })
    } catch (error) {
        console.log('error')
    }
})

module.exports = router