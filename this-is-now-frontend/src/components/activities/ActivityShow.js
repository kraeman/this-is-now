const ActivityShow = (props) => {

    
    const id = parseInt(props.props.match.params.activityId)
    const theA = props.activity.find(activity => parseInt(activity.id) == id)
    debugger
    return (
        <div>
            <br/>
            {theA.attributes.name}
            <br></br>
            {theA.attributes.description}
        </div>
    )
}

export default ActivityShow;