import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Nakshtra Kshirsagar. Built with React.
        </p>
      </footer>
    </div>
  );
}

export default App;