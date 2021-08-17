import {Stack} from "stack-styled"
import { Link } from 'react-router-dom';


const RankedActivitiesList = (props) => {
    
    const createActivitiesFromList = () => {
        //In the future I will figure out a way to make it so I send down the name of the activity with the ranked activities list instead of matching them trough a function to the activities list.
        return props.rankedActivities.map(rankedActivity => {
            const activity = props.activities.find(activity => parseInt(activity.id) === rankedActivity.id)
            if(activity && parseInt(activity.id) === rankedActivity.id){
                return <div key={rankedActivity.id}>
                            <br/>
                            {activity.attributes.name}......Score: {rankedActivity.score}
                            <Link to={`/activities/${activity.id}`}>Check it out!</Link>
                        </div>
                }})
    }
    
    return (
        <div>
        <Stack>
        <br/><br/><br/><br/>
        <Stack gridGap={3}>
            {createActivitiesFromList()}
        </Stack>
        </Stack>
        </div>
    )
}

export default RankedActivitiesList;