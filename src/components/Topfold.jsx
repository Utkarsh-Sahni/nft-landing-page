import React from "react";
import Button from "../common/button/Button";

export default function Topfold() {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, collect & sell{" "}
          <span className="heading-gradient">Extraodinary</span> NFTs
        </div>
        <div className="tf-desc">
          The leading NFT Marketplace on Ethereum and home to the nextgeneration
          of digital creators. Discover the best NFT collections and make your
          own.
        </div>
        <div className="tf-buttons">
          <Button btnType="Primary" btnText="Explore" />
          <Button
            btnType="Secondary"
            btnText="Create"
            customClasses="tf-sec-btn"
          />
        </div>
        <div className="tf-infostats">
          <div className="tf-is-item">
            <div className="tf-is-count">200K+</div>
            <div className="tf-is-label">Collections</div>
          </div>
          <div className="tf-is-item">
            <div className="tf-is-count">20K+</div>
            <div className="tf-is-label">Artists</div>
          </div>
          <div className="tf-is-item">
            <div className="tf-is-count">423K+</div>
            <div className="tf-is-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-r-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-daimond-img"
              alt="diamond banner"
              src="https://i.seadn.io/gae/Iko3YkHKgmvi5HVP_bjxOytEyvFOp-D4lLl7YecZfkOb4hva9Mdchb--H88l-tdxZSAjmT7406RtSPY5DN83nqBEOAjrnPzxYinC?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-daimond-img"
              alt="diamond banner"
              src="https://i.seadn.io/gcs/files/d0896b9ac1fdc50e012b5adc97d4ec55.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-daimond-img"
              alt="diamond banner"
              src="https://i.seadn.io/gcs/files/40fbac029b1d5000ff516326a70f31e8.gif?auto=format&dpr=1&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-daimond-img"
              alt="diamond banner"
              src="https://i.seadn.io/gae/Ws1LziN_zJVTS4WlxZee2WQZgXmzVTsy1xboFwS4qCxAr_B37IakhJw_ieaXoaCHkrMMVyhJzPGfz69pn2_HzIHn18s21gwwYCoR?auto=format&dpr=1&w=128"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// https://media1.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b761154czrsedprg1e1n7o79ism3arbzwve4ez2r82m1o&ep=v1_gifs_search&rid=giphy.gif&ct=g
// https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif
// https://media.tenor.com/kLaqKsjq200AAAAd/nft-nfts.gif
