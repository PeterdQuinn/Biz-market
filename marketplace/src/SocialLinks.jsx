import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="social-links">
        <a href="https://facebook.com" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* Add more social links as needed */}
      </div>
    </div>
  );
}

export default SocialLinks;
