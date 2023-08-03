import Navbar from "../components/Navbar";
import {Button, Card} from '@mantine/core'
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import './Page.css'
function Home(){   
    const d= useSelector(state=>state.page)
    const e = useSelector(state=>state.login)
    const navigate=useNavigate()
    useEffect( ()=>{
        if(!e.signed)
        {
            navigate('/')
        }
            
    })
        if(e.signed){
        return(
            <div id='back'>
            <header>
            <Navbar/>
            </header>
            <div className="content" style={{zIndex:0,position:'relative'}}>
            <Card className="Card" style={{zIndex:0}}>{d}</Card>
            </div>
            </div>
        )}
    
}

export default Home;