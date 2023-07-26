import { Route,redirect } from "react-router-dom";

const Private=({auth,component: Component,...rest})=>{
        return(<Route {...rest} render={(props)=>{
            if(auth)
            <Component {...props}/>
            else
            redirect('/')
        }}/> 
        )
}

export default Private;