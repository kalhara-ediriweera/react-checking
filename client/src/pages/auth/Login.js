// src/pages/auth/Login.js
import React, { useState } from 'react';
import { loginUser } from '../../api/userapi';  // API function to login
import { useAuth } from '../../hooks/useAuth';  // Custom hook to manage login state

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login function, assuming it returns { token, username }
      const response = await loginUser(email, password);  
      const { token, username } = response;  // Destructure the response to get token and username

      // Store token and username in localStorage
      localStorage.setItem('authToken', token);  // Save the token in localStorage
      localStorage.setItem('username', username);  // Save the username in localStorage

      login(token);  // Update the app state with the token
      window.location.href = '/';  // Redirect to home or profile page
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
