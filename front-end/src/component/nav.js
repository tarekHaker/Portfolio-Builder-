import React from 'react';

export default function Nav({setViews}) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
        <span id='logo' onClick={()=>{setViews('signIn')}}>Portfolio <span id='builder'>BUILDER</span></span>
        </div>
        <div className="navbar-right">
          <a href="#">Contact</a>
          <a href="/signIn">Sign-In</a>
          <a href="signUp">Sign-Up</a>
        </div>
      </nav>
    </div>
  );
}
