import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="contact-info">
                    <div className="info-item">
                        <i className="icon-location"></i>
                        <div className="info-item-txt">
                            <h3>Find us</h3>
                            <p>RZ-B-129, PART-1, Roshan Vihar, Najafgarh, South West Delhi, New Delhi-110043</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item-txt">
                            <h3>Call us</h3>
                            <p>+91-8448918276, +91-8743063036</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="icon-mail"></i>
                        <div className="info-item-txt">
                            <h3>Mail us</h3>
                            <p>contact@ashadeewanexports.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-col">
                    <h2>
                        <img src="./Assets/img/logo.png" alt="Asha Deewan Export Logo" />
                        Asha Deewan Export
                    </h2>
                    <p>
                        Unlock the potential of global trade with Asha Deewan Export. Connect with international markets and
                        access high-quality products. Shape the future of import and export with us! 🌐🚀
                    </p>
                    <h4 style={{ marginBottom: '10px', color: 'var(--primary-100)' }}>Follow us</h4>
                    <div className="social-icons">
                        <a href="#" className="icon-facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="icon-twitter"><i className="bx bxl-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/asha.deewan.exports/" className="icon-instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/form">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/product">Our Products</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Subscribe</h3>
                    <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit" className="icon-paper-plane">
                            <i className="bx bxl-telegram" style={{ transform: 'scale(2)' }}></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright © 2024, All Right Reserved Govind Kumar Yadav, powered by <a href="http://nexakreactive.com/" style={{ fontStyle: 'italic', color: 'var(--primary-100)', opacity: 0.8 }}>Vikash Shokeen</a>
                </p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Terms</Link></li>
                    <li><Link to="#">Privacy</Link></li>
                    <li><Link to="#">Policy</Link></li>
                    <li><Link to="/form">Contact</Link></li>
                </ul>
            </div>
        </footer>
    );
}
