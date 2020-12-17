import logo from './logo.jpg';
import React from 'react';


function NavBar(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <img src={logo} className="App-logo rounded mx-auto d-block" alt="logo" />
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        
        </button>

    <div className="collapse navbar-collapse" >
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="serviceprovider.js">Service Providers</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="servicecategories" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Service Categories
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="categorycreate.js">Create</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="categoryconstruct.js">Construct</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="categoryinstall.js">Install</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="categoryrepair.js">Repair</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="categorymanage.js">Manage</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="categorydeliver.js">Deliver</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="promotions.js">Promotions</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="contactus.js">Contact Us</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="faq.js">FAQ</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="myaccountdetails.js" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <a className="dropdown-item" href="loginpage.js">Login</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="userregisterpage.js">Register</a>
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
