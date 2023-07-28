const mongoose=require('mongoose')
const dbconnection = require('./mongosetup')
const express = require("express")
const app=express()
const bodyparser=require('body-parser')
const cors = require('cors')
dbconnection.connect(true)

app.use(cors({origin:"*"}));

app.get('/',function(req,res){
    res.send("Working fine")
})

app.listen(9000,()=>{console.log("Listening at 9000")})