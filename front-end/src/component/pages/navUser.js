import React from 'react'

export default function NavUser() {
  return (
    <div>
        <nav className="navbar">
        <div className="navbar-left">
        <a href='/'>
        <span id='logo' >Portfolio <span id='builder'>BUILDER</span></span>
        </a>
       
        </div>
        <div className="navbar-right">
          <a href="#">Contact us</a>
          <a href="/">Sign out</a>
         
        </div>
      </nav>
    </div>
  )
}
