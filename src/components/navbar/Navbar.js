import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="navbar">
      <nav className="container">
        <Link to="/" className="logo">
          Eat<span style={{ color: "#EBC287" }}>Now</span>
        </Link>
        <div className="navlinks">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/product" className="link">
            Product
          </Link>
          <Link to="about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
      </nav>
      <div className={openNav ? "mobileNavActive" : "mobileNav"}>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/product" className="link">
          Product
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
