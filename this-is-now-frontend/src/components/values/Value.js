import { Link } from 'react-router-dom';
// import Navbar from "../../containers/Navbar"
const Value = (props) => {

    
    debugger
    return (
        <div>
            <br/><br/><br/><br/><br/>
            {props.valueData.attributes.name}
            <button onClick={() => props.callback(props.valueData, props.cuid, props.jwt)}>Add this value to you values</button>
        </div>
    )
}

export default Value;