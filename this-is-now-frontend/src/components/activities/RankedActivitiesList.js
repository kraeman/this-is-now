import {Stack} from "stack-styled"
import { Link } from 'react-router-dom';


const RankedActivitiesList = (props) => {
    
    const createActivitiesFromList = () => {
        //In the future I will figure out a way to make it so I send down the name of the activity with the ranked activities list instead of matching them trough a function to the activities list.
        return props.rankedActivities.map(rankedActivity => {
            const activity = props.activities.find(activity => parseInt(activity.id) === rankedActivity.id)
            if(activity && parseInt(activity.id) === rankedActivity.id){
                return <li key={rankedActivity.id}>
                            <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>......<mark>Score: {rankedActivity.score}</mark>
                            
                        </li>
                }})
    }
    
    return (
        <div>
        <br/><br/><br/><br/>
            <h4>Your Suggested Activities</h4>
        <Stack>
        <Stack gridGap={3}>
            <ul>{createActivitiesFromList()}</ul>
            
        </Stack>
        </Stack>
        </div>
    )
}

export default RankedActivitiesList;