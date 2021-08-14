import { Link } from 'react-router-dom';
// import Navbar from "../../containers/Navbar"
const Value = (props) => {

    
    
    const onAddValue = (e) => {
        debugger
        if(!props.cuv || !props.cuv.includes(props.id)){
            e.target.textContent = "Remove Value"
            props.checkIn(props.id)
        }else  {
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


    const conditionalInitialMessage = () => {
        if(props.cuv && props.cuv.includes(props.id)){
            return "Remove Value"
        }else  {
            return "Add to your values"
        }
    }


    return (
        <div className='individual_value'>
            
            {props.valueData.name}   <button onClick={(e) => onAddValue(e) }>{conditionalInitialMessage()}</button>
            {conditionallyShowDeleteButton()}
        </div>
    )
}

export default Value;