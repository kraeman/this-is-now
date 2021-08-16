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

const Navbar = () => {
        return (
            <div  className="mb-3">
                <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Login</NavLink>
                <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Signup</NavLink>
            </div>
    )
}

export default Navbar;