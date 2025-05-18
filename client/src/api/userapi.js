// api.js
import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth/'; // Backend API URL (adjust if needed)
const API_URL = 'https://af-backend-production.up.railway.app/api/auth/'; // Backend API URL (adjust if needed)
// Register API call
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}register`, {
      username,
      email,
      password,
    });
    return response.data.token; // Return the JWT token
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

// Login API call
// api/userapi.js
// api/userapi.js
export const loginUser = async (email, password) => {
  try {
    const response = await fetch('https://af-backend-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();  // Assuming the response contains { token, username }
    return {
      token: data.token,  // Extract the token
      username: data.username,  // Extract the username
      
    };
  } catch (error) {
    console.error('Login error: ', error);
    throw error;  // Propagate the error for handling in the component
  }
};
