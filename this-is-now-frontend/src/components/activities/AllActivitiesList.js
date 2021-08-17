import { Link } from 'react-router-dom'

const AllActivitiesList = (props) => {
    const conditionalDeleteButtonIfCurrentUserIsCreator = (activity) => {
        
        if(activity.attributes.creator_id == parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => props.deleteActivityFetch(activity.id)}>Delete this Activity</button>
        }
    }

    const createActivityLinks = () => {
        return props.activities.map(activity => {
            
           return <li>
               <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>
               {conditionalDeleteButtonIfCurrentUserIsCreator(activity)}
            </li>
        })
    }
    
    return (
        <div>
            <ul>
                {createActivityLinks()}
            </ul>
        </div>
    )
}

export default AllActivitiesList;