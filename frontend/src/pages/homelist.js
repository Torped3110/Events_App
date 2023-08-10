import React from "react";
import Home from "./home1";

function Homelist({children,name}){
    if(children.length===0)
    {
        return(<h5>No {name}</h5>)
    }
    else
    {
        return(<ul>
            {children.map((e)=>{return(<li>{e}</li>)})}
        </ul>)
    }
}
export default Homelist;