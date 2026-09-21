import "./Footer.css";

// 1. `noopener` prevents the new page from accessing the opening page's `window.opener` object, protecting against Tabnabbing phishing attacks.
// 2. `noreferrer` prevents sending referrer info to the new page for privacy and security.

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="mailto:alokes387@gmail.com">Gmail</a>
        <a href="https://github.com/alokeshaw1234" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aloke-shaw-b68290289/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} Aloke Shaw. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
