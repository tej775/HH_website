import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
   const location = useLocation();
const isAdminPage = location.pathname.startsWith("/admin");
  
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar p-0" style={{ backgroundColor: "maroon" }}>
      <div
        className="container-fluid d-flex flex-column align-items-center"
        style={{ minHeight: "120px" }}
      >
        {/* Top Row: Logo + Heading + Hamburger */}
        <div className="d-flex w-100 align-items-center" style={{marginBottom:"20px"}}>
          <img
            src={`${process.env.PUBLIC_URL}/images/hhlogo.png`}  

alt="Logo"
            width="70"
            height="70"
            className="me-3"
          />

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

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler d-md-none ms-auto mt-0"
            type="button"
            onClick={toggleMenu}
            style={{ outline: "none", boxShadow: "none" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-linecap='round'
    stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important`,
              }}
            ></span>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`w-100 mt-2 ${open ? "d-block" : "d-none"} d-md-flex`}
          style={{
            backgroundColor: "white",
            borderRadius: "3px",
            position:'relative',
            top:'-13px'
          }}
        >
          <ul className="navbar-nav d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
            <li className="nav-item mx-2 my-1">
              <Link
                className="nav-link fw-bold"
                style={{ color: "maroon", transition: "all 0.3s ease" }}
                to="/"
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "maroon";
                  e.target.style.borderRadius = "5px";
                  e.target.style.padding = "5px 10px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "maroon";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderRadius = "0";
                  e.target.style.padding = "0";
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="nav-link fw-bold"
                style={{ color: "maroon", transition: "all 0.3s ease" }}
                to="/about"
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "maroon";
                  e.target.style.borderRadius = "5px";
                  e.target.style.padding = "5px 10px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "maroon";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderRadius = "0";
                  e.target.style.padding = "0";
                }}
              >
                About Us
              </Link>
            </li>

            {/* Departments dropdown */}
            <li
              className="nav-item dropdown mx-2 my-1 position-relative"
              onMouseEnter={() => setDeptOpen(true)}
              onMouseLeave={() => setDeptOpen(false)}
            >
              <button
                className="nav-link fw-bold dropdown-toggle"
                style={{
                  color: "maroon",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => setDeptOpen(!deptOpen)}
              >
                Departments
              </button>

              {deptOpen && (
                <ul
                  className="dropdown-menu show"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    backgroundColor: "white",
                    border: "2px solid maroon",
                    borderRadius: "8px",
                    zIndex: 10,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  {[
                    { label: "HealthCare", path: "/healthCare" },
                    { label: "InternalCare", path: "/internalCare" },
                    { label: "Innovative & Informative", path: "/innovativeAndInformative" },
                    { label: "Outside Charity", path: "/outsideCharity" },
                    { label: "Public Relations", path: "/publicRelations" },
                  ].map((dept) => (
                    <li key={dept.path}>
                      <Link
                        to={dept.path}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          color: "maroon",
                          fontWeight: "600",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "maroon";
                          e.target.style.color = "white";
                          e.target.style.borderRadius = "5px";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "maroon";
                        }}
                      >
                        {dept.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="nav-link fw-bold"
                style={{ color: "maroon", transition: "all 0.3s ease" }}
                to="/events"
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "maroon";
                  e.target.style.borderRadius = "5px";
                  e.target.style.padding = "5px 10px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "maroon";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderRadius = "0";
                  e.target.style.padding = "0";
                }}
              >
                Events
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="nav-link fw-bold"
                style={{ color: "maroon", transition: "all 0.3s ease" }}
                to="/gallery"
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "maroon";
                  e.target.style.borderRadius = "5px";
                  e.target.style.padding = "5px 10px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "maroon";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderRadius = "0";
                  e.target.style.padding = "0";
                }}
              >
                Gallery
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              {isAdminPage && (
                <Link
                  className="nav-link fw-bold"
                  style={{ color: "maroon", transition: "all 0.3s ease" }}
                  to="/admin/ourTeam"
                  onMouseEnter={(e) => {
                    e.target.style.color = "white";
                    e.target.style.backgroundColor = "maroon";
                    e.target.style.borderRadius = "5px";
                    e.target.style.padding = "5px 10px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "maroon";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderRadius = "0";
                    e.target.style.padding = "0";
                  }}
                >
                  Our Team
                </Link>
              )}
              {!isAdminPage && (
                <Link
                  className="nav-link fw-bold"
                  style={{ color: "maroon", transition: "all 0.3s ease" }}
                  to="/ourTeam"
                  onMouseEnter={(e) => {
                    e.target.style.color = "white";
                    e.target.style.backgroundColor = "maroon";
                    e.target.style.borderRadius = "5px";
                    e.target.style.padding = "5px 10px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "maroon";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderRadius = "0";
                    e.target.style.padding = "0";
                  }}
                >
                  Our Team
                </Link>
              )}
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="nav-link fw-bold"
                style={{ color: "maroon", transition: "all 0.3s ease" }}
                to="/certificate"
                onMouseEnter={(e) => {
                  e.target.style.color = "white";
                  e.target.style.backgroundColor = "maroon";
                  e.target.style.borderRadius = "5px";
                  e.target.style.padding = "5px 10px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "maroon";
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderRadius = "0";
                  e.target.style.padding = "0";
                }}
              >
                Certificate
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="btn text-white"
                style={{ backgroundColor: "#800000", transition: "all 0.3s ease" }}
                to="/donateUs"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#600000";
                  e.target.style.border = "2px solid white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#800000";
                  e.target.style.border = "none";
                }}
              >
                Donate Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
