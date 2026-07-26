import React from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal.jsx";
import "../LandingPage/LandingPage.css";
const Navbar = () => {
    return (

        <>
            <SearchModal />

       
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
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/vendors">
                                Vendors
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/Chatbot">
                                AI Planner
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/Invitation">
                                Invitations
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  " href="/contact">
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    {/* Right Side */}
                    <div className="d-flex justify-content-around align-items-center gap-3">
                        <i className="bi bi-search search-icon" data-bs-toggle="modal" data-bs-target="#searchModal"></i> <SearchModal />

                        <a className="login-link" href="/login">
                            Login
                        </a>

                        <a className="signup-btn" href="/sign-up">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
         </>
    );
};

export default Navbar;