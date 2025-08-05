import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logooo.png"; // Make sure this path is correct

const LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="brand">
          <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
            <img src={logo} alt="Samavardhak Logo" className="logo" />
            <span className="name"></span>
          </Link>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {LINKS.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={location.pathname === path ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {name}
                  <span className="underline" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
      </div>

      <nav
        className={`mobile-menu ${open ? "visible" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          {LINKS.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
