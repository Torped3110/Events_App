import { Button, Card } from "@mantine/core";
import React, { useEffect } from "react";
import './Page.css';
import { useState } from "react";
import Modal_Control from './Modal_Control'
import Content from "./content";
import { MonthPickerInput } from "@mantine/dates";

function Bought()
{
    return(
        <div>
            <center style={{width:"fit-content"}}><MonthPickerInput minDate="2000-01-01" maxDate="2023-08-01" label="Select month and year" /></center>
            <h1>This is bought page</h1>
        </div>
    )
}

function Cart()
{  
   function Modal()
   {
    return(<h1>Hello World</h1>)
   }

    const [rel,setRel]=useState(<Modal_Control modal={Content()} content={Modal()}/>)

    useEffect(()=>{} )
    
     return(
        <div >
            <Button className="Cart_Button" onClick={()=>{setRel(Bought())}}>Bought</Button>
            <Button className="Cart_Button" onClick={()=>{setRel(<Modal_Control modal={Content()} content={Modal()}/>)}}>Pending</Button>
            <Card className="Cart_card">
            {rel}
            </Card>
        </div>
    )
}

export default Cart