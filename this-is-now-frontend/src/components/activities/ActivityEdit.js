import { Link } from 'react-router-dom'
// import ActivityShow from './ActivityShow'

const ActivityEdit = (props) => {
    
    
    const id = parseInt(props.props.match.params.activityId)
    const theA = props.activity.find(activity => parseInt(activity.id) == id)
    
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ActivityEdit;