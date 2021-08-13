import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  height: '64px',
  padding: '12px',
  margin: '1em 0 2em',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  fontSize: '75px',
}


const Navbar = (props) => {
    if(props.location === "signup" || props.location === "login"){
        return (
            <div  className="mb-3">
                <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Login Page</NavLink>
                <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Signup Page</NavLink>
            </div>
    )}else{
        return(<div  className="mb-3">
            <NavLink
            to="/activities"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Activities</NavLink>
            <NavLink
            to="/signup"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Logout</NavLink>
        </div>)
    }
}

export default Navbar;