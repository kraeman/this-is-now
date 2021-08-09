import Value from "./Value"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    
debugger
    const createValuesFromList = () => {
        debugger
        return props.values.map(value => {
            
            return <>
                 <br/>
                <Value jwt={props.JWT} id={value.id} checkIn={props.checkIn} checkOut={props.checkOut} cuid={props.cuid} callBack2={props.callBack2} valueData={value}/>
                <br/>
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