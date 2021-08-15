import Value from "./Value"
import {Stack} from "stack-styled"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    
    const conditionallyShowDeleteButton = (value) => {
        debugger
        if(value.creator_id == props.cuid){
            return <button onClick={() => props.callBack2(value.id)}>Delete this value</button>
        }
    }

debugger
    const createValuesFromList = () => {
        debugger
        return props.values.sort((a, b) => (a.name > b.name) ? 1 : -1).map(value => {
            
            return <div>
                        <input onChange={(e) => props.callBack4(e, value.id)} type="checkbox" checked={props.cuv.includes(value.id)}  name={`${value.id}`} value={value.id}/>
                        <label for={`${value.id}`}> {value.name}</label><br></br>
                        {conditionallyShowDeleteButton(value)}
                    {/* <Value jwt={props.JWT} cuv={props.cuv} id={value.id} checkIn={props.checkIn} checkOut={props.checkOut} cuid={props.cuid} callBack2={props.callBack2} valueData={value}/> */}
                   </div>
        })
        }
    

    return (
        <div>
            <br></br>
            <button onClick={() => props.callBack3()}>Submit Changes To Your Values</button>
        <Stack>
            <br/><br/>
        <Stack gridGap={3} numColumns={[1, 2, 3, 4]}>
            {createValuesFromList()}
            </Stack></Stack>
        </div>
    )
}



export default ValuesList;