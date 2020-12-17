import React from 'react';
import logo from './logo.jpg'

function NavBottom(props) {
    return (
      <nav className={`navbar navbar-dark bg-dark ${props.className}`}>
        <div className="container-fluid">
  
          
  
          <div className="d-flex flex-grow-1">
            {props.children}
          </div>
          
          {props.extraComponent}
        </div>
      </nav>
    )
  }

  export default NavBottom