import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/profile">Profile</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
}

export default NavBar;
