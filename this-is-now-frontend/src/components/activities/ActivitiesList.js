import Activity from "./Activity"
// import Navbar from "../../containers/Navbar"

const ActivitiesList = (props) => {

    const createActivitiesFromList = () => {
        debugger
        return props.rankedActivities.map(activity => {
            return <>
                 <br/>
                <Activity activityData={activity}/>
            </>
        })
        }
    

    return (
        <>
            {createActivitiesFromList()}
        </>
    )
}

export default ActivitiesList;