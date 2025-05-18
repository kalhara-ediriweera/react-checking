import React, { useState } from 'react';
import { loginUser } from '../../api/userapi';  // API function to login
//import { useAuth } from '../../hooks/useAuth';  // Custom hook to manage login state

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      const { token, username } = response;

      // Save the token and username in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);

      login(token);  // Update the app state with the token
      window.location.href = '/';  // Redirect to the home or profile page
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
    </div>
  );
};

export default Login;
