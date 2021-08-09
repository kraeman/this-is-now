import { Link } from 'react-router-dom';
// import Navbar from "../../containers/Navbar"
const Value = (props) => {

    
    
    const onAddValue = (e) => {
        if(e.target.textContent === "Add to your values"){
            e.target.textContent = "Remove Value"
            props.checkIn(props.id)
        }else if(e.target.textContent === "Remove Value")  {
            e.target.textContent = "Add to your values"
            props.checkOut(props.id)
        }  
    }

    const conditionallyShowDeleteButton = () => {
        debugger
        if(props.valueData.creator_id == props.cuid){
            return <button onClick={() => props.callBack2(props.valueData.id)}>Delete this value</button>
        }
    }



    return (
        <div className='individual_value'>
            <br/><br/><br/><br/><br/>
            {props.valueData.name}
            <button onClick={(e) => onAddValue(e) }>Add to your values</button>
            {conditionallyShowDeleteButton()}
        </div>
    )
}

export default Value;