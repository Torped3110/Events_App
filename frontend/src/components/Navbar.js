import React from "react";
import './comp.css';
import icon from './fox.ico';
import settings from './cogwheel.ico';
import { Text } from "@mantine/core";
import {Event,Tasks,Home,Cart, logout} from '../pages/actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar()
{
    const navigate=useNavigate()
    const dispatch = useDispatch()
    

    return(
        <header className="Nav">
            <img className="image" src={icon}/>
            <a onClick={()=>dispatch(Home())}>Home</a>
            <a onClick={()=>dispatch(Event())}>Events</a>
            <a onClick={()=>dispatch(Tasks())}>Tasks</a>
            <a onClick={()=>dispatch(Cart())}>Cart</a>
            <a className="gear"><img src={settings}/></a>
            <button className="button" onClick={()=>{dispatch(logout())
            navigate('/')
            }}>Log Out</button>
            <Text className='Name'>Welcome abcdefgh!!</Text>
        </header>
    )
}
export default Navbar