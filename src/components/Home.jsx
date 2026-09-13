import { useState, useEffect } from "react";
import "./Home.css";

// INTERVIEW QUESTION: What is useEffect and why do we need a cleanup function?
// ANSWER: `useEffect` performs side-effects (like timers, API calls, event listeners) after component rendering.
// Returning a cleanup function (`clearInterval(timer)`) is essential to prevent memory leaks when the component unmounts or re-renders.

function Home() {
  const roles = ["Full Stack Developer", "C++ Programmer", "Problem Solver", "MERN Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to cycle through roles every 2.5 seconds
    const timer = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    // INTERVIEW CLEANUP NOTE: Return cleanup function to clear interval on unmount
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hi, I'm <span className="highlight">Aloke Shaw</span></h1>
          
          {/* Dynamically rendered state value */}
          <h3>I'm a <span className="highlight-role">{roles[currentRoleIndex]}</span></h3>
          
          <p>I build efficient, scalable, and real-world applications focused on solving meaningful problems.</p>
          
          <div className="btn-group">
            <a href="Aloke Shaw Resume.pdf" download className="btn primary-btn">
              Resume <i className='bx bx-download'></i>
            </a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
        
        <div className="home-image">
          <img src="Aloke photo.jpeg" alt="Aloke Shaw" className="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
