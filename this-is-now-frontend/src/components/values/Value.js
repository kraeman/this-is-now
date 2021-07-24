import { Link } from 'react-router-dom';
const Value = ({id, title, body, completed, history, removeTodo, markComplete}) => {

    const handleClick = () => {
        removeTodo(id)
        history.push("/todos")
    }

    const handleCompleteChange = () => {
        const currentDate = new Date().toISOString().split("T")[0]
        markComplete(id, currentDate)
        history.push("/todos")
    }

    const conditionalTitle = () => history.location.pathname === "/todos" ? <Link to={`/todos/${id}`}><h3>{title}</h3></Link> : <h3>{title}</h3>
    const conditionalButtons = () => history.location.pathname === "/todos" ? <></> : <button className="btn btn-danger" onClick={() => handleClick()}>Delete</button>
    const conditionalCheckBox = () => {
        if (history.location.pathname === `/todos/${id}`) {
            if (!completed) {
                return <span>Mark complete <input type="checkbox" onClick={handleCompleteChange}/></span>
            } else {
                return <h4>Todo item complited on date: {}</h4>
            }
        }
    }
    
    return (
        <div id={`todo-${id}`}>
            {conditionalTitle()}
            {conditionalCheckBox()}
            <p>{body}</p>
            {conditionalButtons()}
        </div>
    )
}

export default Value;