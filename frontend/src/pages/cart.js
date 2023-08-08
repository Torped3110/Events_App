import { Button, Card } from "@mantine/core";
import React from "react";
import './Page.css';
import { useState } from "react";
import Modal_Control from './Modal_Control'
import Content from "./content";
import Modal from "./Modal";
import Bought from "./Bought";

function Cart()
{  
    const content=<Content/>
    const [modal,setModal]=useState(<Modal/>)
    const [rel,setRel]=useState(<Modal_Control  modal={content} content={modal}/>)
    
 
    

function Do(){
    setModal(<Modal/>)
    setRel(<Modal_Control  modal={content} content={modal}/>)
}
  

     return(
        <div >
            <Button className="Cart_Button" onClick={()=>{setRel(<Bought/>)}}>Bought</Button>
            <Button className="Cart_Button" onClick={Do}>Pending</Button>
            <Card className="Cart_card">
            {rel}
            </Card>
        </div>
    )
}

export default Cart
