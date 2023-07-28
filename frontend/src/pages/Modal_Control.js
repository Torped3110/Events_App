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
      <Button className="corner_button" onClick={handleOpen}>+ ADD</Button>
      <div id='portal'>
        {Modal(modal)}
      </div>
      {content}
      </div>
  );
}

export default Modal_Control;
