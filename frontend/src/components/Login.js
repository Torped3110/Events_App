import { Button, TextInput,Card } from "@mantine/core";
import React from "react";
import { login } from "../pages/actions";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import './comp.css'
function Login()
{
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
                        <td><TextInput className="login_comp" placeholder="username/email" label='Username'/></td>
                    </tr>
                    <tr>
                        <td><TextInput className="login_comp" placeholder="password" label='Password'/></td>
                    </tr>
                    <tr>
                        <td><center><Button id='click' className='login_comp' onClick={()=>{
                                     dispatch(login())
                                    navigate('/home')
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