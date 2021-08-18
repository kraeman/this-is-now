import { Link } from 'react-router-dom'
import {Stack} from "stack-styled"
import { Redirect } from 'react-router-dom'


const Activity = (props) => {
    //FUNCTIONALITY TO INCLUDE LIST OF VALUES RELATED TO THIS ACTIVITY
    const activity = props.activities.find(activity => activity.id === props.props.match.params.activityId)
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
            <div className='rowC' id='value_container' style={{
                backgroundColor: 'white',
                borderWidth: '5px',
                borderColor:'#aaaaaa', 
                borderStyle:'solid',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute', left: '50%', top: '20%',
                transform: 'translate(-50%, -50%)'
              }}>
                  <Stack>
                <br/>
                <h1><u>{activity.attributes.name}</u></h1>
                
                <h3>{activity.attributes.description}</h3>
                <br></br>
                <Link to={`/activities`}>Back To Main Page</Link>
                <br></br><br></br>
                {/* <ul>{makeListOfAssociatedValues}</ul> */}
                </Stack>
            </div>
        )
    }else{
        return <Redirect push to="/activities"/>
    }
}

export default Activity;