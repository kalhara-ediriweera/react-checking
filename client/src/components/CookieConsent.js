// components/CookieConsent.js
import React from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const handleAccept = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 5 / 1440 });  // Store for 5 minutes
    document.getElementById('cookieConsent').style.display = 'none';  // Hide the consent banner
  };

  const handleDecline = () => {
    Cookies.set('cookiesAccepted', 'false', { expires: 5 / 1440 });  // Store for 5 minutes
    document.getElementById('cookieConsent').style.display = 'none';  // Hide the consent banner
  };

  return (
    <div id="cookieConsent" style={styles.banner}>
      <p style={styles.message}>
        This website uses cookies to ensure you get the best experience. 
        <button onClick={handleAccept} style={styles.button}>Accept</button>
        <button onClick={handleDecline} style={styles.button}>Decline</button>
      </p>
    </div>
  );
};

// Inline styles for the cookie banner
const styles = {
  banner: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    zIndex: '1000',
  },
  message: {
    margin: '0',
    paddingRight: '20px',
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CookieConsent;
