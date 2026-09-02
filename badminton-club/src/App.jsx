import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Coaches from "./pages/Coaches";
import Players from "./pages/Players";
import Tournaments from "./pages/Tournaments";
import Gallery from "./pages/Gallery";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/training" element={<Training />} />

      <Route path="/coaches" element={<Coaches />} />

      <Route path="/players" element={<Players />} />

      <Route path="/tournaments" element={<Tournaments />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/membership" element={<Membership />} />

      <Route path="/contact" element={<Contact />} />

      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: "100vh",
              background: "#080b0a",
              color: "#f4f7f5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "90px",
                fontWeight: "900",
                color: "#c6ff00",
                lineHeight: "1",
              }}
            >
              404
            </div>

            <h1
              style={{
                marginTop: "20px",
                fontSize: "35px",
              }}
            >
              COURT NOT FOUND.
            </h1>

            <p
              style={{
                marginTop: "12px",
                color: "#89938e",
              }}
            >
              Looks like this page went out of bounds.
            </p>

            <a
              href="/"
              style={{
                marginTop: "30px",
                padding: "15px 25px",
                background: "#c6ff00",
                color: "#080b0a",
                fontWeight: "900",
                letterSpacing: "0.12em",
              }}
            >
              BACK TO ARENA
            </a>
          </div>
        }
      />
    </Routes>
  );
}

export default App;