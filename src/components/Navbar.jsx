import { useState } from "react";
import "./Navbar.css";


function Navbar() {

  // useState hook holds the open/closed state of the mobile navigation menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle handler function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked (good UX for mobile navigation)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Aloke Shaw</div>
      
      {/* Click event handler in React uses camelCase `onClick` */}

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>
      
      {/* Conditional class names based on React state */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#achievements" onClick={closeMenu}>Achievements</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
