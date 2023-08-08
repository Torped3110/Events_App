const Cart=require('./Cartschema')

module.exports.Additem=async function(req,res){
    try{
        var cart=await Cart.create(req.body)
        await cart.save()
        return res.status(200).json(cart)
    }
    catch(e){
        return res.status(404).json(e)
    }
}

module.exports.Allpending=async function(req,res)
{
    try{
        var k=await Cart.find(req.body)
        return res.status(200).json(k)
    }
    catch(e){
        return res.status(404).json(e)
    }
}

module.exports.Tickbought = async function(req,res){
    try{
        var k=await Cart.findByIdAndUpdate(req.body._id,{
            bought:true
        })
        if(k!=null)
        return res.status(200)
        else
        return res.status(404)
    }
    catch(e){
        return res.status(404)
    }
}

module.exports.DeleteCart = async function(req,res){
    try{
        var k=await Cart.findByIdAndDelete(req.body._id,{
            bought:true
        })
        if(k!=null)
        return res.status(200)
        else
        return res.status(404)
    }
    catch(e){
        return res.status(404)
    }
}