import "./Achievements.css";

//  definining all the project structure once and map over a data array dynamically.

const achievementsData = [
  {
    id: "Leetcode",
    title: "125+ Problems",
    description: "Consistently solving DSA problems on LeetCode to improve algorithmic thinking.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZBlO8VkafUHgX_6oXE5hw4QYyE8fMSRf4lj1O81Z1A&s",
    imageStyle: { width: "35px", filter: "invert(1)" }
  },
  {
    id: "TUF",
    title: "280+ Problems on TUF",
    description: "Mastering core data structures and patterns and questions guided by Take U Forward.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3q6qz7h9EZjxte_y03RQ0Jx4dEqr5xmiH8y7nhYoExwJ_Zb4eXvm4a4&s=10",
    imageStyle: { width: "35px", filter: "invert(1)" }
  },
  {
    id: "fullstack",
    title: "2+ Full-Stack Projects",
    description: "Successfully designed, developed, and deployed scalable MERN stack web applications.",
    iconClass: "bx bx-code-block"
  },
  {
    id: "Hackathons",
    title: "Hackathons & Open Source",
    description: "Active participant in tech hackathons and continuous learner of modern web tools.",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR880z2QOUG-Jq40QLuSNVQYCe9pwMfIABTLiJrq_JcQw&s=10",
    imageStyle: { width: "35px", filter: "invert(1)" }
  }
];

function Achievements() {
  return (
    <section id="achievements">
      <h2>Achievements & Milestones</h2>
      <div className="achievements-grid">
        {achievementsData.map((item) => (
          <div key={item.id} className="achievement-card">
            <div className="achievement-icon">
              {item.imageSrc ? (
                <img src={item.imageSrc} alt={item.title} style={item.imageStyle} />
              ) : (
                <i className={item.iconClass}></i>
              )}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
