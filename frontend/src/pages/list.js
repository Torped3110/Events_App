import React from "react";
import './Page.css'
function grid({children}){
    var k=1
 return(
    <div className="Grid-Container">
        {children.map((e)=>{
            k++;
            return(<div className="Grid-Item" key={k}>{e}</div>)})}
    </div>
 )
}

export default grid;
