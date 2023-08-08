import React, { useState } from "react";
import { Button } from "@mantine/core";

function Modal_Control({modal,content}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function Modal(children) {
    if (!open) return null;
  
    return (
      <div className="Modal_Back">
        <div className="Modal_Inner">
          <a id='close'onClick={handleClose}>x</a>
          {children}
        </div>
      </div> 
  )
    }

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <table>
      <tbody>
      <tr style={{marginBottom:'20px'}}>
      <td><Button style={{position:'relative' ,left:'85%',top:'10px'}} onClick={handleOpen}>+ ADD</Button></td>
      </tr>
      <tr>
        <td>
      <div id='portal'>
        {Modal(modal)}
      </div>
      {content}
      </td>
      </tr>
      </tbody>
      </table>
      </div>
  );
}

export default Modal_Control;
