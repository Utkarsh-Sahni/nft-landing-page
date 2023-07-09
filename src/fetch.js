// require("dotenv").config();

// import 'dotenv/config';
// const apiKey = 'zlzQDBLei3xm8NNMI5E-Y8HvjELz9XrI';
// // console.log(process.env.REACT_APP_API_KEY);


// // const contractAddressesStr = process.env.CONTRACT_ADDRESSES;
// const contractAddresses = [
//   '0x354634c4621cDfb7a25E6486cCA1E019777D841B',
//   '0xED5AF388653567Af2F388E6224dC7C4b3241C544',
//   '0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D',
//   '0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7',
//   '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B',
//   '0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623'
// ];
// console.log(contractAddresses)

// function shuffleArray(NFT_DATA) {
//   for (let i = NFT_DATA.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [NFT_DATA[i], NFT_DATA[j]] = [NFT_DATA[j], NFT_DATA[i]];
//   }
// }

export async function fetchNFTs( apiKey,_contractAddress) {
  const apiUrl = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection?contractAddress=${_contractAddress}&withMetadata=true&limit=4&order_direction=asc&startToken=3000`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    // console.log(data);
    const nfts = data.nfts;
    // console.log(nfts);
    return nfts;
  } catch (err) {
    console.log("err", err);
  }
}

