import React from 'react';

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