import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <section className="Header">
      <div className="header-div-img"></div>
      <div className="header-div-buttons">
        <button className="header-button-sign">Sign In</button>
        <button className="header-button-create">Create Account</button>
      </div>
    </section>
  )
};

export default Header;