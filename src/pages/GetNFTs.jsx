import React, { useState, useEffect } from "react";
import Moralis from "moralis";
import { ClipLoader } from "react-spinners"; // Import spinner

const GetNFTs = () => {
  const [nft, setNft] = useState(null); // Set to null initially
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const apiKey = import.meta.env.VITE_MORALIS_API_KEY;
        const walletAddress = import.meta.env.VITE_WALLET_ADDRESS;

        if (!apiKey || !walletAddress) {
          console.error("Missing environment variables!");
          setLoading(false);
          return;
        }

        await Moralis.start({ apiKey });

        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          chain: "0x1",
          format: "decimal",
          mediaItems: false,
          address: walletAddress,
        });

        console.log("NFTs:", response.raw.result);
        setNft(response.raw.result || []);
      } catch (e) {
        console.error("Error fetching NFTs:", e);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchNfts();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My NFTs</h1>

      {loading || nft === null ? ( // Show spinner while loading or if NFTs are not yet fetched
        <ClipLoader color="#007bff" size={50} />
      ) : (
        <ul>
          {nft.map((n, index) => (
            <li key={index}>{n.token_id}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetNFTs;
