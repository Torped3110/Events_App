import React from "react";
import './comp.css';
import icon from './fox.ico';
import settings from './cogwheel.ico';
import {Event,Tasks,Home,Cart} from '../pages/actions';
import { useDispatch } from "react-redux";

function Navbar()
{
    const dispatch = useDispatch()
    return(
        <header className="Nav">
            <img className="image" src={icon}/>
            <a onClick={()=>dispatch(Home())}>Home</a>
            <a onClick={()=>dispatch(Event())}>Events</a>
            <a onClick={()=>dispatch(Tasks())}>Tasks</a>
            <a onClick={()=>dispatch(Cart())}>Cart</a>
            <a className="gear"><img src={settings}/></a>
            <button className="button">Log Out</button>
            <text className='Name'>Welcome abcdefgh!!</text>
        </header>
    )
}
export default Navbar