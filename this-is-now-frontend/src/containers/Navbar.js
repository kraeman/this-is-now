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
    return (
        <div  className="mb-3">
            <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Home</NavLink>
            <NavLink
            to="/activities"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Activities</NavLink>
            <NavLink
            to="/values"
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}
            >Values</NavLink>
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
    )
}

export default Navbar;