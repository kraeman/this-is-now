import { Link } from 'react-router-dom';
const Activity = (props) => {

    const id = parseInt(props.id)
    return (
        <div>
            <br/>
            {props.name}......Score: {props.score}
                  <Link to={`/activities/${id}`}>Check it out!</Link>
        </div>
    )
}

export default Activity;