const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 30
    },
    email:{
        type:String,
        trim: true, // 스페이스바 같은 공백을 없애줌
        unique: 1
    },
    password: {
        type:String,
        minlength: 5
    },
    lastname:{
        type:String,
        maxlength: 20
    },
    role:{
        type: Number,
        default: 0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}