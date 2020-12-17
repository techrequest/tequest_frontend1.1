import React from'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BuildIcon from '@material-ui/icons/Build';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AdbIcon from '@material-ui/icons/Adb';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import HowToRegIcon from '@material-ui/icons/HowToReg';


function MyCarousel(){
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <nav className="navbar bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <HomeIcon/> Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" ><CardGiftcardIcon/> Promotions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><CategoryIcon/> Service Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><CreateIcon/> Create</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><AccountBalanceIcon/> Construct</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><AdbIcon/> Install</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><BuildIcon/> Repair</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><HowToRegIcon/> Manage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><MarkunreadMailboxIcon/> Deliver</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./store-3867742_640.jpg" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="mark-804938_640-1.jpg" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="photomontage-1514218_640.jpg" alt="Third slide"/>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src="./hand-845269_640.jpg" alt="Your creativity needs expert to come to life - Hire an expert to bring your creative ideas to life"/>
                                    <a className="img-text" href="">
                                        <p>Your creativity needs expert to come to life - Hire an expert to bring your creative ideas to life</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src="./building-blocks-717309_640.jpg" alt="Need someone to Construct your dream ideas - Click here"/>
                                    <a className="img-text" href="">
                                        <p>Need someone to Construct your dream ideas - Click here</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default MyCarousel
