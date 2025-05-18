import React, { useState, useEffect, Navigate  } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';  // Custom hook to manage authentication state
import 'animate.css'; // Importing Animate.css for animation
import { jwtDecode } from 'jwt-decode';  // Correct named import

const UserProfile = () => {
  const { token } = useAuth(); // Custom hook that manages the login state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");

  // Fetch user ID from token if available
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);  // Decode token to get the userId
      setUserId(decodedToken.userId);  // Set userId from the decoded token
    } else {
      window.location.href = '/login'; // Redirect if no token
    }
  }, [token]);

  // Fetch user data from backend
  useEffect(() => {
    if (userId) {
      async function fetchUserData() {
        try {
          const response = await axios.get(`https://af-backend-production.up.railway.app/api/auth/user_view/${userId}`);  // Fetch user data using userId
          if (response.data.success) {
            // Set user data in the state
            setUser(response.data.user);
            setLoading(false);
          } else {
            console.log("User not found");
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setLoading(false);
        }
      }
      fetchUserData();
    }
  }, [userId]); // Fetch user data when userId is available

  const handleHomeClick = () => {
    <Navigate to="/" />;
  };

  if (loading) {
    return (
      <div className="container mt-5 animate__animated animate__fadeIn">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      {user ? (
        <div className="card shadow-lg rounded p-4">
          <div className="text-center mb-4">
            <div className="profile-img">
              <img
                src="https://www.svgrepo.com/show/295402/user-profile.svg"
                alt="Profile"
                className="rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
            <h2 className="mt-3">{user.username}</h2><br></br>
            <p><strong>User Name:</strong>{user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> +9471 0347 359</p>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button onClick={handleHomeClick} className="btn btn-success">
              Home
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center">No user data available.</p>
      )}
    </div>
  );
};

export default UserProfile;
