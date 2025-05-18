import React from 'react';
import { Link } from 'react-router-dom'; // React Router for navigation
import 'animate.css';  // Importing Animate.css for animation

const Header = ({ token, logout }) => {
  // Retrieve the username from localStorage
  const username = localStorage.getItem('username') || 'User';  // Default to 'User' if no username

  return (
    <header className="bg-primary text-white p-4 shadow-sm">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h1 className="fw-bold animate__animated animate__fadeIn mb-3 mb-md-0">Country Information</h1>

        {/* Navigation */}
        <nav className="d-flex flex-column flex-md-row align-items-center">
          {token ? (
            <div className="d-flex align-items-center">
              <span className="me-3 mb-2 mb-md-0">Welcome, {username}!</span> {/* Display the username */}
              
              {/* Profile Icon & Navigation */}
              <Link to="/profile" className="me-3 mb-2 mb-md-0">
                <button className="btn btn-light">Profile</button>
              </Link>
              
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="d-flex gap-3">
              <Link to="/login">
                <button className="btn btn-light hover-btn">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-light hover-btn">Register</button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
