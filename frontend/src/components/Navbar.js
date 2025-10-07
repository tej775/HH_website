// import {Link} from 'react-router-dom'
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // controls mobile menu

//   const toggleMenu = () => setOpen(!open);

//   return (
//     <nav className="navbar p-0" style={{ backgroundColor: "maroon" }}>
//       <div
//         className="container-fluid d-flex flex-column align-items-center"
//         style={{ minHeight: "120px" }}
//       >
//         {/* Top Row: Logo + Text + Hamburger */}
//         <div className="d-flex w-100 align-items-center">
//           {/* Logo */}
//           <img
//             src="./images/hhlogo.png"
//             alt="Logo"
//             width="70"
//             height="70"
//             className="me-3"
//           />

//           {/* Heading & Subtext */}
//           <div className="d-flex flex-column text-center flex-grow-1">
//             <h1 className="m-0 fw-bold text-white" style={{ fontSize: "1.2rem" }}>
//               HELPING HANDS
//             </h1>
//             <p className="m-0 text-white" style={{ fontSize: "0.9rem" }}>
//               RGUKT-NUZVID
//             </p>
//             <p className="m-0 text-white" style={{ fontSize: "0.8rem" }}>
//               A Students's Initiative - An Abode of Service
//             </p>
//             <p className="m-0 text-white" style={{ fontSize: "0.75rem" }}>
//               (Regd No. 313/2019 under the A.P. Societies Registration Act, 2001)
//             </p>
//           </div>

//           {/* Hamburger button only on small screens */}
//           <button
//             className="navbar-toggler d-md-none ms-auto mt-0"
//             type="button"
//             onClick={toggleMenu}
//             style={{ outline: "none", boxShadow: "none" }}
//           >
//             <span
//               className="navbar-toggler-icon"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
//               }}
//             ></span>
//           </button>
//         </div>

//         {/* Nav Links */}
//         <div
//           className={`w-100 mt-2 ${open ? "d-block" : "d-none"} d-md-flex`}
//           style={{ backgroundColor: "white", borderRadius: "3px", padding: "10px 30px" }}
//         >
//           <ul className="navbar-nav d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/about">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
//                 Departments
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/events">
//                 Events
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/gallery">
//                 Gallery
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/ourTeam">
//                 Our Team
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/certificate">
//                Certificate
//               </Link>
//             </li>
//             <li className="nav-item mx-2 my-1">
//               <Link className="btn text-white" style={{ backgroundColor: "#800000" }} to="/donateUs">
//                 Donate Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false); // controls mobile menu
//   const [deptOpen, setDeptOpen] = useState(false); // controls departments dropdown

//   const toggleMenu = () => setOpen(!open);

//   return (
//     <nav className="navbar p-0" style={{ backgroundColor: "maroon" }}>
//       <div
//         className="container-fluid d-flex flex-column align-items-center"
//         style={{ minHeight: "120px" }}
//       >
//         {/* Top Row: Logo + Text + Hamburger */}
//         <div className="d-flex w-100 align-items-center">
//           {/* Logo */}
//           <img
//             src="./images/hhlogo.png"
//             alt="Logo"
//             width="70"
//             height="70"
//             className="me-3"
//           />

//           {/* Heading & Subtext */}
//           <div className="d-flex flex-column text-center flex-grow-1">
//             <h1 className="m-0 fw-bold text-white" style={{ fontSize: "1.2rem" }}>
//               HELPING HANDS
//             </h1>
//             <p className="m-0 text-white" style={{ fontSize: "0.9rem" }}>
//               RGUKT-NUZVID
//             </p>
//             <p className="m-0 text-white" style={{ fontSize: "0.8rem" }}>
//               A Students's Initiative - An Abode of Service
//             </p>
//             <p className="m-0 text-white" style={{ fontSize: "0.75rem" }}>
//               (Regd No. 313/2019 under the A.P. Societies Registration Act, 2001)
//             </p>
//           </div>

//           {/* Hamburger button only on small screens */}
//           <button
//             className="navbar-toggler d-md-none ms-auto mt-0"
//             type="button"
//             onClick={toggleMenu}
//             style={{ outline: "none", boxShadow: "none" }}
//           >
//             <span
//               className="navbar-toggler-icon"
//               style={{
//                 backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
//               }}
//             ></span>
//           </button>
//         </div>

//         {/* Nav Links */}
//         <div
//           className={`w-100 mt-2 ${open ? "d-block" : "d-none"} d-md-flex`}
//           style={{
//             backgroundColor: "white",
//             borderRadius: "3px",
//             padding: "10px 30px",
//           }}
//         >
//           <ul className="navbar-nav d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/about">
//                 About Us
//               </Link>
//             </li>

//             {/* Departments dropdown */}
//             <li
//               className="nav-item dropdown mx-2 my-1 position-relative"
//               onMouseEnter={() => setDeptOpen(true)}
//               onMouseLeave={() => setDeptOpen(false)}
//             >
//               <button
//                 className="nav-link fw-bold dropdown-toggle"
//                 style={{
//                   color: "maroon",
//                   background: "transparent",
//                   border: "none",
//                 }}
//                 onClick={() => setDeptOpen(!deptOpen)}
//               >
//                 Departments
//               </button>

//               {deptOpen && (
//                 <ul
//                   className="dropdown-menu show"
//                   style={{
//                     display: "block",
//                     position: "absolute",
//                     top: "100%",
//                     left: "0",
//                     backgroundColor: "white",
//                     border: "1px solid #ccc",
//                     borderRadius: "5px",
//                     zIndex: 10,
//                     color: "maroon",
                    
//                   }}
//                 >
//                   <li>
//                     <Link className="dropdown-item" to="/healthcare">
//                       HealthCare
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/internalcare">
//                       InternalCare
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/innovativeandinformative">
//                       Innovative & Informative
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/outsidecharity">
//                       Outside Charity
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/publicrelations">
//                       Public Relations
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/events">
//                 Events
//               </Link>
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/gallery">
//                 Gallery
//               </Link>
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/ourTeam">
//                 Our Team
//               </Link>
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link
//                 className="nav-link fw-bold"
//                 style={{ color: "maroon" }}
//                 to="/certificate"
//               >
//                 Certificate
//               </Link>
//             </li>

//             <li className="nav-item mx-2 my-1">
//               <Link
//                 className="btn text-white"
//                 style={{ backgroundColor: "#800000" }}
//                 to="/donateUs"
//               >
//                 Donate Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar p-0" style={{ backgroundColor: "maroon" }}>
      <div
        className="container-fluid d-flex flex-column align-items-center"
        style={{ minHeight: "120px" }}
      >
        {/* Top Row: Logo + Heading + Hamburger */}
        <div className="d-flex w-100 align-items-center">
          <img
            src="./images/hhlogo.png"
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
                  stroke-miterlimit='10' stroke-width='2' 
                  d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
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
            padding: "10px 30px",
          }}
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
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/gallery">
                Gallery
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/ourTeam">
                Our Team
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="nav-link fw-bold" style={{ color: "maroon" }} to="/certificate">
                Certificate
              </Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link
                className="btn text-white"
                style={{ backgroundColor: "#800000" }}
                to="/donateUs"
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
