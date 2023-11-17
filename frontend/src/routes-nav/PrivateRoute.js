import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../auth/UserContext';

function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }}/>
        )
      }
    />
  );
}

export default PrivateRoute;
