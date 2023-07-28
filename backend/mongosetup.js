const connection_string="mongodb+srv://tiger:tiger@cluster0.u7hchue.mongodb.net/"
const mongoose=require("mongoose")

module.exports.connect = function(auto_connect){
    const db_options={useNewUrlParser:true , useUnifiedTopology:true}
    try{
        mongoose.connect(connection_string,db_options)
        var db=mongoose.connection;
        db.on("open",function(){console.log("Connection Opened")})
        db.on("error",function(){console.log("Connection error")})
        db.on("connecting",function(error){console.log("Connection Opened"+error)})
        db.on("connected",function(){console.log("Connected")})
        db.on("reconnecting",function(){console.log("Reconnecting")})
        db.on("disconnected",function(){console.log("Connection disconnected trying to reconnect"), mongoose.connect(connection_string,db_options)})
    }
    catch(error){
        console.log(error)
    }
}