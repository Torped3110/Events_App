import React, { useEffect, useState } from "react";
import {DatePicker} from '@mantine/dates'
import './Page.css'
import { Avatar, Button, Card, Select, TextInput } from "@mantine/core";
import Modal_Control from "./Modal_Control";
function Event()
{
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
        console.log(date)
    },[])

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
                    <TextInput placeholder="Name" label='Name of Event' id="Name" withAsterisk />
                    </td>
                    <td>
                    <Select label='Type' defaultValue={'Numbers'} searchable data={['Once','Monthly','Yearly']}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center><Button id='add_button'>ADD</Button></center>
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
            <h1>this is event content</h1>
            <h1>{date.toLocaleDateString()}</h1>
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