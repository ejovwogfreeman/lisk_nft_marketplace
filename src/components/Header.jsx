import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { FaWallet } from "react-icons/fa6";

const Header = () => {
  // State to manage navbar visibility and wallet details
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [web3Modal, setWeb3Modal] = useState(null);

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

  // Check for saved account on component mount
  useEffect(() => {
    const savedAccount = localStorage.getItem("account");
    const savedBalance = localStorage.getItem("balance");

    if (savedAccount && savedBalance) {
      setAccount(savedAccount);
      setBalance(savedBalance);
    }
  }, []);

  // Initialize Web3Modal once
  useEffect(() => {
    const modal = new Web3Modal();
    setWeb3Modal(modal);
  }, []);

  // Connect Wallet
  const connectWallet = async () => {
    if (!web3Modal) return; // Ensure web3Modal is initialized

    try {
      const provider = await web3Modal.connect(); // Prompts the user to connect their wallet
      const web3 = new Web3(provider);

      // Get accounts
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];
      setAccount(userAccount);

      // Get balance
      const walletBalance = await web3.eth.getBalance(userAccount);
      const formattedBalance = web3.utils.fromWei(walletBalance, "ether");
      setBalance(formattedBalance);

      // Save to localStorage
      localStorage.setItem("account", userAccount);
      localStorage.setItem("balance", formattedBalance);
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  // const connectWallet = async () => {
  //   if (!web3Modal) return; // Ensure web3Modal is initialized

  //   try {
  //     // Check for the current device (mobile vs desktop)
  //     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  //     // If the user is on mobile, try using the deep-link method
  //     if (isMobile) {
  //       // Check if MetaMask mobile is installed
  //       const isMetaMaskMobileInstalled =
  //         typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;

  //       if (isMetaMaskMobileInstalled) {
  //         // Use deep link to MetaMask mobile (works on both iOS and Android)
  //         const metaMaskMobileUrl = "metamask://";
  //         window.location.href = metaMaskMobileUrl;
  //         // Optionally add a delay before trying to connect again for better flow
  //         setTimeout(async () => {
  //           const provider = await web3Modal.connect(); // Reconnect using Web3Modal after MetaMask opens
  //           handleProviderConnection(provider);
  //         }, 1000);
  //       } else {
  //         // Alert the user if MetaMask mobile isn't installed
  //         alert(
  //           "Please install the MetaMask app from the App Store or Google Play."
  //         );
  //       }
  //     } else {
  //       // Desktop devices just use Web3Modal to connect MetaMask extension
  //       const provider = await web3Modal.connect();
  //       handleProviderConnection(provider);
  //     }
  //   } catch (error) {
  //     console.error("Connection error:", error);
  //     if (error.code === 4001) {
  //       alert("You rejected the connection request. Please try again.");
  //     } else {
  //       alert(
  //         "An error occurred while connecting the wallet. Please try again."
  //       );
  //     }
  //   }
  // };

  // // Handle the connection once the provider is connected
  // const handleProviderConnection = async (provider) => {
  //   const web3 = new Web3(provider);
  //   const accounts = await web3.eth.getAccounts();
  //   const userAccount = accounts[0];
  //   setAccount(userAccount);

  //   // Get balance
  //   const walletBalance = await web3.eth.getBalance(userAccount);
  //   const formattedBalance = web3.utils.fromWei(walletBalance, "ether");
  //   setBalance(formattedBalance);

  //   // Save to localStorage
  //   localStorage.setItem("account", userAccount);
  //   localStorage.setItem("balance", formattedBalance);
  // };

  // Disconnect Wallet
  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    localStorage.removeItem("account");
    localStorage.removeItem("balance");
    if (web3Modal) {
      web3Modal.clearCachedProvider(); // Clear the cached provider from Web3Modal
    }
  };

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
                  <li onClick={connectWallet}>
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
                      <span>
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
              onClick={connectWallet}
              className="btn btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginTop: "5px", marginRight: "5px" }}>
                <FaWallet />
              </span>
              <span>
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
