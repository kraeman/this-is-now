import Activity from "./Activity"
import {Stack} from "stack-styled"

const ActivitiesList = (props) => {
    
    const createActivitiesFromList = () => {
        return props.rankedActivities.map(activity => {
            if(props.activities.find(activity2 => parseInt(activity2.id) == activity.id)){
            return <Activity id={activity.id} score={activity.score} name={props.activities.find(activity2 => parseInt(activity2.id) == activity.id).attributes.name}/>
    }})
    }
    
    return (
        <div>
        <Stack>
            <br/><br/><br/><br/>
        <Stack gridGap={3}>
            {createActivitiesFromList()}
            </Stack></Stack>
        </div>
    )
}

export default ActivitiesList;