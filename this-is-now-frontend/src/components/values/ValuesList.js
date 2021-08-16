import {Stack} from "stack-styled"

const ValuesList = (props) => {
    
    const conditionallyShowDeleteButton = (value) => {  
        if(value.creator_id == props.cuid){
            return <button onClick={() => props.callBack2(value.id)}>Delete this value</button>
        }
    }

    const createValuesFromList = () => {
        
        return props.values.sort((a, b) => (a.name > b.name) ? 1 : -1).map(value => {
            
            return <div>
                        <input onChange={(e) => props.callBack4(e, value.id)} type="checkbox" checked={props.cuv.includes(value.id)}  name={`${value.id}`} value={value.id}/>
                        <label for={`${value.id}`}> {value.name}</label><br></br>
                        {conditionallyShowDeleteButton(value)}
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