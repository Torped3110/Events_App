import { Card} from "@mantine/core";
import React from "react";
import icon from './delete.ico'
import './Page.css'
function grid({children}){
 return(
    <div className="Grid-Container">
        {children.map((e)=>{return(<div className="Grid-Item">{e}</div>)})}
    </div>
 )
}

export default grid;



// function List({name,object_id}){
//     return(
//         <Card style={{height:'100px',width:'200px',display:'flex',position:'relative'}} withBorder>
//             <table>
//                 <tbody>
//                     <tr>
//                         <center>
//                         <td>{name}</td>
//                         <td><a><img src={icon} style={{position:'absolute',right:'10px',height:20,width:20,cursor:'pointer'}} onClick={()=>{console.log(object_id)}}/></a></td>
//                         </center>
//                     </tr>
//                 </tbody>
//             </table>
//         </Card>
//     )
// }