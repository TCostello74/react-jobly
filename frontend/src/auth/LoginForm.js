import React, { useState } from 'react';


function LoginForm({ login, history }) {
  const [formData, setFormData] = useState({
    username: '', // You can temporarily hardcode default values for development
    password: '',
  });
  
  const [errors, setErrors] = useState([]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/");
    } else {
      setErrors(result.errors || ["Login failed. Please try again."]);
    }
  };
  

  return (
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
      <button type="submit">Login</button>

      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>
      )}
    </form>
  );
}

export default LoginForm;
