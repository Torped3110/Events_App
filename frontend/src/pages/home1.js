import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'
import Homelist from "./homelist";
function Home()
{
const a=useSelector((state)=>state.login)
const [event,setEvent]=useState([])
const [task,setTask]=useState([])
const [cart,setCart]=useState([])
const date=new Date()
useEffect(()=>{
    var e=[]
    var t=[]
    var c=[]
    axios.post('http://localhost:9000/allevents',{email:a.user,date,day:date.getDate(),month:date.getMonth()})
    .then((res)=>{
        res.data.forEach(element => {e.push(element.name)
        });
        setEvent(e)
        })
    .catch((e)=>console.log(e))

    axios.post('http://localhost:9000/alltask',{email:a.user,day:date.getDate(),month:date.getMonth(),year:date.getFullYear()})
    .then((res)=>{
        res.data[0].forEach(element=>{t.push(element.name)})
        setTask(t)
    })
    .catch((e)=>console.log(e))

    axios.post('http://localhost:9000/allpending',{email:a.user,bought:false,month:date.getMonth(),year:date.getFullYear()})
    .then((res)=>{res.data.forEach(element=>{c.push(element.name)})
    setCart(c)
})
    .catch((e)=>console.log(e))
},[])

return(
    <div style={{display: 'flex', flexDirection: 'column',height:'100%',border:'1px solid red'}}>
    <center><h1>Hello {a.name} !!!</h1></center>
    <div style={{height:'100%',display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-around',marginBottom:'10px'}}>
        <div style={{display:'flex',backgroundColor:'tomato',width:'30%',justifyContent:"center"}}>
          <div style={{display:'flex',flex:1,flexDirection:'column'}}>
            <center><h2>Events</h2></center>
            <div style={{margin:'10%',height:'100%',backgroundColor:'#fff',width:'80%',borderRadius:'20px'}}>
                <Homelist name='Events' children={event}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex',backgroundColor:'dodgerblue',width:'30%',justifyContent:"center"}}>
          <div style={{display:'flex',flex:1,flexDirection:'column'}}>
            <center><h2>Tasks</h2></center>
            <div style={{margin:'10%',height:'100%',backgroundColor:'#fff',width:'80%',borderRadius:'20px'}}>
            <Homelist name='Tasks' children={task}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex',backgroundColor:'greenyellow',width:'30%',justifyContent:"center"}}>
          <div style={{display:'flex',flex:1,flexDirection:'column'}}>
            <center><h2>Cart</h2></center>
            <div style={{margin:'10%',height:'100%',backgroundColor:'#fff',width:'80%',borderRadius:'20px'}}>
            <ul>
                    {cart.map((e)=>{return(<li>{e}</li>)})}
                </ul>
            </div>
          </div>
        </div>

    </div>
</div>

    )
}
export default Home;

