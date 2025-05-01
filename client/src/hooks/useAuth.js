// hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));  // Initialize with stored token

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken); // Store the JWT token in localStorage
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');  // Remove the username from localStorage
    window.location.href = '/';  // Redirect to login page
  };
  

  return { token, login, logout };
};

export default useAuth;  // Default export
