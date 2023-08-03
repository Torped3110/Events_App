import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Home()
{
const a=useSelector((state)=>state.login)
return(
    <h1>Hello {a.name}</h1>
)
}
export default Home;