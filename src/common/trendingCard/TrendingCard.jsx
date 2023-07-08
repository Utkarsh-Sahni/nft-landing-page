import React from 'react'
import './trendingCard.css'

export default function TrendingCard(props) {
    const {nft}= props;
  return (
    <div className='trending-card absolute-center'>
        <div className='tc-inner-wrapper'>
            <div className='tc-content'>
                <div className='tc-img'>
                    <img alt='nft-banner' src={nft.nft_img} />
                </div>
                <div className='tc-info'>
                    <div className='tc-collection-logo'>
                        <img alt={nft.collection_name} src={nft.collection_img}/>
                    </div>
                    <div className='tc-user-desc'>
                        <div className='tc-nft-collection'>{nft.collection_name}</div>
                        <div className='tc-nft-name'>{nft.nft_name}</div>
                        <div className='tc-nft-floorprice'>{Math.round(nft.floor_price*1000)/1000} ETH</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
