import React, { useEffect, useState } from "react";
import {DatePicker} from '@mantine/dates'
import './Page.css'
import { Avatar, Button, Card, Select, TextInput } from "@mantine/core";
import Modal_Control from "./Modal_Control";
import axios from "axios";
import {useSelector} from 'react-redux'

function Event()
{
    const user = useSelector(state=>state.login)
    const [name,setName]=useState('')
    const [frequency,setFrequency]=useState('Once')
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
        axios.post('http://localhost:9000/allevents',{email:user.user,date,day:date.getDate(),month:date.getMonth()})
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log('error',e))
    },[date])

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
                        axios.post('http://localhost:9000/event',{email:user.user,eventName:name,frequency,date,day:date.getDate(),month:date.getMonth()})
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
            <h1>{date.getFullYear()}</h1>
            </div>
        )
    }
    return(
        <div id="Event_Back">
        <center>
        <h1 style={{color:"white"}}>EVENTS</h1>
        <div >
            <Card id='calendar' withBorder>
        <DatePicker renderDay={(date)=>{const day=date.getDate();
        return((day==1)?(
        <Avatar color='yellow' variant="filled" radius={20}>
        <div style={{color:'green' , fontSize:20}}>{day}<sup style={{color:'red',top:0,right:2,position:'absolute',fontSize:20}}><img style={{width:"1px",height:"1px"}} src="./check.png"/></sup></div></Avatar>) : (<div>{day}</div>)
    )}} 
        defaultValue={new Date()} onChange={setDate} hideOutsideDates/>
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