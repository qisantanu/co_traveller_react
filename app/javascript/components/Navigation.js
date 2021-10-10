import React from "react"
import { Link } from "react-router-dom"
import logo from '../images/logo1.png';

const Navigation = () => {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Co traveller" height="40" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/location" className="nav-link">Location</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );

}

export default Navigation
