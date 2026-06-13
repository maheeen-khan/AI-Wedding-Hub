import React from "react";
import { Link } from "react-router-dom";
import coupleDp from '../../../assets/coupleDp.png';
import "../LandingPage/LandingPage.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand logo" href="/">
                    WeddingHub
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/venue">
                                Venues
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/catering">
                                Catering
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/photography">
                                Photography
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/decor">
                                Decor
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/makeup">
                                Makeup
                            </a>
                        </li>

                         <li className="nav-item">
                            <a className="nav-link  " href="/car-rental">
                                Car Rental
                            </a>
                        </li>
                    </ul>

                    {/* Right Side */}
                    <div className="d-flex justify-content-around align-items-center gap-3">
                        <i className="bi bi-search search-icon"></i>

                        <div className="">
                            <img src={coupleDp} alt="Couple" className="img-fluid rounded-circle" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;