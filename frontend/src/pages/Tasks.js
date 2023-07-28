import { Avatar, Button, Card, Select, TextInput } from "@mantine/core";
import { DatePicker,MonthPickerInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import Modal_Control from "./Modal_Control";

function Tasks()
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
                    <td colSpan={3}><center><h1>Add a Task</h1></center></td>
                </tr>
                <tr>
                    <td>
                    <TextInput placeholder="Name" label='Name of Task' id="Name" withAsterisk />
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center>
                      <Button id='add_button'>ADD</Button></center>
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
            <h1>this is tasks content</h1>
            <h1>{date.toLocaleDateString()}</h1>
            </div>
        )
    }
    return(
        <div id="Tasks_Back">
        <center>
        <h1>TASKS</h1>
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

export default Tasks;