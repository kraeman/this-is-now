import { Link } from 'react-router-dom'
import {Stack} from "stack-styled"
import { Redirect } from 'react-router-dom'


const Activity = (props) => {
    const activity = props.activities.find(activity => activity.id === props.props.match.params.activityId)
    
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
                <Link to={`/users/${sessionStorage.getItem('username')}`}>Back To Main Page</Link>
                <br></br><br></br>
                {/* <ul>{makeListOfAssociatedValues}</ul> */}
                </Stack>
            </div>
        )
    }else{
        return <Redirect push to={`/users/${sessionStorage.getItem('username')}`}/>
    }
}

export default Activity;