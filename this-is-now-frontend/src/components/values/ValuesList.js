import Value from "./Value"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    

    const createValuesFromList = () => {
        return props.values.map(value => {
            
            return <>
                 <br/>
                <Value jwt={props.JWT} callback={props.callback} cuid={props.cuid} valueData={value}/>
            </>
        })
        }
    

    return (
        <>
            {createValuesFromList()}
        </>
    )
}



export default ValuesList;