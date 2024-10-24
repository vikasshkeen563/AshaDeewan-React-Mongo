import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 85) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'on-scroll' : ''}`} id="header">
            <nav className="navbar container">
                <Link to="/" className="brand">
                    <img className="logo-image" src="./Assets/img/logo.png" alt="Logo" />
                </Link>
                <div className={`burger ${isMenuOpen ? 'is-active' : ''}`} id="burger" onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className={`menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                        <li className="dropdown">
                            <Link to="/product" className="menu-link">Product</Link>
                            <div className="dropdown-content">
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Wooden%20Items" className="menu-link">Wooden Items</Link>
                                </div>
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Marble%20Items" className="menu-link">Marble Items</Link>
                                </div>
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Steel%20Utensils" className="menu-link">Steel Utensils</Link>
                                </div>
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Copper%20Utensils" className="menu-link">Copper Utensils</Link>
                                </div>
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Bags" className="menu-link">Bags</Link>
                                </div>
                                <div className="sub-dropdown">
                                    <Link to="/product?category=Clothes" className="menu-link">Clothes</Link>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item"><Link to="/about" className="menu-link">About Us</Link></li>
                    </ul>
                </div>
                <Link to="/form" className="menu-block">Get In Touch</Link>
            </nav>
        </header>
    );
}
