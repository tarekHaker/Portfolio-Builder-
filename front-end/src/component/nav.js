import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
        <span id='logo'>Portfolio <span id='builder'>BUILDER</span></span>
        </div>
        <div className="navbar-right">
          <a href="#">Contact</a>
          <a href="#">Sign-In</a>
          <a href="#">Sign-Up</a>
        </div>
      </nav>
    </div>
  );
}
