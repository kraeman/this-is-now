import { Link } from 'react-router-dom'

const ActivityShow = (props) => {

    const id = parseInt(props.props.match.params.activityId)
    const theA = props.activity.find(activity => parseInt(activity.id) == id)
    
    return (
        <div>
            <br/>
            {theA.attributes.name}
            <br></br>
            {theA.attributes.description}
            <br></br>
            <Link to={`/activities`}>Back To Main Page</Link>
        </div>
    )
}

export default ActivityShow;