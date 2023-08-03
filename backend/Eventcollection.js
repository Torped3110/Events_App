const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Eventschema=new Schema({
    email:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
        require:true
    },
    frequency:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    day:{
        type:String,
        require:true
    },
    month:{
        type:String,
        require:true
    }
})

const Event=mongoose.model('Event',Eventschema,'Event')
module.exports=Event
