import { MonthPickerInput } from "@mantine/dates";
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import './Page.css'
import icon from './delete.ico'
function Bought()
{
    const t=new Date()
    var k=0
    const [list,setList]=useState([])
    const[date,setDate]=useState(new Date())
    const User=useSelector((state)=>state.login)
    useEffect(()=>{
        axios.post('http://localhost:9000/allpending',{email:User.user,year:date.getFullYear(),month:date.getMonth(),bought:true})
    .then((res)=>{
        setList(res.data)})
    .catch((e)=>{console.log('Error',e)})
    },[date])
    return(
        <div>
            <center style={{width:"fit-content"}}>
            <MonthPickerInput minDate="2023-01-01" maxDate={t} label="Select month and year" defaultDate={t} defaultValue={t} onChange={setDate}/>
            </center>
            <table style={{width:'100%',marginTop:'20px'}}  border={'1px solid black'}>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Measure</th>
                        <th>Actions</th>
                    </tr>
                    {list.map((element)=>{
                        k++
                        return(<tr>
                        <td className="table-cell">{k}</td>
                        <td className='table-cell'><h4>{element.name}</h4></td>
                        <td className='table-cell'>{element.quantity}</td>
                        <td className='table-cell'>{element.type}</td>
                        <td className="table-cell">
                            <img src={icon} className="Cart-icon" style={{marginLeft:'15px',width:'20px' ,height:'20px',cursor:'pointer'}} onClick={()=>{
                                axios.post('http://localhost:9000/cartdelete',{_id:element._id})
                                .then((res)=>console.log(res))
                                .catch((error)=>console.log(error))
                            }}/>
                        </td>
                        </tr>)})}
                        
                </tbody>
            </table>
        </div>
    )
}
export default Bought