import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Home
import Home from "./pages/Home";

// Pages
import Magazine from "./pages/Magazine";
import Articles from "./pages/Articles";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import Leadership from "./pages/Leadership";
import Interviews from "./pages/Interviews";
import Startup from "./pages/Startup";
import Finance from "./pages/Finance";
import News from "./pages/News";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MAGAZINE */}
        <Route path="/magazine" element={<Magazine />} />

        {/* ARTICLES */}
        <Route path="/articles" element={<Articles />} />

        {/* BUSINESS */}
        <Route path="/business" element={<Business />} />

        {/* TECHNOLOGY */}
        <Route path="/technology" element={<Technology />} />

        {/* LEADERSHIP */}
        <Route path="/leadership" element={<Leadership />} />

        {/* ALSO SUPPORT /leaders */}
        <Route path="/leaders" element={<Leadership />} />

        {/* INTERVIEWS */}
        <Route path="/interviews" element={<Interviews />} />

        {/* STARTUP */}
        <Route path="/startup" element={<Startup />} />

        {/* FINANCE */}
        <Route path="/finance" element={<Finance />} />

        {/* NEWS */}
        <Route path="/news" element={<News />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SUBSCRIBE */}
        <Route path="/subscribe" element={<Subscribe />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;