import { Link } from 'react-router-dom'

const NRAL = (props) => {
    const conditionalDeleteButton = (activity) => {
        
        if(activity.attributes.creator_id == parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => props.deleteActivityFetch(activity.id)}>Delete this Activity</button>
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