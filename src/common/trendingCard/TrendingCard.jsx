import React from 'react'
import './trendingCard.css'

export default function TrendingCard(props) {
    const {nft}= props;
    const collection= nft.contractMetadata.openSea;
  return (
    <div className='trending-card absolute-center cur-po'>
        <div className='tc-inner-wrapper'>
            <div className='tc-content'>
                <div className='tc-img'>
                    <img alt='nft-banner' src={nft.media[0].thumbnail} />
                </div>
                <div className='tc-info'>
                    <div className='tc-collection-logo'>
                        <img alt={collection.collectionName} src={collection.imageUrl}/>
                    </div>
                    <div className='tc-user-desc'>
                        <div className='tc-nft-collection'>{collection.collectionName}</div>
                        <div className='tc-nft-name'>{nft.metadata.name}</div>
                        <div className='tc-nft-floorprice'>{Math.round(collection.floorPrice*1000)/1000} ETH</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
