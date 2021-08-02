import { Link } from 'react-router-dom';
// import Navbar from "../../containers/Navbar"
const Activity = (props) => {

    
    // debugger
    return (
        <div>
            <br/><br/><br/><br/><br/>
            Activity: {props.activityData.data.attributes.name}......Score: {props.activityData.score}
        </div>
    )
}

export default Activity;