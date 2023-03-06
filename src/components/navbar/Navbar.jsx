import "./navbar.scss";
import "./Logo.png";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
        Frint
        </a>

        <div className="navbar-links">
          <a href="/" className="navbar-link">
            Home
          </a>
          <a href="/about" className="navbar-link">
            Internships
          </a>

          <a href="/about" className="navbar-link">
            About
          </a>
          <a href="/contact" className="navbar-link">
            Contact
          </a>


        </div>

        <div className="navbar-buttons">
          <button className="navbar-button">Sign In</button>
          <button className="navbar-button navbar-button--primary">Get Started For Free     <>
      <FaArrowAltCircleUp style={{ transform: 'rotate(45deg)' }} />
    </></button>
        </div>

        <div className="navbar-toggle" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar-sidebar ${isOpen ? 'navbar-sidebar--open' : ''}`}>
          <a href="/" className="navbar-sidebar-link">
            Home
          </a>
          <a href="/about" className="navbar-sidebar-link">
            About
          </a>
          <a href="/contact" className="navbar-sidebar-link">
            Contact
          </a>

          <div className="navbar-sidebar-buttons">
            
            <button className="navbar-sidebar-button navbar-sidebar-button--primary">Get Started For Free     <>
      <FaArrowAltCircleUp style={{ transform: 'rotate(45deg)' }} />
    </></button>
    
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
