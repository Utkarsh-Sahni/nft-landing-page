import React, { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";

import Button from "../common/button/Button";
import Slider from "react-slick/lib/slider";

// import { TRENDING_NFTS } from "../trendingNfts";
import { fetchNFTs } from "../fetch";
import TrendingCard from "../common/trendingCard/TrendingCard";

export default function TrendingNFTs() {
  const apiKey = process.env.REACT_APP_API_KEY;
  // console.log(apiKey);
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const contractAddressesStr = process.env.REACT_APP_CONTRACT_ADDRESSES;
        const contractAddresses = contractAddressesStr.split(",");
        // console.log(contractAddresses);
        const promises = contractAddresses.map((_contractAddress) =>
          fetchNFTs(apiKey, _contractAddress)
        );
        const apidata = await Promise.all(promises);
        const mergedData = [].concat(...apidata);
        // console.log("apidata", mergedData);
        setNfts(mergedData);
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchDataFromApi();
  }, [apiKey]);

  console.log("nfts", nfts);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(nfts);
  let TRENDING_NFTS = nfts.slice(0, 6);

  return (
    <div className="trending-nfts">
      <div className="tn-heading absolute-center">
        <span className="heading-gradient">Trending NFTs</span>
      </div>
      <div className="tn-content">
        <div className="tn-slider shown-content">
          <div className="tn-bg-blob"></div>
          <Slider {...settings}>
            {TRENDING_NFTS.map((_nft) => (
              <TrendingCard nft={_nft} />
            ))}
          </Slider>
        </div>
        <div {...getCollapseProps()} className="hidden-content tn-see-more">
          {[...Array(3)].map((_, i) => {
            // console.log(i*6, i*6+6);
            TRENDING_NFTS = nfts.slice((i + 1) * 6, (i + 1) * 6 + 6);
            return (
              <div className="tn-slider">
                <div className="tn-bg-blob"></div>
                <Slider {...settings}>
                  {TRENDING_NFTS.map((_nft) => (
                    <TrendingCard nft={_nft} />
                  ))}
                </Slider>
              </div>
            );
          })}
        </div>
      </div>
      <div {...getToggleProps()} className="tn-btn absolute-center">
        <Button
          btnType="Secondary"
          btnText={isExpanded ? "SEE LESS" : "SEE MORE"}
          // btnOnClick={handleSeeMore}
          customClasses="tn-button see-more-btn"
        />
      </div>
    </div>
  );
}
