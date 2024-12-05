import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaArrowRight } from 'react-icons/fa';
import "../css/style.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">
                    <FaBook className="me-3" />
                    oNLINE cOURSES
                </h2>
            </a>
            <button
                type="button"
                className="navbar-toggler me-4"
                onClick={toggleNavbar}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="courses.html" className="nav-item nav-link">Courses</a>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            Pages
                        </a>
                        <ul className="dropdown-menu fade-down m-0" aria-labelledby="navbarDropdown">
                            <li><a href="team.html" className="dropdown-item">Our Team</a></li>
                            <li><a href="testimonial.html" className="dropdown-item">Testimonial</a></li>
                        </ul>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <a href="./auth.html" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                    Join Now
                    <FaArrowRight className="ms-3" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
