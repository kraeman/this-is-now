import Value from "./Value"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    

    const createValuesFromList = () => {
        return <Value/>
    }
    

    return (
        <>
            {createValuesFromList()}
        </>
    )
}



export default ValuesList;