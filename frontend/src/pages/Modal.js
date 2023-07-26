import React from "react";
import { Button } from "@mantine/core";
import { Textarea,NumberInput ,Select} from "@mantine/core";
import ReactDOM  from "react-dom";
import './Page.css';

function Modal({ children, open, isClose }) {
  if (!open) return null;

  return (
    <div className="Modal_Back">
      <div className="Modal_Inner">
        <a id='close'onClick={()=>{isClose()}}>x</a>
        <table className="Table" cellPadding={30}>
            <tbody>
                <tr>
                    <td colSpan={3}><center><h1>Add Item</h1></center></td>
                </tr>
                <tr>
                    <td>
                    <Textarea placeholder="Name" label='Name of Item' id="Name" withAsterisk />
                    </td>
                    <td>
                        <NumberInput  min={0} defaultValue={1} label="Quantity"/>
                    </td>
                    <td>
                        <Select label='Type' defaultValue={'Numbers'} searchable data={['Numbers','Kilograms','Grams','Litre','Dozen']}/>
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
    </div> 
)
  }
export default Modal;
