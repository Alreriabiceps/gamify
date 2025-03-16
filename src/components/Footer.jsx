import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Gamify Educational Assessment System. All rights reserved.</p>
            <p>Made with 💖 by Fatima Valenzuela</p>
        </footer>
    );
};

export default Footer;