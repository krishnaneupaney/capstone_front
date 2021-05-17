import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
            <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About </h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Connect</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
