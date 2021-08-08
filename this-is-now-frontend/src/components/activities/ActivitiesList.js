import Activity from "./Activity"
// import Navbar from "../../containers/Navbar"

const ActivitiesList = (props) => {
    debugger
    const createActivitiesFromList = () => {
        return props.rankedActivities.map(activity => {
            return <Activity score={activity.score} name={props.activities.find(activity2 => parseInt(activity2.id) == activity.id).attributes.name}/>
        })
    }
    

    return (
        <>
            {createActivitiesFromList()}
        </>
    )
}

export default ActivitiesList;