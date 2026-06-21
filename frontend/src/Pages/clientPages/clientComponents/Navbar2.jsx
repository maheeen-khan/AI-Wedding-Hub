import React from "react";
import { NavLink } from "react-router-dom";
import coupleDp from '../../../assets/coupleDp.png';
import SearchModal from "./SearchModal";
import "../LandingPage/LandingPage.css";

const Navbar = () => {
    return (
        <>
            <SearchModal />
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand logo" href="#">
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
                                <NavLink
                                    to="/venue"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Venues
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/catering"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Catering
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/photography"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Photography
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/decor"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Decor
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/makeup"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Makeup
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/car-rental"
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "active-link" : "")
                                    }
                                >
                                    Car Rental
                                </NavLink>
                            </li>
                        </ul>

                        {/* Right Side */}
                        <div className="d-flex justify-content-around align-items-center gap-3">

                            <i
                                className="bi bi-search search-icon"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            ></i>

                            <SearchModal />

                            <div className="">
                                <img src={coupleDp} alt="Couple" className="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;