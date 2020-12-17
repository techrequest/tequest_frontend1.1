import logo from './logo.jpg';
import React from 'react';
import NavBottom from './NavBottom';

function NavBar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <img src={logo} className="App-logo rounded mx-auto d-block" alt="logo" />
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        
        </button>

    <div className="collapse navbar-collapse" >
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Service Providers</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Service Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="#">Create</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Construct</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Install</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Repair</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Manage</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Deliver</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Promotions</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <a className="dropdown-item" href="#">Login</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Register</a>
            </div>
        </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
            
        </div>
    </div>
    
    </nav>
  );
  
}

export default NavBar
