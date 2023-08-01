// SocialLinks.jsx
import React from 'react';

function SocialLinks() {
  return (
    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="social-links">
        <a href="https://facebook.com"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
        <a href="https://twitter.com"><img src="/images/twitter-icon.png" alt="Twitter" /></a>
        <a href="https://instagram.com"><img src="/images/instagram-icon.png" alt="Instagram" /></a>
        {/* Add more social links as needed */}
      </div>
    </div>
  );
}

export default SocialLinks;
