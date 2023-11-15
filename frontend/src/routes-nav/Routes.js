import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import CompanyDetails from '../companies/CompanyDetails';
import CompanyList from '../companies/CompanyList';
import Homepage from '../homepage/Homepage';
import JobList from '../jobs/JobList';
import ProfileForm from '../profiles/ProfileForm';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/companies/:handle">
        <CompanyDetails />
      </Route>
      <Route path="/companies">
        <CompanyList />
      </Route>
      <Route path="/jobs">
        <JobList />
      </Route>
      <Route path="/profile">
        <ProfileForm />
      </Route>
      {/* add more routes here as needed */}
    </Switch>
  );
}

export default Routes;
