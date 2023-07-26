import Navbar from "../components/Navbar";
import {Button, Card} from '@mantine/core'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useHistory, useNavigate } from "react-router-dom";
function Home(){   
    const d= useSelector(state=>state.page)
    const e = useSelector(state=>state.login)
    const navigate=useNavigate()
 
    if(!e)
    {
        return(
            <div>
                <h1>You are not logged in </h1>
                <Button onClick={()=>{navigate('/')}}>Go to Login Page</Button>
            </div>)
    }
    else{
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