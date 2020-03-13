import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'


const PrivateRoute = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, loading, authUser } = authContext;

    useEffect(() => {
        authUser()
    }, [])

    return (
        <Route {...props} render={props => !authenticated && !loading ? (
            <Redirect to="/" />
        ) : (
                <Component {...props} />
            )} />
    );
}

export default PrivateRoute;