import React from "react";
import { useCollapse } from 'react-collapsed'

import Button from "../common/button/Button";
import Slider from "react-slick/lib/slider";

// import { TRENDING_NFTS } from "../trendingNfts";
import { NFT_DATA } from "../fetch";
import TrendingCard from "../common/trendingCard/TrendingCard";


export default function TrendingNFTs() {
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  console.log(NFT_DATA);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(NFT_DATA);
  let TRENDING_NFTS = NFT_DATA.slice(0, 10);

  return (
    <div className="trending-nfts">
      <div className="tn-bg-blob"></div>
      <div className="tn-heading absolute-center">
        <span className="heading-gradient">Trending NFTs</span>
      </div>
      <div className="tn-content">
        <div className="tn-slider shown-content">
          <Slider {...settings}>
            {TRENDING_NFTS.map((_nft) => (
              <TrendingCard nft={_nft} />
            ))}
          </Slider>
        </div>
        <div {...getCollapseProps()} className="hidden-content tn-see-more">
          {[...Array(4)].map((_, i) => {
            // console.log(i*6, i*6+6);
            TRENDING_NFTS = NFT_DATA.slice((i + 1) * 6, (i + 1) * 6 + 6);
            return (
              <div className="tn-slider">
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
          btnText={isExpanded? "SEE LESS" : "SEE MORE"}
          // btnOnClick={handleSeeMore}
          customClasses="tn-button see-more-btn"
        />
      </div>
    </div>
  );
}
