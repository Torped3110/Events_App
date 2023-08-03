import React, { useState } from "react";
import { Button, TextInput,Card ,PasswordInput} from "@mantine/core";
import './comp.css'
import {useNavigate} from 'react-router-dom'
import { login } from "../pages/actions";
import axios from "axios";
import { useDispatch } from "react-redux";
function Register()
{
    const [first,setFirst]=useState('')
    const [last,setLast]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirm,setConfirm]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
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
                            <td colSpan={2}><TextInput label="Email ID"  id='email' onChange={(e)=>{setEmail(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><PasswordInput label='Password' onChange={(e)=>{setPassword(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><PasswordInput label='Confirm Password' onChange={(e)=>{setConfirm(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><center><Button onClick={()=>{
                               axios.post('http://localhost:9000/add',{first,last,email,password})
                               .then((res)=>{console.log(res)
                                dispatch(login(res.data.email,res.data.first))
                                navigate('/home')
                            }
                               )
                               .catch((e)=>{console.log('error in register')
                                window.alert("Email already exists")
                            })

                            }}>Register</Button></center></td>
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