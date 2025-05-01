import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const UserProfile = () => {
  const { token, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/api/user', {
          headers: { 'x-auth-token': token },
        })
        .then((response) => {
          setUser(response.data.user);
          setFavorites(response.data.favorites);
        })
        .catch((err) => console.log(err));
    } else {
      window.location.href = '/login'; // Redirect to login if no token
    }
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <h3>Your Favorite Countries</h3>
          <ul>
            {favorites.map((country, index) => (
              <li key={index}>{country.name}</li>
            ))}
          </ul>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
