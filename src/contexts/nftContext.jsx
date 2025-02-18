import React, { useEffect, useState, createContext } from "react";
import Web3 from "web3";
import nftABI from "../utils/nftABI.json";

export const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(
    localStorage.getItem("account") || null
  );
  const [connected, setConnected] = useState(!!localStorage.getItem("account"));
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(
    localStorage.getItem("balance") || null
  );
  const [nfts, setNfts] = useState([]); // State for NFTs

  const contractAddress = "0xc6ece30cf46062d354fb748e99942460b964ab87";

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const provider = window.ethereum.providers
          ? window.ethereum.providers.find((p) => p.isMetaMask) ||
            window.ethereum
          : window.ethereum;

        if (!provider.isMetaMask) {
          console.warn("MetaMask is required.");
          return;
        }

        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
      } else {
        console.warn("MetaMask not detected.");
      }
    }
    loadWeb3();
  }, []);

  const switchToLiskTestnet = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x106a" }],
      });
      return true;
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x106a",
                chainName: "Lisk Sepolia Testnet",
                rpcUrls: ["https://rpc.sepolia-api.lisk.com"],
                blockExplorerUrls: ["https://sepolia-blockscout.lisk.com"],
              },
            ],
          });
          return true;
        } catch (addError) {
          console.error("Error adding Lisk Testnet:", addError);
        }
      } else {
        console.error("Error switching network:", error);
      }
      return false;
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is required.");
        return;
      }

      const provider = window.ethereum.providers
        ? window.ethereum.providers.find((p) => p.isMetaMask) || window.ethereum
        : window.ethereum;

      if (!provider.isMetaMask) {
        alert("MetaMask is required. Please disable other wallets.");
        return;
      }

      await provider.request({ method: "eth_requestAccounts" });

      setTimeout(async () => {
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        if (!accounts.length) {
          alert("No account found.");
          return;
        }

        const currentChainId = await provider.request({
          method: "eth_chainId",
        });

        if (currentChainId !== "0x106a") {
          const switched = await switchToLiskTestnet();
          if (!switched) {
            alert("Please switch to Lisk Testnet (0x106a). ");
            return;
          }
        }

        const instance = new web3Instance.eth.Contract(
          nftABI.abi,
          contractAddress
        );
        setContract(instance);
        setAccount(accounts[0]);
        setConnected(true);

        const walletBalance = await web3Instance.eth.getBalance(accounts[0]);
        const balanceInEth = web3Instance.utils.fromWei(walletBalance, "ether");
        setBalance(balanceInEth);

        localStorage.setItem("account", accounts[0]);
        localStorage.setItem("balance", balanceInEth);

        console.log("Wallet Connected:", accounts[0]);
        console.log("Wallet Balance:", balanceInEth);
      }, 1000);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setConnected(false);
    setContract(null);
    setBalance(null);
    localStorage.removeItem("account");
    localStorage.removeItem("balance");
  };

  useEffect(() => {
    if (contract) {
      // Fetch NFTs only after the contract is initialized
      const fetchNFTs = async () => {
        try {
          const nftsList = await contract.methods.listExistingNFT().call();
          setNfts(nftsList);
        } catch (error) {
          console.error("Fetching NFTs Failed:", error);
        }
      };

      fetchNFTs();
    }
  }, [contract]); // Only trigger this useEffect when the contract is available

  console.log(nfts);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <Web3Context.Provider
      value={{
        web3,
        account,
        balance,
        connectWallet,
        disconnectWallet,
        nfts, // Provide nfts in context
        connected,
        contract,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}
