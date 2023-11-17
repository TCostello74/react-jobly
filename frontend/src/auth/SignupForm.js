import React, { useState } from 'react';


function SignupForm({ signup, history }) {
  const [formData, setFormData] = useState({ 
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    // Add any other fields required by your backend for registration
  });

  const [errors, setErrors] = useState([]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
    setErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData)
    let result = await signup(formData);
    if (result.success) {
      history.push("/"); 
    } else {
      setErrors(result.errors || ["Signup failed. Please try again."]);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          placeholder="Username"
        />
        <input 
          name="password" 
          type="password"
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Password"
        />
        <input 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          placeholder="First Name"
        />
        <input 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          placeholder="Last Name"
        />
        <input 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email"
        />
        {/* Include additional fields as required */}
        <button type="submit">Signup</button>

        {errors.length > 0 && (
          <div>
            {errors.map((error, index) => (
              <p key={index} className="error">{error}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}

export default SignupForm;

