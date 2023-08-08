import { Button, NumberInput, Select, TextInput} from "@mantine/core"
import axios from 'axios'
import {useState } from "react"
import {useSelector} from 'react-redux'

function Content()
{    
    const[name,setName]=useState('')
    const[quantity,setQuantity]=useState(1)
    const[type,setType]=useState('Numbers')
    const date = new Date()
    const User = useSelector(state=>state.login)
    return(
        <div>
        <table className="Table" cellPadding={30}>
            <tbody>
                <tr>
                    <td colSpan={3}><center><h1>Add Item</h1></center></td>
                </tr>
                <tr>
                    <td>
                    <TextInput placeholder="Name" label='Name' id="Name" onChange={(e)=>{setName(e.target.value)}} withAsterisk />
                    </td>
                    <td>
                        <NumberInput id='quantity'  min={0.25} defaultValue={1} step={0.05} precision={2} onChange={(e)=>{setQuantity(e)}} label="Quantity"/>
                    </td>
                    <td>
                        <Select label='Type' id='type' defaultValue='Numbers' searchable data={['Numbers','Kilograms','Grams','Litre','Dozen']} onChange={(e)=>{setType(e)}}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center><Button id='add_button' onClick={()=>{
                        //console.log(name,quantity,type)
                        if(name!==''){
                        axios.post('http://localhost:9000/additem',{email:User.user,name:name,quantity:quantity,type:type,month:date.getMonth(),year:date.getFullYear()})
                        .then((res)=>{
                        //console.log(res)
                        setName('')
                        setQuantity(1)
                        setType('Numbers')
                        document.getElementById('Name').value=''
                        document.getElementById('type').setAttribute('value','Numbers')
                        document.getElementById('quantity').value='1.00'
                        document.getElementById('type').value='Numbers'
                    })
                    .catch((e)=>{window.alert('Already Exists',e)})
                    }
                    else
                    { window.alert('Please enter name')}
                    }}>ADD</Button></center>
                    </td>
                </tr>
            </tbody>
        </table>
        
        </div>
    )
}

export default Content;