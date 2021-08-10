import Value from "./Value"
// import Navbar from "../../containers/Navbar"

const ValuesList = (props) => {
    
debugger
    const createValuesFromList = () => {
        debugger
        return props.values.sort((a, b) => (a.name > b.name) ? 1 : -1).map(value => {
            
            return <>
                 <br/>
                <Value jwt={props.JWT} cuv={props.cuv} id={value.id} checkIn={props.checkIn} checkOut={props.checkOut} cuid={props.cuid} callBack2={props.callBack2} valueData={value}/>
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