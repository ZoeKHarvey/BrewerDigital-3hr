import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <section className="Footer">
      <div className="footer-div-main">
        <h1>Have Questions?</h1>
        <button>Contact Intueat</button>
      </div>
      <div className="footer-div-terms">
        <p>Inueat ©2020 All Rights Reserved</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </section>
  )
};

export default Footer;