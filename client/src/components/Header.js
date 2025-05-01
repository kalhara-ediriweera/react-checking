// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // React Router for navigation

const Header = ({ token, logout }) => {
  // Retrieve the username from localStorage
  const username = localStorage.getItem('username') ;  // Default to 'User' if no username

  return (
    <div className="header">
      <h1>Country Information</h1>
      <nav>
        {token ? (
          <div>
            <span>Welcome, {username}!</span>  {/* Display the username */}
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
