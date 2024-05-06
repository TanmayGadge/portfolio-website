import React from "react";
import logo from "../assets/tanmay-logo.jpg";
import "./navbar.css";
import intro from "../assets/Black Technology LinkedIn Banner (1).png";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo"></img>
          <h1>Hi, My name is Tanmay!</h1>
        </div>

        <div className="navbar-right">
          <p>About</p>
          <p>Contact</p>
          <p>Projects</p>
        </div>
      </nav>

      <main>
        <div className="intro-container">
          <img src={intro} className="intro"></img>
        </div>
      </main>

      <footer className="footer">
        Thanks for visiting!
      </footer>
    </div>
  );
}

export default Navbar;
