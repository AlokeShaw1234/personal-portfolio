import { useState } from "react";
import "./ContactMe.css";

// INTERVIEW QUESTION: What are Controlled vs Uncontrolled Components in React forms?
// ANSWER: 
// - Controlled Components: Form input values are controlled by React State (`value={formData.name}` + `onChange`). React is the "single source of truth".
// - Uncontrolled Components: Form data is handled directly by the DOM (e.g. using `useRef` to read values when needed).
// Controlled Components are the standard way in React because they allow instant validation, conditional submit enabling, and clean data resetting.

// INTERVIEW QUESTION: Why do we call `e.preventDefault()` in form submission?
// ANSWER: HTML forms refresh the entire web page by default when submitted. Calling `e.preventDefault()` stops the default page reload,
// allowing us to process form data via JavaScript/React (e.g., sending an API request using fetch/axios).

function ContactMe() {
  // Single state object to manage all form fields cleanly
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generic input change handler using computed property names [e.target.name]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop default browser refresh
    console.log("Form Submitted Successfully:", formData);
    
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Hide success message after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>Feel free to reach out for internships or job opportunities.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className='bx bx-envelope'></i>
              <span>alokes387@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className='bx bx-phone'></i>
              <span>+91 6290875910</span>
            </div>
            <div className="contact-item">
              <i className='bx bx-map'></i>
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Form handling via React onSubmit listener */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <button type="submit" className="btn primary-btn submit-btn">
            Send Message <i className='bx bx-send'></i>
          </button>

          {/* Conditional feedback message after submission */}
          {isSubmitted && (
            <p style={{ color: "#4caf50", marginTop: "10px", fontWeight: "600" }}>
              Thank you! Your message has been recorded.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
