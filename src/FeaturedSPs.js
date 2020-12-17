import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import storefrontitaly from './images/storefrontitaly.jpg';
import storefrontold from './images/storefrontold.jpg';
import storefronturban from './images/storefronturban.jpg';
import storefrtontfrench from './images/storefrtontfrench.jpg';

function FeaturedSPs(){
    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Service Providers</h1>
                </div>
                <div className="row align-items-center product-slider product-slider-4">
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="#">Product Name</a>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="product-image">
                                <a href="productdetail.js">
                                    <img src={storefrtontfrench} height="150px" alt="Product Image"/>
                                </a>
                                <div className="product-action">
                                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>99</h3>
                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="#">Product Name</a>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="product-image">
                                <a href="productdetail.js">
                                    <img src={storefrontitaly} height="150px" alt="Product Image"/>
                                </a>
                                <div className="product-action">
                                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>99</h3>
                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="#">Product Name</a>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="product-image">
                                <a href="productdetail.js">
                                    <img src={storefrontold} height="150px" alt="Product Image"/>
                                </a>
                                <div className="product-action">
                                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>99</h3>
                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="#">Product Name</a>
                                <div className="ratting">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="product-image">
                                <a href="productdetail.js">
                                    <img src={storefronturban} height="150px" alt="Product Image"/>
                                </a>
                                <div className="product-action">
                                    <a href="#"><i className="fa fa-cart-plus"></i></a>
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>99</h3>
                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FeaturedSPs