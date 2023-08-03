const User=require('./Userschema')

module.exports.Useradd =  async function (req,res)
{   
   console.log(req.body)
    var k = await User.findOne({email:req.body.email})
    try{
    if(k===null){
    const user = await User.create(req.body)
    await user.save()
    return  res.status(200).json(user)
    }
    else{
        return res.status(400).json('error')
    }
}
catch(error){
    return res.status(404)
}
}

module.exports.Logincheck = async function(req,res){
    var k = await User.findOne({email:req.body.email,password:req.body.password})
    
    try{
        if(k!==null){
            return res.status(200).json(k)
        }
        else
        {return res.status(404).json('error')}
}
catch(e){
return res.status(404).json(e)
}}