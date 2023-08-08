const mongoose=require('mongoose')
const Schema = mongoose.Schema

const CartSchema=new Schema({

    email:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    month:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    bought:{
        type:Boolean,
        default:false
    }
})

CartSchema.index({email:1,name:1,type:1,month:1,year:1},{unique:true})
const Cart = mongoose.model('Cart',CartSchema,'Cart')
module.exports=Cart

