import axios from "axios";
import Grid from "./list";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import './Page.css'
import icon1 from './delete.ico'
import icon2 from './check.ico'

function Modal()
{
    const date=new Date()
    const User=useSelector((state)=>state.login)
    const [data,setData]=useState([])
    var k=0;
    useEffect(()=>{
    axios.post('http://localhost:9000/allpending',{email:User.user,year:date.getFullYear(),month:date.getMonth(),bought:false})
    .then((res)=>{
        setData(res.data)})
    .catch((e)=>{console.log('Error',e)})
    })
    

    return(
        <div>
            <center>
            <table style={{width:'100%',marginTop:'20px'}}  border={'1px solid black'}>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Measure</th>
                        <th>Actions</th>
                    </tr>
                    {data.map((element)=>{
                        k++
                        return(<tr key={k}>
                        <td className="table-cell">{k}</td>
                        <td className='table-cell'><h4>{element.name}</h4></td>
                        <td className='table-cell'>{element.quantity}</td>
                        <td className='table-cell'>{element.type}</td>
                        <td className="table-cell">
                            <img src={icon2} className="Cart-icon" style={{marginRight:'15px', width:'25px' ,height:'25px',cursor:'pointer'}} onClick={()=>{
                                axios.post('http://localhost:9000/tickbought',{_id:element._id})
                                .then((res)=>console.log(res))
                                .catch((error)=>console.log(error))
                            }}/>
                            <img src={icon1} className="Cart-icon" style={{marginLeft:'15px',width:'20px' ,height:'20px',cursor:'pointer'}} onClick={()=>{
                                axios.post('http://localhost:9000/cartdelete',{_id:element._id})
                                .then((res)=>console.log(res))
                                .catch((error)=>console.log(error))
                            }}/>
                        </td>
                        </tr>)})} 
                </tbody>
            </table>
            </center>
        </div>
    )
}

export default Modal;