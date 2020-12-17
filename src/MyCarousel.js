import React from'react';

function MyCarousel(){
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <nav className="navbar bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Promotions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Service Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Create</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Construct</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Install</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Repair</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Manage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Deliver</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="./store-3867742_640.jpg" alt="First slide"/>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="mark-804938_640-1.jpg" alt="Second slide"/>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="photomontage-1514218_640.jpg" alt="Third slide"/>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
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
