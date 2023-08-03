const Event=require('./Eventcollection')

module.exports.AddEvent= async function(req,res){
    try{
        
        if(req.body.eventName!==''){
        const event=await Event.create(req.body)
        await event.save()
        return res.status(200).json(event)}
        else{
            return res.status(404)
        }
    }
    catch(e){
        return res.status(404).json('error')
    }
}

module.exports.Allevents = async function(req,res){
    try{
        const d=req.body.date
        var a= await Event.find( {$or : [{email:req.body.email,day:req.body.day,frequency:'Monthly'},{email:req.body.email,day:req.body.day,month:req.body.month,frequency:'Yearly'},{email:req.body.email,date:d}]})
        return res.status(200).json(a)
    }
    catch(error){
        return res.status(404).json(error)
    }
}

module.exports.Deleteevent=async function(req,res){
    try{
        var k=Event.find(req.body)
        if(k!==null){
        Event.deleteOne(req.body)
        return res.status(200)}
        else
        return res.status(404)
}
catch(e){
    return res.status(404)
}
}