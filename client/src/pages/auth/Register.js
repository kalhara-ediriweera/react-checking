// pages/auth/Register.js
import React, { useState } from 'react';
import { registerUser } from '../../api/userapi';  // API function to register
import { useAuth } from '../../hooks/useAuth';  // Custom hook to manage authentication

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
      window.location.href = '/profile';  // Redirect to user profile
    } catch (error) {
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Register;
