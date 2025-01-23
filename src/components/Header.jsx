import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div class="container">
        <a
          href="#"
          class="logo"
          style={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
        >
          <img src={logo} alt="NAFT logo" width="50px" />
          <h3 style={{ color: "white", marginTop: "10px" }}>LISK NFT</h3>
        </a>

        <div class="header-right">
          <div class="header-nav-wrapper">
            <button class="navbar-toggle-btn" data-navbar-toggle-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav class="navbar" data-navbar>
              <ul class="navbar-list">
                <li>
                  <a href="#" class="navbar-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    Explore
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    Creators
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    Collections
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" class="navbar-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header-actions">
            <input type="search" placeholder="Search" class="search-field" />

            <button class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
