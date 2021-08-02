import Activity from "./Activity"
// import Navbar from "../../containers/Navbar"

const ActivitiesList = (props) => {

    const createActivitiesFromList = () => {
        if(!props.requesting){
        return props.rankedActivities.map(activity => {
            return <>
                 <br/>
                <Activity activityData={activity}/>
            </>
        })
    }else {
        return "Loading"
    }
        }
    

    return (
        <>
            {createActivitiesFromList()}
        </>
    )
}

export default ActivitiesList;