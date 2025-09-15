import {NavLink, Link } from "react-router-dom"
import CTA from "./CTA"
export default function Navbar(){
    return(
        <>
          <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.jpg"   
            alt="Logo"
            className="img-fluid rounded-circle"
            style={{ height: "5vw", width: "auto" }}
          />
          <span className="ms-2 fw-bold" style={{color : "#037c3e"}}>Federal Youth Parliment</span>
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse fs-5" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav-elements fw-semibold" to="/">
                Home
              </NavLink>
            </li>

            {/* About dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-elements fw-semibold"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
             >
                About
              </button>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <NavLink className="dropdown-item nav-elements fw-semibold" to="/about">
                    Mission
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements fw-semibold" to="/constitution">
                    Constitution
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements fw-semibold" to="/executive">
                    Executive Members
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements fw-semibold" to="/programs">
                Programs
              </NavLink>
            </li>

            {/* Membership dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-elements fw-semibold"
                to="#"
                id="membershipDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Membership
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="membershipDropdown"
              >
                <li>
                  <NavLink className="dropdown-item nav-elements fw-semibold" to="/membership">
                    Join
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements fw-semibold" to="/memberList">
                    Members List
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements fw-semibold" to="/news">
                News
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements fw-semibold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
           {/* Join Us Button */}
          <CTA text="Join us" path="/membership"/>
        </div>
      </div>
    </nav>
        </>
    )
}