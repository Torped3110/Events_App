import { Card } from "@mantine/core";
import icon from './delete.ico'
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
function EventCard({name,obj_id}){
    const User=useSelector((state)=>state.login)
    return(
        <Card>
            <div>{name}</div>
            <div><img src={icon} style={{position:'absolute',right:'10px',top:10,height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{
                axios.post('http://localhost:9000/deleteevent',{_id:obj_id})
                .then((res)=>console.log(res))
                .catch((e)=>{console.log("Error")})
            }}/></div>
        </Card>
    )
}

export default EventCard;