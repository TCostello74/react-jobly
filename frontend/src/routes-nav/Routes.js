import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import CompanyDetail from '../companies/CompanyDetail';
import CompanyList from '../companies/CompanyList';
import Homepage from '../homepage/Homepage';
import JobList from '../jobs/JobList';
import ProfileForm from '../profile/ProfileForm';
import PrivateRoute from './PrivateRoute';

function AppRoutes({ login, signup }) {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route path="/login">
        <LoginForm login={login} />
      </Route>

      <Route path="/signup">
        <SignupForm signup={signup} />
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



