import React, { useEffect, useState } from "react";
import {DatePicker} from '@mantine/dates'
import './Page.css'
import Grid from "./list";
import { Avatar, Button, Card, Select, TextInput } from "@mantine/core";
import Modal_Control from "./Modal_Control";
import axios from "axios";
import {useSelector} from 'react-redux'
import EventCard from "./card";

function Event()
{
    const [days,setDays]=useState([])
    const [data,setData]=useState([])
    const user = useSelector(state=>state.login)
    const [name,setName]=useState('')
    const [frequency,setFrequency]=useState('Once')
    const [date,setDate]=useState(new Date())

    useEffect(()=>{
        monthchange(user.user,date.getMonth(),date.getFullYear())
    },[])

    useEffect(()=>{
        axios.post('http://localhost:9000/allevents',{email:user.user,date,day:date.getDate(),month:date.getMonth()})
        .then((res)=>{
        var d=[]
         res.data.forEach(element => {
            //console.log(element._id)
            d.push(<EventCard name={element.eventName} obj_id={element._id}/>)
         });
         if(d.length==0){
            d.push(<h3>No Events</h3>)
         }
         setData(d)
        })
        .catch((e)=>console.log('error',e))
    },[date,data,days])

    function modal()
    {
        
        return(
            <center>
            <div>
            <table className="Table" cellPadding={30}>
            <tbody>
                <tr>
                    <td colSpan={3}><center><h1>Add Event</h1></center></td>
                </tr>
                <tr>
                    <td>
                    <TextInput placeholder="Name" label='Name of Event' id="Name" onChange={(e)=>{setName(e.target.value)}} withAsterisk />
                    </td>
                    <td>
                    <Select label='Type' defaultValue={'Once'} value={frequency} onChange={(e)=>setFrequency(e)} searchable data={['Once','Monthly','Yearly']}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center><Button id='add_button'onClick={()=>{
                        if(name!==''){
                        axios.post('http://localhost:9000/event',{email:user.user,eventName:name,frequency,date,day:date.getDate(),month:date.getMonth(),year:date.getFullYear()})
                        .then((res)=>{setName('');setFrequency('Once');document.getElementById('Name').value=''})
                        .catch((e)=>console.log('error'))}
                        else{
                            window.alert('Name is empty')
                        }
                    }}>ADD</Button></center>
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
            </center>
        )
    }

    function content()
    {
        return(
            <div>
            <h3>Events on {date.toDateString()}</h3>
            <div>
                <Grid>{data}</Grid>
            </div>
            </div>
        )
    }

    function monthchange(email,month,year)
    {
        axios.post('http://localhost:9000/month',{email,month,year})
        .then((res)=>{setDays(res.data)
        //console.log(days)
    }
        )
        .catch((error)=>console.log('error'))
    }
    return(
        <div id="Event_Back">
        <center>
        <h1 style={{color:"white"}}>EVENTS</h1>
        <div >
            <Card id='calendar' withBorder>
        <DatePicker renderDay={(date)=>{const day=date.getDate();
        return((days.includes(day.toString()))?(
        <Avatar color='yellow' variant="filled" radius={20}>
        <div style={{color:'green' , fontSize:20}}>{day}<sup style={{color:'red',top:0,right:2,position:'absolute',fontSize:20}}><img style={{width:"1px",height:"1px"}} src="./check.png"/></sup></div></Avatar>) : (<div>{day}</div>)
    )}} 
        defaultValue={date} onChange={setDate} 
        onMonthSelect={(date)=>monthchange(user.user,date.getMonth(),date.getFullYear())}
        onNextMonth={(date)=>monthchange(user.user,date.getMonth(),date.getFullYear())}
        onPreviousMonth={(date)=>monthchange(user.user,date.getMonth(),date.getFullYear())}
        hideOutsideDates/>
        </Card>
        </div>
        </center>
        <div id='Event_Display'> 
        <Modal_Control modal={modal()} content={content()} /> 
        </div>
        </div>
    )
}

export default Event;