import {NavLink, Link } from "react-router-dom"
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
          <span className="ms-2 fw-bold" style={{color : "#014220"}}>Federal Youth Parliment</span>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav-elements" to="/">
                Home
              </NavLink>
            </li>

            {/* About dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle nav-elements"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
             >
                About
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <NavLink className="dropdown-item nav-elements" to="/about">
                    Mission
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements" to="/constitution">
                    Constitution
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements" to="/executive">
                    Executive Members
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements" to="/programs">
                Programs
              </NavLink>
            </li>

            {/* Membership dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle nav-elements"
                to="#"
                id="membershipDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Membership
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="membershipDropdown"
              >
                <li>
                  <NavLink className="dropdown-item nav-elements" to="/membership">
                    Join
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item nav-elements" to="/memberList">
                    Members List
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements" to="/news">
                News
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-elements" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
           {/* Join Us Button */}
          <NavLink to="/membership" className="btn rounded-pill d-none d-lg-block ms-lg-3 mt-2 mt-lg-0" style={{backgroundColor:  "#014220" , color : " #fff"}}>
            Join Us
          </NavLink>
        </div>
      </div>
    </nav>
        </>
    )
}