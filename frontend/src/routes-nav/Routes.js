import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import CompanyDetail from '../companies/CompanyDetail';
import CompanyList from '../companies/CompanyList';
import Homepage from '../homepage/Homepage';
import JobList from '../jobs/JobList';
import ProfileForm from '../profile/ProfileForm';
import PrivateRoute from './PrivateRoute';

function AppRoutes({ login, signup }) {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route path="/login">
        <LoginForm login={login} history={history}/>
      </Route>

      <Route path="/signup">
        <SignupForm signup={signup} history={history}/>
      </Route>

      <PrivateRoute path="/companies/:handle">
        <CompanyDetail />
      </PrivateRoute>

      <PrivateRoute path="/companies">
        <CompanyList />
      </PrivateRoute>

      <PrivateRoute path="/jobs">
        <JobList />
      </PrivateRoute>

      <PrivateRoute path="/profile">
        <ProfileForm />
      </PrivateRoute>

      {/* Add more routes as needed */}
    </Switch>
  );
}

export default AppRoutes;



