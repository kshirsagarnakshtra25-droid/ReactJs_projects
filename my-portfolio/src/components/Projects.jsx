function Projects() {
  const projects = [
    {
      number: "01",
      title: "CineBook",
      type: "Full Stack Movie Booking Application",
      description:
        "A full-stack movie booking application where users can explore movies, view details and follow a booking workflow. Built while learning real-world frontend and backend integration.",
      technologies:
        "React • JavaScript • Node.js • Express • MongoDB • JWT • Axios",
      github: "https://github.com/kshirsagarnakshtra25-droid/ReactJs_projects.git",
      live: "#"
    },

    {
      number: "02",
      title: "Entrepreneur Insight",
      type: "Responsive Magazine Website",
      description:
        "A modern magazine-style website focused on entrepreneurship, business stories, articles and trending topics. Designed with a strong visual layout and responsive interface.",
      technologies:
        "HTML • CSS • JavaScript • Responsive Design",
      github: "https://github.com/kshirsagarnakshtra25-droid/javascript_projects/tree/main/Entrepreneur%20Website",
      live: "#"
    },

    {
      number: "03",
      title: "React Learning Projects",
      type: "Frontend Development",
      description:
        "A collection of smaller React applications created to strengthen practical understanding of components, props, state, hooks, routing, APIs and reusable UI.",
      technologies:
        "React • JavaScript • useState • useEffect • useContext • React Router",
      github: "https://github.com/",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>04 — PROJECTS</p>
        <h2>Things I've built</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies}
            </div>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;