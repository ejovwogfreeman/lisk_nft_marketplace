import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import nftABI from "../utils/nftABI.json"; // Your smart contract ABI

const LISK_SEPOLIA_RPC = "https://rpc.sepolia-api.lisk.com"; // Lisk Sepolia RPC
const CONTRACT_ADDRESS = "0xc6ece30cf46062d354fb748e99942460b964ab87"; // Replace with your NFT contract address

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null); // Added state for balance
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize Web3 and contract
  useEffect(() => {
    const web3Instance = new Web3(LISK_SEPOLIA_RPC);
    setWeb3(web3Instance);

    const contractInstance = new web3Instance.eth.Contract(
      nftABI,
      CONTRACT_ADDRESS
    );
    setContract(contractInstance);

    // Load wallet info from localStorage if available
    const savedAccount = localStorage.getItem("account");
    const savedBalance = localStorage.getItem("balance");
    if (savedAccount && savedBalance) {
      setAccount(savedAccount);
      setBalance(savedBalance);
    }

    return () => {
      setWeb3(null);
      setContract(null);
      setAccount(null);
      setBalance(null); // Clean up balance state when component is unmounted
    };
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask not installed!");

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      // Get the balance of the connected wallet
      const walletBalance = await web3.eth.getBalance(accounts[0]);
      const balanceInEth = web3.utils.fromWei(walletBalance, "ether"); // Convert balance from wei to ether
      setBalance(balanceInEth); // Set the balance state

      // Save account and balance to localStorage
      localStorage.setItem("account", accounts[0]);
      localStorage.setItem("balance", balanceInEth);

      console.log("Wallet Balance:", balanceInEth);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      setError("Wallet connection failed. Please try again.");
    }
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null); // Reset balance when disconnecting wallet
    setError(null);
    console.log("Wallet disconnected");

    // Remove account and balance from localStorage
    localStorage.removeItem("account");
    localStorage.removeItem("balance");
  };

  // Create NFT function
  const createNFT = async (tokenURI) => {
    if (!contract || !account) return alert("Connect wallet first!");
    if (!tokenURI) return alert("Token URI is required!");

    try {
      setLoading(true);
      setError(null);
      const tx = await contract.methods
        .createNFT(tokenURI)
        .send({ from: account });
      console.log("NFT Created Successfully:", tx);
      setLoading(false);
      return tx;
    } catch (error) {
      setLoading(false);
      console.error("NFT Creation Failed:", error);
      setError("NFT creation failed. Please try again.");
    }
  };

  // Mint NFT function
  const mintNFT = async () => {
    if (!contract || !account) return alert("Connect wallet first!");

    try {
      setLoading(true);
      setError(null);
      const tx = await contract.methods.mintNFT().send({ from: account });
      console.log("Minting Successful:", tx);
      setLoading(false);
      return tx;
    } catch (error) {
      setLoading(false);
      console.error("Minting Failed:", error);
      setError("Minting failed. Please try again.");
    }
  };

  // Buy NFT function
  const buyNFT = async (tokenId, price) => {
    if (!contract || !account) return alert("Connect wallet first!");

    try {
      setLoading(true);
      setError(null);
      const tx = await contract.methods.buyNFT(tokenId).send({
        from: account,
        value: web3.utils.toWei(price, "ether"),
      });
      console.log("NFT Purchased:", tx);
      setLoading(false);
      return tx;
    } catch (error) {
      setLoading(false);
      console.error("Buying Failed:", error);
      setError("Buying failed. Please try again.");
    }
  };

  // Sell NFT function
  const sellNFT = async (tokenId, price) => {
    if (!contract || !account) return alert("Connect wallet first!");

    try {
      setLoading(true);
      setError(null);
      const tx = await contract.methods
        .sellNFT(tokenId, web3.utils.toWei(price, "ether"))
        .send({ from: account });
      console.log("NFT Listed for Sale:", tx);
      setLoading(false);
      return tx;
    } catch (error) {
      setLoading(false);
      console.error("Selling Failed:", error);
      setError("Selling failed. Please try again.");
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        contract,
        account,
        balance, // Export the balance so it can be accessed in other components
        connectWallet,
        disconnectWallet,
        mintNFT,
        buyNFT,
        sellNFT,
        createNFT,
        loading,
        error,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
