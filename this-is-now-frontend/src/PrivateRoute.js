import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // if you're using Redux!
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render = {props => 
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/loggedOutHome" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

// this would map your auth object to the components props with Redux
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);