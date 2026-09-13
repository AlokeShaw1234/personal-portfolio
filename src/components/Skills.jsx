import "./Skills.css";

// INTERVIEW QUESTION: Why do we use .map() to render lists in React?
// ANSWER: `.map()` creates a new array of JSX elements from a JS data array. It promotes clean code, reusability, and dynamic UI rendering.

// INTERVIEW QUESTION: What is the `key` prop and why is it important in React?
// ANSWER: React uses the `key` prop to identify which items in a list have changed, been added, or removed. 
// It allows React's Virtual DOM diffing algorithm (Reconciliation) to re-render only modified items efficiently.

const skillsData = [
  {
    id: "languages",
    category: "Languages",
    icon: "bx bx-code-alt",
    items: [
      { name: "C", iconClass: "devicon-c-plain colored" },
      { name: "C++", iconClass: "devicon-cplusplus-plain colored" }
    ]
  },
  {
    id: "web-dev",
    category: "Web Development",
    icon: "bx bx-desktop",
    items: [
      { name: "HTML", iconClass: "devicon-html5-plain colored" },
      { name: "CSS", iconClass: "devicon-css3-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "React.js", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express.js", iconClass: "devicon-express-original", style: { color: "#fff" } },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    icon: "bx bx-data",
    items: [
      { name: "SQL", iconClass: "devicon-mysql-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" }
    ]
  },
  {
    id: "core-cs",
    category: "Core CS",
    icon: "bx bx-brain",
    items: [
      { name: "Data Structures & Algorithms", iconClass: "bx bx-network-chart" },
      { name: "Object Oriented Programming", iconClass: "bx bx-cuboid" },
      { name: "Database Management System", iconClass: "bx bx-server" },
      { name: "Operating Systems", iconClass: "bx bx-cog" }
    ]
  },
  {
    id: "tools",
    category: "Tools",
    icon: "bx bx-wrench",
    items: [
      { name: "Git & Github", iconClass: "devicon-git-plain colored" },
      { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
      { name: "Vercel", iconClass: "bx bxl-sketch" },
      { name: "Render", iconClass: "bx bxl-sketch"}
    ]
  }
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {/* Rendering category cards dynamically using .map() */}
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.id} className="skill-card">
            <h4>
              <i className={skillGroup.icon}></i> {skillGroup.category}
            </h4>
            <ul>
              {/* Nested array mapping for individual skill items */}
              {skillGroup.items.map((skill, index) => (
                <li key={index}>
                  <i className={skill.iconClass} style={skill.style}></i> {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
