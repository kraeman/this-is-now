import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({items, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={routeProps => (
            isLogin() ?
                <Component {...routeProps} items={items} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;


