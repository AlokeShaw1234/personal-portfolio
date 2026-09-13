// App.jsx acts as the top-level parent component that composes smaller, independent, reusable child components.

// use of self closing tags because In JSX, if a component does not contain nested child elements between opening and closing tags, 
// using self-closing tags (<Navbar /> instead of <Navbar></Navbar>) is cleaner, standard React convention, and easier to read.


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;