import React, { useState } from 'react';

function Navbar({textColor,bgColor,text,toggle}) {
  

  return (
    <div className="px-2">
      <nav className={`navbar navbar-expand-lg bg-${bgColor}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: textColor === 'light' ? 'white' : 'black' }}>Home</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link text-${textColor}`} href="About.js" aria-disabled="true">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${textColor}`} href="#">Contact Us</a>
            </li>
          </ul>
          <button className="btn btn-outline-success" onClick={toggle} type="button">{text}</button>
        </div>
      </nav>
  <center>    <h2 className={`text-${textColor}`}>Welcome to the Flower shop</h2></center>
    </div>
  );
}

export default Navbar;
