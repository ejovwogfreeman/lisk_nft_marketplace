// import React, { useEffect, useState, createContext, useContext } from "react";
// import Web3 from "web3";
// import nftABI from "../utils/nftABI.json";

// // Create a context for Web3
// export const Web3Context = createContext();

// // Custom hook to use the Web3 context
// // export const useWeb3 = () => useContext(Web3Context);

// export function Web3Provider({ children }) {
//   const [web3, setWeb3] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const [contract, setContract] = useState(null);

//   useEffect(() => {
//     if (window.ethereum) {
//       const web3Instance = new Web3(window.ethereum);
//       setWeb3(web3Instance);
//     }
//   }, []);

//   const contractAddress = "0xc6ece30cf46062d354fb748e99942460b964ab87";

//   const connectWallet = async () => {
//     try {
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       const accounts = await web3.eth.getAccounts();
//       const account = accounts[0];
//       const currentChainId = await window.ethereum.request({
//         method: "eth_chainId",
//       });
//       console.log(currentChainId);
//       if (currentChainId !== "0x106a") {
//         // Ensure this matches the Core testnet chain ID
//         alert("Connect lisk testnet");
//         return;
//       }
//       const instance = new web3.eth.Contract(nftABI.abi, contractAddress);
//       setContract(instance);
//       console.log(account);
//       setAccount(account);
//       setConnected(true);
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//     }
//   };

//   const disconnectWallet = () => {
//     setAccount(null);
//     setConnected(false);
//     setContract(null);
//   };

//   // Function to list all NFTs on the blockchain
//   const listAllNFTs = async () => {
//     // if (!contract) return alert("Contract not initialized!");

//     try {
//       // setLoading(true);
//       // setError(null);
//       const nfts = await contract;
//       // const nfts = await contract.methods.listExistingNFT().call();
//       console.log("All NFTs:", nfts);
//       // setLoading(false);
//       return nfts;
//     } catch (error) {
//       // setLoading(false);
//       console.error("Fetching NFTs Failed:", error);
//       setError("Failed to fetch NFTs. Please try again.");
//     }
//   };

//   return (
//     <Web3Context.Provider
//       value={{
//         web3,
//         account,
//         disconnectWallet,
//         connectWallet,
//         listAllNFTs,
//         connected,
//         contract,
//       }}
//     >
//       <div>{children}</div>
//     </Web3Context.Provider>
//   );
// }

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

        // Get the balance of the connected wallet
        const walletBalance = await web3Instance.eth.getBalance(accounts[0]);
        const balanceInEth = web3Instance.utils.fromWei(walletBalance, "ether");
        setBalance(balanceInEth);

        // Save to localStorage
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
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const listAllNFTs = async () => {
    if (!contract) {
      console.warn("Contract not initialized!");
      return [];
    }
    try {
      const nfts = await contract.methods.listExistingNFT().call();
      console.log("All NFTs:", nfts);
      return nfts;
    } catch (error) {
      console.error("Fetching NFTs Failed:", error);
      return [];
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        account,
        balance,
        connectWallet,
        disconnectWallet,
        listAllNFTs,
        connected,
        contract,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}
