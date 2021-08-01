import { Link } from 'react-router-dom';
// import Navbar from "../../containers/Navbar"
const Activity = (props) => {

    
    
    return (
        <div>
            <br/><br/><br/><br/><br/>
            Activity: {props.activityWithScore.name}......Score: {props.activityWithScore.score}
        </div>
    )
}

export default Activity;