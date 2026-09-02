function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          NK<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          Resume ↗
        </a>

      </div>
    </header>
  );
}

export default Navbar;