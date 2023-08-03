const mongoose=require('mongoose')
const dbconnection = require('./mongosetup')
const express = require("express")
const app=express()
const bodyparser=require('body-parser')
const jsonParser=bodyparser.json()
const cors = require('cors')
const User = require('./UserCollection')
const Event = require('./Eventcontroller')
dbconnection.connect(true)

app.use(cors({origin:"*"}));

app.get('/',function(req,res){
    res.send("Working fine")
})

app.post('/add',jsonParser,User.Useradd)
app.post('/event',jsonParser,Event.AddEvent)
app.post('/login',jsonParser,User.Logincheck)
app.post('/allevents',jsonParser,Event.Allevents)

app.listen(9000,(req,res)=>{console.log("Listening at 9000")})