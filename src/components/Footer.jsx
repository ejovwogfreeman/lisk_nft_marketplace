import React from "react";
import logo from "../assets/logo.png";
import { FaYoutube, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <a
              href="#"
              class="logo"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-10px",
              }}
            >
              <img src={logo} alt="NAFT logo" width="50px" />
              <h3 style={{ color: "white", marginTop: "10px" }}>LISK NFT</h3>
            </a>

            <p class="footer-brand-text">
              There are many variations of passages of but the majority have
              suffered alterations cted humour, or randomsed words which htly
              believable. If you are going
            </p>

            <h3 class="h4 social-title">Join the community</h3>

            <ul class="social-list">
              <li>
                <a href="https://github.com/codewithsadee" class="social-link">
                  <FaGithub />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/codewithsadee" class="social-link">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/codewithsadee/"
                  class="social-link"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/c/codewithsadee"
                  class="social-link"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-link-box">
            <ul class="footer-list">
              <li>
                <h3 class="h3 footer-item-title">Marketplace</h3>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Gaming
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Product
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  All NFTs
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Social Network
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Domain Names
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Collectibles
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <h3 class="h3 footer-item-title">Explore</h3>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Featured Drops
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Live Auctions
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  All NFTs
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Collections
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Top Seller
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Items Details
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <h3 class="h3 footer-item-title">Supports</h3>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Settings & Privacy
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Help & Support
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Live Auctions
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Item Details
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  24/7 Supports
                </a>
              </li>

              <li class="footer-item">
                <a href="#" class="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2022 &nbsp;
            <a href="https://github.com/codewithsadee">LISK NFT</a> in
            collaboration with&nbsp;
            <a href="https://github.com/codewithsadee">
              Testrogen Innovation Hub
            </a>
          </p>

          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
