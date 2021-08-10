import Value from "./Value"
import {Stack} from "stack-styled"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    
debugger
    const createValuesFromList = () => {
        debugger
        return props.values.sort((a, b) => (a.name > b.name) ? 1 : -1).map(value => {
            
            return <div>
                    <Value jwt={props.JWT} cuv={props.cuv} id={value.id} checkIn={props.checkIn} checkOut={props.checkOut} cuid={props.cuid} callBack2={props.callBack2} valueData={value}/>
                   </div>
        })
        }
    

    return (
        <>
        <Stack>
            <br/><br/><br/><br/>
        <Stack gridGap={3} minColumnWidth={100}>
            {createValuesFromList()}
            </Stack></Stack>
        </>
    )
}



export default ValuesList;