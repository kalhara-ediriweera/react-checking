import React, { useState } from 'react';
import { registerUser } from '../../api/userapi';  // API function to register
//import { useAuth } from '../../hooks/useAuth';  // Custom hook to manage authentication

const Register = ({ login }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const token = await registerUser(username, email, password);  // API call to register
      login(token);  // Set the token in app state
      window.location.href = '/';  // Redirect to user profile
    } catch (error) {
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto">
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username" 
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
    </div>
  );
};

export default Register;
