const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TaskSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    day:
    {
        type:String,
        required:true
    },
    month:
    {
        type:String,
        required:true
    },
    year:
    {
        type:String,
        required:true
    },
    done:
    {
        type:Boolean,
        default:false
    }
})

TaskSchema.index({email:1,name:1,date:1},{unique:true})
const Task=mongoose.model('Task',TaskSchema,'Task')
module.exports=Task