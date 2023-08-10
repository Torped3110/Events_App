import { Avatar, Button, Card, Select, TextInput } from "@mantine/core";
import { DatePicker,MonthPickerInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import Modal_Control from "./Modal_Control";
import axios from 'axios'
import {useSelector} from 'react-redux'
import icon from './delete.ico'
import icon2 from './check.ico'
import Grid from "./list";

function Tasks()
{
    const [date,setDate]=useState(new Date())
    const [name,setName]=useState('')
    const User=useSelector(state=>state.login)
    const [pending,setpending]=useState([])
    const [completed,setCompleted]=useState([])
    useEffect(()=>{
        var pend=[]
        var done=[]
        axios.post('http://localhost:9000/alltask',{email:User.user,day:date.getDate(),month:date.getMonth(),year:date.getFullYear()})
        .then((res)=>{
          //console.log(res.data)
            if(res.data[0]!=null){
                    var x=0
                    res.data[0].forEach(element=>{
                        x++;
                        pend.push(<Card key={x}>
                            {element.name}
                            <img className="Cart-icon" src={icon2} onClick={()=>{
                                axios.post('http://localhost:9000/ticktask',{_id:element._id})
                                .then((res)=>(console.log(res)))
                                .catch((e)=>{console.log(e)})
                            }} style={{position:'absolute',right:'15px',cursor:'pointer'}}/>
                            <img className="Cart-icon" src={icon} onClick={()=>{
                                axios.post('http://localhost:9000/deletetask',{_id:element._id})
                                .then((res)=>(console.log(res)))
                                .catch((e)=>{console.log(e)})
                            }} style={{position:'absolute',right:'60px',height:'30px',cursor:'pointer'}}/>
                        </Card>)
                    })}
            setpending(pend)
        
            if(res.data[1]!=null){
                var x=0
                res.data[1].forEach(element=>{
                    x++;
                    done.push(<Card key={x}>
                        {element.name}
                        <img className="Cart-icon" src={icon} onClick={()=>{
                                axios.post('http://localhost:9000/deletetask',{_id:element._id})
                                .then((res)=>(console.log(res)))
                                .catch((e)=>{console.log(e)})
                            }} style={{position:'absolute',right:'10px',height:'30px',cursor:'pointer'}}/>
                    </Card>)
                })}
        setCompleted(done)
        
        })
        .catch((e)=>{console.log(e)})
        
    })

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
                    <TextInput placeholder="Name" label='Name of Task' id="Name" withAsterisk onChange={(e)=>{setName(e.target.value)}} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center>
                      <Button id='add_button' onClick={()=>{axios.post('http://localhost:9000/task',{email:User.user,name,day:date.getDate(),month:date.getMonth(),year:date.getFullYear()})
                      .then((res)=>{console.log(res)
                        document.getElementById('Name').value=''
                    })
                        .catch((e)=>{console.log(e)})
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
            <h1>Tasks</h1>
             <Card withBorder style={{marginBottom:'10px'}}>
                <h4>Pending Tasks</h4>
                <Grid>{pending}</Grid>
            </Card>
            <Card withBorder>
                <h4>Completed Tasks</h4>
                <Grid>{completed}</Grid>
            </Card>
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
        return((day==0)?(
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