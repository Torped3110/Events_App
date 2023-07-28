import { Button, NumberInput, Select, Textarea } from "@mantine/core"

function Content()
{
    return(
        <div>
        <table className="Table" cellPadding={30}>
            <tbody>
                <tr>
                    <td colSpan={3}><center><h1>Add Item</h1></center></td>
                </tr>
                <tr>
                    <td>
                    <Textarea placeholder="Name" label='Name' id="Name" withAsterisk />
                    </td>
                    <td>
                        <NumberInput  min={0.25} defaultValue={1} step={0.05} precision={2} label="Quantity"/>
                    </td>
                    <td>
                        <Select label='Type' defaultValue={'Numbers'} searchable data={['Numbers','Kilograms','Grams','Litre','Dozen']}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                    <center><Button id='add_button'>ADD</Button></center>
                    </td>
                </tr>
            </tbody>
        </table>
        
        </div>
    )
}

export default Content;