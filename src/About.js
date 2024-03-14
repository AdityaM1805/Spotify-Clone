import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header>
        <h1>About Us</h1>
      </header>

      <Link to="/">
        <div
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            textDecoration: "none",
            color: "black",
          }}
        >
          Home
        </div>
      </Link>
    </>
  );
};

export default About;
