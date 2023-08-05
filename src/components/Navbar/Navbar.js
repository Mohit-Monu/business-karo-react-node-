import React from "react";
import "./Navbar.css";
export default function Navbar(props) {
  function themehandler() {
    if (props.theme === "light") {
      props.onThemeHandler("dark");
    } else {
      props.onThemeHandler("light");
    }
  }

  return (
    <div
      className={`container-fluid bg-${props.theme} text-${
        props.theme === "dark" ? "light" : "black"
      }` }
    >
      <nav className={`navbar navbar-expand-lg navbar-${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Business Karo{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricings
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View all
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chat with us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <button
              type="button"
              className={`btn btn-outline-${
                props.theme === "dark" ? "light" : "primary"
              } m-3`}
              onClick={themehandler}
            >
              {props.theme === "dark" ? "Light mode" : "Dark mode"}
            </button> */}
            
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={themehandler}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
