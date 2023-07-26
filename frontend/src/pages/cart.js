import { Button, Card } from "@mantine/core";
import React, { useEffect } from "react";
import './Page.css';
import { useState } from "react";
import Pending from './Pending'
function Bought()
{
    return(
        <div>
            <h1>This is bought page</h1>
        </div>
    )
}

function Cart()
{  
   

    const [rel,setRel]=useState(<Pending/>)

    useEffect(()=>{} )
    
     return(
        <div>
            <Button className="Cart_Button" onClick={()=>{setRel(Bought())}}>Bought</Button>
            <Button className="Cart_Button" onClick={()=>{setRel(<Pending/>)}}>Pending</Button>
            <Card className="Cart_card">
            {rel}
            </Card>
        </div>
    )
}

export default Cart