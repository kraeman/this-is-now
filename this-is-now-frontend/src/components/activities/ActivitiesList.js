import Activity from "./Activity"
// import Navbar from "../../containers/Navbar"

const ActivitiesList = (props) => {

    const createActivitiesFromList = () => {
        // debugger
        if(props.activities.length === 0){
            return "No Activities"
        }else{
            // debugger
                return props.scores.map(activity => {
                    const theOne = props.activities.find(act => parseInt(act.id) == activity.id)
                    return <>
                    <br/>
                    <Activity activityWithScore={{name: theOne.attributes.name , score: activity.score}}/>
                    </>
            })
            }
        
    }
    

    return (
        <>
            {createActivitiesFromList()}
        </>
    )
}

export default ActivitiesList;