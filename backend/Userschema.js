const mongoose = require("mongoose")

const Schema=mongoose.schema()

const Userschema=new Schema({
    first:{
        type:String,
        required:true

    },
    last:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirm:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User',Userschema,'User')
module.exports(User)