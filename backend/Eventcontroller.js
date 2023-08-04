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
        // console.log(a)
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

module.exports.month=async function(req,res){
    try{
        var s=[]
        var k= await Event.find({$or:[{email:req.body.email,frequency:'Once',year:req.body.year,month:req.body.month},{email:req.body.email,frequency:'Monthly'},{email:req.body.email,frequency:'Yearly',month:req.body.month}]})
        k.forEach(element => {s.push(element.day)});
       // console.log(s)
        return res.status(200).json(s)
    }
    catch(e){
        return res.status(404)
    }
}