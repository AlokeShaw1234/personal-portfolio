import "./Projects.css";

// INTERVIEW QUESTION: What are the benefits of data-driven rendering in React?
// ANSWER: 
// 1. Separation of concerns: Data is kept separate from presentation logic.
// 2. Scalability: Adding a new project only requires adding an object to `projectsData`, without duplicating HTML markup.
// 3. Maintainability: Bug fixes or style changes in the card layout automatically reflect across all rendered cards.

const projectsData = [
  {
    id: "analog-clock",
    image: "/Analog Clock.jpeg",
    title: "Analog Clock",
    description: "A real-time analog clock with a sleek UI based on standard web time functions.",
    features: ["Real-time", "Responsive UI"],
    githubUrl: " https://github.com/AlokeShaw1234/Analog-Clock",
    demoUrl: "https://analog-clock-one-sepia.vercel.app/"
  },
  {
    id: "calculator",
    image: "/Calculator.jpeg",
    title: "Calculator",
    description: "A functional calculator app covering basic arithmetic operations with an intuitive layout.",
    features: ["Math Logic", "Clean UI"],
    githubUrl: "https://github.com/AlokeShaw1234/Calculator",
    demoUrl: "https://calculator-one-red-40.vercel.app/"
  },
  {
    id: "stopwatch",
    image: "/StopWatch.jpeg",
    title: "Stopwatch",
    description: "A highly accurate stopwatch with start, stop, and reset functionalities.",
    features: ["Precise Timing", "JS Timers"],
    githubUrl: "https://github.com/AlokeShaw1234/Stop-Watch",
    demoUrl: "https://stop-watch-lyart-eight.vercel.app/"
  },
  {
    id: "tic-tac-toe",
    image: "/tictactoe.jpeg",
    title: "Tic Tac Toe Game",
    description: "A classic two-player Tic Tac Toe game highlighting DOM manipulation and matrix logic.",
    features: ["Win Logic", "Interactive Grid"],
    githubUrl: "https://github.com/AlokeShaw1234/tic-tac-toe-",
    demoUrl: "https://tic-tac-toe-3d8d.vercel.app/"
  },
  {
    id: "weather",
    image: "/Weather App.jpeg",
    title: "Weather App",
    description: "A simple weather web application that provides real-time weather updates for any location.",
    features: ["Weather Updates", "Simple UI"],
    githubUrl: "https://github.com/AlokeShaw1234/Weather-App",
    demoUrl: "https://weather-app-theta-mauve-49.vercel.app/"
  },
  {
    id: "bloggy",
    image: "/Bloggy.jpeg",
    title: "Bloggy",
    description: "A simple full-stack blogging platform where users can create, edit, delete, and view detailed blog posts.",
    features: ["Create Posts", "CRUD Operations"],
    githubUrl: "https://github.com/AlokeShaw1234/Blogy",
    demoUrl: "https://blogy-2.onrender.com/posts"
  },
  {
    id: "student",
    image: "/student.jpeg",
    title: "Student Management System",
    description: "A menu-driven C++ application for managing student records using Object-Oriented Programming principles",
    features: ["Grade calculation", "OOPs based"],
    githubUrl: "https://github.com/AlokeShaw1234/Student-Management-System",
    demoUrl: "https://github.com/AlokeShaw1234/Student-Management-System"
  },
  {
    id: "library",
    image: "/library.jpeg",
    title: "Library Management System",
    description: "A menu-driven C++ application for managing books,members,issuing,returning,and tracking records.",
    features: ["Book management", "OOPs based"],
    githubUrl: "https://github.com/AlokeShaw1234/Library-Management-System",
    demoUrl: "https://github.com/AlokeShaw1234/Library-Management-System"
  },
  {
    id: "personal portfolio",
    image: "/portfolio.jpeg",
    title: "Personal Portfolio",
    description: "A modern and responsive personal portfolio website build using HTML,CSS and JavaScript.",
    features: ["Frontend","Projects", "Skills"],
    githubUrl: "https://github.com/AlokeShaw1234/portfolio",
    demoUrl: "https://portfolio-tawny-eta-qodzy055ws.vercel.app/"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        {/* Dynamic rendering of project cards */}
        {projectsData.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image}/>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="about-project">{project.description}</p>
              
              <div className="features">
                {project.features.map((feature, idx) => (
                  <span key={idx}>{feature}</span>
                ))}
              </div>
              
              <div className="card-buttons">
                <a href={project.githubUrl} className="btn primary-btn btn-small" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i> GitHub
                </a>
                <a href={project.demoUrl} className="btn secondary-btn btn-small" target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
