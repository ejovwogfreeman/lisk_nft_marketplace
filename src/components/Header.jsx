import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { FaWallet } from "react-icons/fa6";
import { Web3Context } from "../contexts/nftContext";

const Header = () => {
  const { account, balance, connectWallet, disconnectWallet } =
    useContext(Web3Context);

  // State to manage navbar visibility and wallet details
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  // const [account, setAccount] = useState(null);
  // const [balance, setBalance] = useState(null);
  // const [web3Modal, setWeb3Modal] = useState(null);

  // Toggle function for the navbar
  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  // Handle window resize for mobile/desktop differentiation
  useEffect(() => {
    const handleResize = () => {
      // If the window size is greater than 1200px, set navbar active to false
      if (window.innerWidth > 1200) {
        setIsNavbarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Check initial window size on mount
    if (window.innerWidth > 1200) {
      setIsNavbarActive(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="container">
        {/* Logo Section */}
        <a
          href="#"
          className="logo"
          style={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
        >
          <img src={logo} alt="NAFT logo" width="50px" />
          <h3 style={{ color: "white", marginTop: "10px" }}>LISK NFT</h3>
        </a>

        <div className="header-right">
          {/* Navbar Wrapper */}
          <div className="header-nav-wrapper">
            {/* Navbar Toggle Button */}
            <button
              className="navbar-toggle-btn"
              onClick={toggleNavbar} // React onClick handler
            >
              <span style={{ color: "white" }}>
                <MdOutlineMenu />
              </span>
            </button>

            {/* Navbar */}
            <nav
              className={`navbar ${isNavbarActive ? "active" : ""}`} // Dynamically add 'active' class
            >
              <ul className="navbar-list" style={{ zIndex: "10000" }}>
                <li>
                  <a href="#" className="navbar-link">
                    Home
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
                    Contact
                  </a>
                </li>
                {account ? (
                  <li onClick={disconnectWallet}>
                    <a className="navbar-link">Logout</a>
                  </li>
                ) : null}
                {isNavbarActive ? (
                  <li>
                    <a
                      href="#"
                      className="navbar-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginTop: "5px", marginRight: "5px" }}>
                        <FaWallet />
                      </span>
                      <span onClick={connectWallet}>
                        {account
                          ? `Connected | ${balance} ETH`
                          : "Connect Wallet"}
                      </span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </nav>
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <input
              type="search"
              placeholder="Search"
              className="search-field"
            />
            <button
              className="btn btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginTop: "5px", marginRight: "5px" }}>
                <FaWallet />
              </span>
              <span onClick={connectWallet}>
                {account ? `Connected | ${balance} ETH` : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
