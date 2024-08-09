import React from 'react'
import './new.css'
import Threepictures from '../Assets/Frame 59546.png'

export default function New() {
  return (
    <div className='new'>
        <div>
            <h1 className='new-h'>Metabnb NFTS</h1>
            <p className='new-p'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.These NFTs give our customers access to loads of our executive services</p>
            <button className='new-btn'>Learn more</button>
        </div>
        <div className='new-right'>
            <img src={Threepictures} alt="" srcset="" />
        </div>
    </div>
  )
}
