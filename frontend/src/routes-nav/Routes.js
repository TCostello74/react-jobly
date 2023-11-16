import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import CompanyDetail from '../companies/CompanyDetail';
import CompanyList from '../companies/CompanyList';
import Homepage from '../homepage/Homepage';
import JobList from '../jobs/JobList';
import ProfileForm from '../profile/ProfileForm';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/companies/:handle" component={CompanyDetail} />
      <Route path="/companies" component={CompanyList} />
      <Route path="/jobs" component={JobList} />
      <Route path="/profile" component={ProfileForm} />
      {/* Add more routes as needed */}
    </Switch>
  );
}

export default AppRoutes;

