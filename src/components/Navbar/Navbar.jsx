import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Manage mobile menu state

  const angleBracket = {
    fontSize: '30px',
    display: "inline",
    color: 'var(--primary-dark)'
  };

  const slashBracket = {
    color: 'var(--primary-dark)'
  };

  // Toggle mobile menu open/close state
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <span style={angleBracket}>&lt;</span>
          Kebal
          <span style={slashBracket}>/</span>
          Khadka
          <span style={angleBracket}>&gt;</span>
        </div>
        <div className="list-items">
          <ul>
            <a href="#about"><li>About</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>

        <div className="hamburger" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} {/* Toggle between icons */}
        </div>

        <div className={`mobile-items ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul>
            <a href="#about"><li onClick={handleMobileMenuToggle}>About</li></a>
            <a href="#skills"><li onClick={handleMobileMenuToggle}>Skills</li></a>
            <a href="#projects"><li onClick={handleMobileMenuToggle}>Projects</li></a>
           <a href="#contact"><li onClick={handleMobileMenuToggle}>Contact</li></a> 
          </ul>
        </div>

        <div className="links">
          <a href="https://github.com/kebalkhadka" target='blank'>
          <button>Github profile</button>
          </a>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
