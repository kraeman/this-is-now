import Activity from "./Activity"
// import Navbar from "../../containers/Navbar"

const ActivitiesList = (props) => {

    const createActivitiesFromList = () => {
        return <Activity/>
    }
    

    return (
        <>
            {createActivitiesFromList()}
        </>
    )
}

export default ActivitiesList;