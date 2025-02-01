import React, { useContext } from "react";
import img from "../assets/nft-bg.png";
import defaultImg from "../assets/default.jpg";
import "../css/Profile.css";
import { Web3Context } from "../contexts/nftContext";
import { FaEthereum } from "react-icons/fa";

const Profile = () => {
  const { account, balance } = useContext(Web3Context);
  return (
    <div>
      <img src={img} alt="" style={{ width: "100%" }} />
      <div className="container">
        <img src={defaultImg} alt="" className="profile" />
        <div className="account-info">
          <h2>
            {account ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <FaEthereum />{" "}
                <span>{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
              </span>
            ) : (
              ""
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
