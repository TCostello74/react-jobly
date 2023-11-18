import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './routes-nav/NavBar';
import AppRoutes from './routes-nav/Routes';
import JoblyApi from './api/api'; 
import UserContext from './auth/UserContext';
import { jwtDecode } from 'jwt-decode';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage('jobly-token');


  // Handle user login
  const login = async (loginData) => {
    try {
      const token = await JoblyApi.login(loginData);
      setToken(token);
      JoblyApi.token = token;

      // Fetch user details after successful login
      const currentUser = await JoblyApi.getCurrentUser(loginData.username);
      setCurrentUser(currentUser);

      return { success: true };
    } catch (errors) {
      console.error("Login failed", errors);
      // Return error information for potential error handling in the UI
      return { success: false, errors };
    }
  };

  // Handle user signup
  const signup = async (signupData) => {
    try {
      const token = await JoblyApi.signup(signupData);
      setToken(token);
      JoblyApi.token = token;

      // Fetch user details after successful signup
      const currentUser = await JoblyApi.getCurrentUser(signupData.username);
      setCurrentUser(currentUser);

      return { success: true };
    } catch (errors) {
      console.error("Signup failed", errors);
      // Return error information for potential error handling in the UI
      return { success: false, errors };
    }
  };

  // Handle user logout
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = null; // Ensure the token is cleared from the API class
  };

  // Load user info from API
  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          const { username } = jwtDecode(token); 
          JoblyApi.token = token;
          const currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (errors) {
          console.error("Load user info failed", errors);
        }
      }
    };
    getCurrentUser();
  }, [token]);

  const applyToJob = async (id) => {
    console.log("Applying to job with ID:", id);
    if (!currentUser.applications.includes(id)) {
      try {
        await JoblyApi.applyToJob(currentUser.username, id);
        setCurrentUser(user => ({
          ...user,
          applications: [...user.applications, id]
        }));
      } catch (errors) {
        console.error("Apply to job failed", errors);
        
      }
    }
  };


  return (
    <Router>
      <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup, applyToJob }}>
        <NavBar logout={logout} />
        <AppRoutes login={login} signup={signup} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;



