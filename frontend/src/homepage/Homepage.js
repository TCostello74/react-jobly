import React, { useContext } from 'react';
import UserContext from '../auth/UserContext';
import './Homepage.css';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage-container">
      <h1>Welcome to Jobly</h1>
      {currentUser ? (
        <p>Welcome back, {currentUser.username}!</p>
      ) : (
        <p>Please login or signup to continue.</p>
      )}
    </div>
  );
}

export default Homepage;

