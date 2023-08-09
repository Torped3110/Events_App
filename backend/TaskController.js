const Task=require('./TaskSchema')

module.exports.Addtask=async function(req,res){
    try{
    const task=await Task.create(req.body)
    await task.save()
    return res.status(200).json(task)
    }
    catch(e){
        return res.status(404).json(e)
    }
}

module.exports.Deletetask=async function(req,res){
    try{
        const k=await Task.findByIdAndDelete(req.body._id)
        if(k!=null)
        return res.status(200)
        else
        return res.status(404)
    }
    catch(e){
        return res.status(404).json(e)
    }
}

module.exports.Alltasks=async function(req,res){
    try{
        const k=await Task.find(req.body)
        return res.status(200).json(k)
    }
    catch(e){
        return res.status(404).json(e)
    }
}