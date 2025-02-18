import Moralis from "moralis";

try {
  await Moralis.start({
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImFkYTMwMmM4LTY3YjUtNGY3YS04MWVjLWU3MDIyZGE4NzlmZCIsIm9yZ0lkIjoiNDI5MzAwIiwidXNlcklkIjoiNDQxNTg0IiwidHlwZUlkIjoiZTQ1ZmZiYjAtYmI4Ni00OGRjLTk1NzQtY2Q5MzViNDQ3MzUyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mzg2Mjk0MDcsImV4cCI6NDg5NDM4OTQwN30.Sk6RIxCiYb50-5s8PCMEkQBP0cM1rBL-5nBNIPRheZQ",
  });

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: "0x106a",
    format: "decimal",
    mediaItems: false,
    address: "0xc68d3c9Ed23D7fa6864E958199fC81BD2b8AA7bE",
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}
