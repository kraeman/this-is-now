import { Link } from 'react-router-dom'

const Activity = (props) => {

    const activity = props.activity.find(activity => activity.id === props.props.match.params.activityId)
    
    return (
        <div>
            <br/>
            {activity.attributes.name}
            <br></br>
            {activity.attributes.description}
            <br></br>
            <Link to={`/activities`}>Back To Main Page</Link>
        </div>
    )
}

export default Activity;