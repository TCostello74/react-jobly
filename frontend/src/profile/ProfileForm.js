import React, { useState, useContext } from 'react';
import UserContext from '../auth/UserContext';
import JoblyApi from '../api/api';

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: ""
  });
  const [errors, setErrors] = useState([]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    try {
      let updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
      setCurrentUser(updatedUser);
      setErrors([]);
      
    } catch (err) {
      setErrors(err);
    }
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <button>Save Changes</button>
      </form>

      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>
      )}

    </div>
  );
}

export default ProfileForm;



