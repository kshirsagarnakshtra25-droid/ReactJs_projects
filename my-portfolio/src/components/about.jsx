function About() {
    return (
        <section id="about" className="section">

            <div className="section-heading">
                <p>01 — ABOUT ME</p>
                <h2>A little about me</h2>
            </div>

            <div className="about-grid">

                <div className="about-main">

                    <h3>
                        I'm a Prompt Engineer Intern focused on
                        AI, technology and practical software development.
                    </h3>

                    {/* Current Role Highlight */}
                    <div className="current-role-card">

                        <div className="role-indicator">
                            <span className="status-dot"></span>
                        </div>

                        <div className="role-content">
                            <span className="role-label">
                                CURRENTLY WORKING
                            </span>

                            <h4>
                                Prompt Engineer Intern
                            </h4>

                            <p>
                                Intellisys IT Solution Pvt. Ltd.
                            </p>
                        </div>

                        <span className="role-badge">
                            Internship
                        </span>

                    </div>

                    <p>
                        I recently completed my B.Sc. in Computer Science and I'm
                        currently working as a Prompt Engineer Intern at
                        Intellisys IT Solution Pvt. Ltd.
                    </p>

                    <p>
                        In my current role, I'm gaining practical exposure to
                        prompt engineering, AI tools and techniques for improving
                        interactions with AI systems.
                    </p>

                    <p>
                        Alongside my internship, I'm strengthening my software
                        development skills through hands-on work with JavaScript,
                        React, Node.js, Express and MongoDB.
                    </p>

                    <p>
                        My goal is to build a career at the intersection of
                        software development and AI while continuously learning
                        and working on meaningful real-world projects.
                    </p>

                </div>

                <div className="about-cards">

                    <div className="info-card">
                        <span>01</span>
                        <h4>Frontend</h4>
                        <p>React, JavaScript, HTML, CSS</p>
                    </div>

                    <div className="info-card">
                        <span>02</span>
                        <h4>Backend</h4>
                        <p>Node.js, Express, REST APIs</p>
                    </div>

                    <div className="info-card">
                        <span>03</span>
                        <h4>Database</h4>
                        <p>MongoDB and database fundamentals</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;