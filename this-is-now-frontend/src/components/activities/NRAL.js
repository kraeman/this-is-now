import Activity from "./Activity"
// import {Stack} from "stack-styled"
import { Link } from 'react-router-dom'
// import Navbar from "../../containers/Navbar"

const NRAL = (props) => {
    // debugger
    const createActivitiesFromList = () => {
        return props.activities.map(activity => {
            debugger
           return <li>
               <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>
               
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