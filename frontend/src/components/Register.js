import React, { useState } from "react";
import { Button, TextInput,Card ,PasswordInput} from "@mantine/core";
import './comp.css'
import {useNavigate} from 'react-router-dom'
function Register()
{
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirm,setConfirm]=useState('')
    const navigate=useNavigate()
    return(
        <div id='Register_back'>
            <center><Card id='Register_Card'>
                <h1>Registration</h1>
                <table>
                    <tbody>
                        <tr>
                           <td><TextInput label='First Name' onChange={(e)=>{setFirst(e.target.value)}} withAsterisk/></td>
                           <td><TextInput label='Last Name' onChange={(e)=>{setLast(e.target.value)}} withAsterisk/></td>       
                        </tr>
                        <tr>
                            <td colSpan={2}><TextInput label="Email ID" onChange={(e)=>{setEmail(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><PasswordInput label='Password' onChange={(e)=>{setPassword(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><PasswordInput label='Confirm Password' onChange={(e)=>{setConfirm(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><center><Button onClick={()=>{console.log(first,last,email,password,confirm)}}>Register</Button></center></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><center><a style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>Already registered! Sign in</a></center></td>
                        </tr>
                    </tbody>
                </table>
            </Card></center>
        </div>
    )
}
export default Register;