import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import './NavBar.css';

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>
      </div>

      {currentUser ? (
        <div className="nav-right">
          <span>Welcome, {currentUser.username}!</span>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="nav-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;


