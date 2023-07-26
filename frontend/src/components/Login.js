import { Button } from "@mantine/core";
import React from "react";
import { login } from "../pages/actions";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
function Login()
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return(
    <div>
    <h1>log in page</h1>
    <Button onClick={()=>{
    dispatch(login())
    navigate('/home')
    }}>Login</Button>
    </div>
    )
}

export default Login;