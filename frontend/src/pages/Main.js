import Navbar from "../components/Navbar";
import {Button, Card} from '@mantine/core'
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useHistory, useNavigate } from "react-router-dom";
function Home(){   
    const d= useSelector(state=>state.page)
    const e = useSelector(state=>state.login)
    const navigate=useNavigate()
    useEffect( ()=>{

        if(!e)
        {
           // not working
           //console.log("if",e)
            navigate('/')
        }
            
    })
        if(e){
        return(
            <div>
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