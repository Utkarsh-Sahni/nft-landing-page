require('dotenv').config();

const apiKey = process.env.API_KEY;
const contractAddressesStr = process.env.CONTRACT_ADDRESSES;
const contractAddresses= contractAddressesStr.split(',');
// console.log(contractAddresses)

function shuffleArray(NFT_DATA) {
  for (let i = NFT_DATA.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [NFT_DATA[i], NFT_DATA[j]] = [NFT_DATA[j], NFT_DATA[i]];
  }
}

async function fetchNFTs(_contractAddress) {

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
let NFT_DATA = [];
let cnt=1;
contractAddresses.forEach((_contractAddress) => {
  fetchNFTs(_contractAddress).then((nfts) => {
    if (nfts)
    nfts.forEach((nft)=>{
        NFT_DATA.push({
          id: cnt,
          collection_name: nft.contractMetadata.openSea.collectionName,
          collection_img: nft.contractMetadata.openSea.imageUrl,
          floor_price: nft.contractMetadata.openSea.floorPrice,
          nft_img: nft.metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/"),
          nft_name: nft.metadata.name
        });
        cnt++;
        
      });
  });
});
console.log(NFT_DATA);
shuffleArray(NFT_DATA); 
console.log(NFT_DATA);

// export { NFT_DATA };