import { Link } from 'react-router-dom'
import {Stack} from "stack-styled"


const AllActivitiesList = (props) => {
    const conditionalDeleteButtonIfCurrentUserIsCreator = (activity) => {
        
        if(activity.attributes.creator_id === parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => props.deleteActivityFetch(activity.id)}>Delete this Activity</button>
        }
    }

    const createActivityLinks = () => {
        return props.activities.map(activity => {
 
           return <li key={activity.id}>
               <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>
               {conditionalDeleteButtonIfCurrentUserIsCreator(activity)}
            </li>
        })
    }
    
    return (
        <div>
            <br/><br/><br/><br/>
            <h4>All Activities</h4>
            <Stack>
        <Stack gridGap={3}>
            <ul>
                {createActivityLinks()}
            </ul>
            </Stack>
            </Stack>
        </div>
    )
}

export default AllActivitiesList;