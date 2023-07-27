import React, { useEffect, useState } from "react";
import {DatePicker} from '@mantine/dates'
import './Page.css'
import { Card } from "@mantine/core";
function Event()
{
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
        console.log(date)
    },[])

    return(
        <div>
        <center>
        <h1>EVENTS</h1>
        <div>
            <Card id='calendar' withBorder>
        <DatePicker defaultValue={new Date()} onChange={setDate} allowDeselect hideOutsideDates/>
        </Card>
        </div>
        </center>
        <div id='Event_Display'> <h1>{date.toLocaleDateString()}</h1></div>
        </div>
    )
}

export default Event;