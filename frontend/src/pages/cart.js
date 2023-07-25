import { Button, Card } from "@mantine/core";
import React, { useEffect } from "react";
import Home from "./home1";
import './Page.css';
import { useState } from "react";

function pending()
{   
    return(
        <div>
            <Button className="corner_button" onClick={()=>{alert("You clicked add button")}}>+ ADD</Button>
                <table border={3} style={{marginTop:"70px",maxwidth:"1000px"}}>
                    <tr>
                        <td>Hello </td>
                    </tr>
                </table>
        </div>
    )
}

function bought()
{
    return(
        <div>
            <h1>This is bought page</h1>
        </div>
    )
}

function Cart()
{ 
    
    const [rel,setRel]=useState(pending())
     useEffect(()=>{
     },[rel])
    return(
        <div>
            <Button className="Cart_Button" onClick={()=>{setRel(bought())}}>Bought</Button>
            <Button className="Cart_Button" onClick={()=>{setRel(pending())}}>Pending</Button>
            <Card className="Cart_card">
            {rel};
            </Card>
        </div>
    )
}

export default Cart