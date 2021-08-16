import Activity from "./Activity"
// import {Stack} from "stack-styled"
import { Link } from 'react-router-dom'
// import Navbar from "../../containers/Navbar"

const NRAL = (props) => {
    // 

    const conditionalDeleteButton = (activity) => {
        debugger
        if(activity.attributes.creator_id == parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => props.deleteA(activity.id)}>Delete this Activity</button>
        }
    }

    const createActivitiesFromList = () => {
        return props.activities.map(activity => {
            
           return <li>
               <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>
               {conditionalDeleteButton(activity)}
            </li>
            
        })
    }
    

    return (
        <div>
            <ul>
                {createActivitiesFromList()}
            </ul>
        </div>
    )
}

export default NRAL;