import React from "react";
import logo from "../assets/logo.png";
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a
              href="#"
              className="logo"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-10px",
              }}
            >
              <img src={logo} alt="NAFT logo" width="50px" />
              <h3 style={{ color: "white", marginTop: "10px" }}>LISK NFT</h3>
            </a>

            <p className="footer-brand-text">
              There are many variations of passages of but the majority have
              suffered alterations cted humour, or randomsed words which htly
              believable. If you are going
            </p>

            <h3 className="h4 social-title">Join the community</h3>

            <ul className="social-list">
              <li>
                <a
                  href="https://github.com/codewithsadee"
                  className="social-link"
                >
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/codewithsadee"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/codewithsadee/"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/c/codewithsadee"
                  className="social-link"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Marketplace</h3>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Gaming
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Product
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  All NFTs
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Social Network
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Domain Names
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Collectibles
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Explore</h3>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Featured Drops
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Live Auctions
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  All NFTs
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Collections
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Top Seller
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Items Details
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Supports</h3>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Settings & Privacy
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Help & Support
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Live Auctions
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Item Details
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  24/7 Supports
                </a>
              </li>

              <li className="footer-item">
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} &nbsp;
            <a href="https://github.com/codewithsadee">LISK NFT</a> in
            collaboration with&nbsp;
            <a href="https://github.com/codewithsadee">
              Testrogen Innovation Hub
            </a>
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
