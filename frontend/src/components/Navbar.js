import {Link} from 'react-router-dom'
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // controls mobile menu

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar p-0" style={{ backgroundColor: "maroon" }}>
      <div
        className="container-fluid d-flex flex-column align-items-center"
        style={{ minHeight: "120px" }}
      >
        {/* Top Row: Logo + Text + Hamburger */}
        <div className="d-flex w-100 align-items-center">
          {/* Logo */}
          <img
            src="./images/hhlogo.png"
            alt="Logo"
            width="70"
            height="70"
            className="me-3"
          />

          {/* Heading & Subtext */}
          <div className="d-flex flex-column text-center flex-grow-1">
            <h1 className="m-0 fw-bold text-white" style={{ fontSize: "1.2rem" }}>
              HELPING HANDS
            </h1>
            <p className="m-0 text-white" style={{ fontSize: "0.9rem" }}>
              RGUKT-NUZVID
            </p>
            <p className="m-0 text-white" style={{ fontSize: "0.8rem" }}>
              A Students's Initiative - An Abode of Service
            </p>
            <p className="m-0 text-white" style={{ fontSize: "0.75rem" }}>
              (Regd No. 313/2019 under the A.P. Societies Registration Act, 2001)
            </p>
          </div>

          {/* Hamburger button only on small screens */}
          <button
            className="navbar-toggler d-md-none ms-auto mt-0"
            type="button"
            onClick={toggleMenu}
            style={{ outline: "none", boxShadow: "none" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
              }}
            ></span>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`w-100 mt-2 ${open ? "d-block" : "d-none"} d-md-flex`}
          style={{ backgroundColor: "white", borderRadius: "3px", padding: "10px 30px" }}
        >
          <ul className="navbar-nav d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} href="#">
                Departments
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
                Events
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
                Our Team
              </Link>
            </li>
            <li className="nav-item mx-2 my-1">
              <Link className="btn text-white" style={{ backgroundColor: "#800000" }} to="/">
                Donate Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
