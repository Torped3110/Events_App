import Navbar from "../components/Navbar";
import {Card} from '@mantine/core'
import { useSelector } from "react-redux/es/hooks/useSelector";
function Home(){


    const d= useSelector(state=>state)

     console.log(d)
    return(
        <div>
        <header>
        <Navbar/>
        </header>
        <body className="content">
        <Card className="Card">{d}</Card>
        </body>
        </div>
    )
}

export default Home;