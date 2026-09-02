function Hero() {
    return (
        <section id="home" className="hero section">

            <div className="hero-content">

                <p className="eyebrow">
                    PROMPT ENGINEER INTERN • INTELLISYS IT SOLUTION PVT. LTD.
                </p>

                <h1>
                    Hi, I'm <span>Nakshtra Kshirsagar.</span>
                </h1>

                <h2>
                    I build modern web experiences with React.
                </h2>

                <p className="hero-description">
                    I'm a recent B.Sc. Computer Science graduate building my skills
                    in React, JavaScript, Node.js, MongoDB and modern web development.
                    I enjoy turning ideas into clean, responsive and useful web
                    applications.
                </p>
                
                <div className="current-role">
                    <span className="status-dot"></span>
                    Currently working as a Prompt Engineer Intern
                </div>


                <div className="hero-buttons">
                    <a href="#projects" className="primary-btn">
                        View My Work
                    </a>

                    <a href="#contact" className="secondary-btn">
                        Let's Connect
                    </a>
                </div>

                <div className="social-links">

                    <a
                        href="https://github.com/kshirsagarnakshtra25-droid"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nakshtra-kshirsagar-205117429/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>

                </div>

            </div>

            <div className="hero-image-wrapper">

                <div className="hero-glow"></div>

                <div className="profile-card">

                    <img
                        src="/profile.jpeg"
                        alt="Nakshtra Kshirsagar"
                    />

                    <div className="profile-status">
                        <span></span>
                        Open to opportunities
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;