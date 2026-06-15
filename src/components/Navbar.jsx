import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import JesseHeader from "../assets/images/jesseNice.jpeg";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavCollapsed(true);
      }
    };

    const handleScroll = () => {
      setIsNavCollapsed(true);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavCollapse = (e) => {
    e.stopPropagation();
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleImageClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1500); // Match the animation duration
  };

  const handleLinkClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" ref={navRef}>
      <div className="container-fluid">
        <img 
          src={JesseHeader} 
          alt="Jesse Sheehan with inverse colors" 
          className={`navbar-brand nav-img ${isSpinning ? 'spinAndColor' : ''}`}
          onClick={handleImageClick}
        />
        <Link className="navbar-brand" to="/">Jesse Sheehan</Link>
        <button 
          className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
          type="button" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;