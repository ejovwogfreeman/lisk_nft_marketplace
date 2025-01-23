import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a
          href="#"
          className="logo"
          style={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
        >
          <img src={logo} alt="NAFT logo" width="50px" />
          <h3 style={{ color: "white", marginTop: "10px" }}>LISK NFT</h3>
        </a>

        <div className="header-right">
          <div className="header-nav-wrapper">
            <button className="navbar-toggle-btn" data-navbar-toggle-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav className="navbar" data-navbar>
              <ul className="navbar-list">
                <li>
                  <a href="#" className="navbar-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    Explore
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    Creators
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    Collections
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="navbar-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-actions">
            <input
              type="search"
              placeholder="Search"
              className="search-field"
            />

            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
