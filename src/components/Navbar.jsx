import { useState } from "react";
import "./Navbar.css";

// INTERVIEW QUESTION: How is state managed in React vs Vanilla JS?
// ANSWER: In Vanilla JS, we use `document.getElementById('menu-icon').addEventListener('click', ...)` (DOM manipulation).
// In React, we use state (`useState`). When state changes, React automatically re-renders the component to update the UI (Declarative UI paradigm).

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
      
      {/* INTERVIEW NOTE: Conditional class names based on React state */}
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