const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel