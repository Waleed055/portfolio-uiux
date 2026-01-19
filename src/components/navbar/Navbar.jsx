import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar-container">
            <div className="nav-container">
                <div className="navbar-back"></div>
                <div className={`navbar-pill ${isOpen ? 'active' : ''}`}>
                    <div className="navbar-header">
                        <div className="navbar-logo">
                            Waleed Hassan.
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                        </div>
                    </div>

                    <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                        <li><a href="#home" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#services" onClick={closeMenu}>Services</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
