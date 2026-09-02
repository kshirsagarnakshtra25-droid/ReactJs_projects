function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "React Router"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST API", "Axios"]
    },
    {
      category: "Database",
      items: ["MongoDB", "MongoDB Atlas", "DBMS", "SQL Basics"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <p>02 — SKILLS</p>
        <h2>Technologies I work with</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.category}>

            <h3>{skill.category}</h3>

            <div className="skill-list">

              {skill.items.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;