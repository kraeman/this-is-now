import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


const Activity = (props) => {
    //FUNCTIONALITY TO INCLUDE LIST OF VALUES RELATED TO THIS ACTIVITY
    const activity = props.activity.find(activity => activity.id === props.props.match.params.activityId)
    // const associatedScores = props.scores.filter(score => score.attributes.activity_id === parseInt(activity.id))
    // const associatedValueIds = associatedScores.map(score => score.attributes.value_id)
    // const associatedValues = props.values.filter(value => associatedValueIds.includes(value.id))

    // const makeListOfAssociatedValues = () => {
    //     return associatedValues.map(value => {
    //         return <h3>hello</h3>
    //         // return <li key={value.id} value={value.name}></li>
    //     })
    // }

    if(activity){
        return (
            <div>
                <br/>
                {activity.attributes.name}
                <br></br>
                {activity.attributes.description}
                <br></br>
                <Link to={`/activities`}>Back To Main Page</Link>
                <br></br><br></br>
                {/* <ul>{makeListOfAssociatedValues}</ul> */}
                
            </div>
        )
    }else{
        return <Redirect push to="/activities"/>
    }
}

export default Activity;