import { Button, TextInput,Card, PasswordInput } from "@mantine/core";
import React, { useState } from "react";
import { login } from "../pages/actions";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import './comp.css'
import axios from 'axios'
function Login()
{
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return(
    <div id='login_back'>
        <center>
        <Card id='login'>
            <center><h1>Login Page</h1></center>
            <table>
                <tbody>
                    <tr>
                        <td><TextInput className="login_comp" placeholder="username/email" label='Username' onChange={(e)=>{setEmail(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><PasswordInput className="login_comp" placeholder="password" label='Password' onChange={(e)=>{setPassword(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><center><Button id='click' className='login_comp' onClick={()=>{
                                    axios.post('http://localhost:9000/login',{email:email,password:password})
                                    .then((res)=>{console.log("success",res)
                                    dispatch(login(res.data.email,res.data.first))
                                    navigate('/home')})
                                    .catch((e)=>{console.log('error',e)
                                    window.alert('Invalid Credentials')
                                })
                                   
                                }}>Sign in</Button></center></td>
                    </tr>
                    <tr>
                        <td><center><a id='click_link' onClick={()=>{navigate('/register')}} style={{fontSize:12,cursor:"pointer"}}>Not registered yet? SIGN UP</a></center></td>
                    </tr>
                </tbody>
            </table>
        </Card></center>
    </div>
    )
}

export default Login;