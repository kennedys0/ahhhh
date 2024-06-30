import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Yubi from '../images/YUBI CAT LOGO.png';
import '../Styles/main.css'

function Navbar() {
    const navRef = React.useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <div className="logo">
                <img src={Yubi} alt="Yubi Cat Logo" />
                <h1>Yubi</h1>
            </div>
            <nav ref={navRef}>
                <Link
                    className="nav-link"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={showNavbar}
                >
                    Home
                </Link>
                <Link
                    className="nav-link"
                    to="tokenomics"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={showNavbar}
                >
                    Tokenomics
                </Link>
                <Link
                    className="nav-link"
                    to="presale"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={showNavbar}
                >
                    Presale
                </Link>
                <Link
                    className="nav-link"
                    to="faq"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={showNavbar}
                >
                    FAQs
                </Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}
                >
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
