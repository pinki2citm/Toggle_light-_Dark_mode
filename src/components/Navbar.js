import React, { useState } from 'react';

function Navbar() {
  const [Text, setText] = useState('Switch to Dark Mode');
  const [bgColor, SetBgColor] = useState('light');
  const [textColor, SetTextColor] = useState('dark');

  const toggle = () => {
    if (bgColor === 'light') {
      SetBgColor('dark');
      document.body.style.backgroundColor = 'black';
      setText('Switch to Light Mode');
      SetTextColor('light');
    } else {
      SetBgColor('light');
      document.body.style.backgroundColor = 'white';
      setText('Switch to Dark Mode');
      SetTextColor('dark');
    }
  };

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
          <button className="btn btn-outline-success" onClick={toggle} type="button">{Text}</button>
        </div>
      </nav>
  <center>    <h2 className={`text-${textColor}`}>Welcome to the Flower shop</h2></center>
    </div>
  );
}

export default Navbar;
