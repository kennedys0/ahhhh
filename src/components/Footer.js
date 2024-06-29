import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>
                        <a href="https://google.com" target='__blank'>Facebook</a> | <a href="https://google.com" target='__blank'>Twitter</a> | <a href="https://google.com" target='__blank'>Instagram</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
