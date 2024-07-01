import React from 'react';
import Yubi from '../images/YUBI CAT LOGO.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Yubi</h3>
                    <p>Welcome to the world of Yubi, a revolutionary digital currency designed for the meme-loving community and beyond.</p>
                </div>
                <div className="footer-section">
                    <img src={Yubi} alt="Yubi Logo" className="footer-logo" />
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>
                        <a href="https://google.com" target='__blank'>Facebook</a> | <a href="https://google.com" target='__blank'>Twitter</a> | <a href="https://google.com" target='__blank'>Instagram</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Yubi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
