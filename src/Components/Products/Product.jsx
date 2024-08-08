import React from 'react'
import './product.css'
import DesertKingOne from '../Assets/desertKingone.png'
import DesertKingTwo from '../Assets/desertKingtwo.png'
import DesertKingThree from '../Assets/desertKingthree.png'
import DesertKingFour from '../Assets/desertKingfour.png'
import DesertKingFive from '../Assets/desertKingfive.png'
import DesertKingSix from '../Assets/desertKingsix.png'
import DesertKingSeven from '../Assets/desertKingseven.png'
import DesertKingEight from '../Assets/desertKingeight.png'
import Star from '../Assets/star.png'

export default function Product() {
  return (
    <div>
        <h1>Inspiration for your next adventure</h1>
        <div className='all-products'>
        <div className='product-one'>
            <div className='first-product'>
                <img src={DesertKingOne} className='image-one' alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className = 'prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
              <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>
            <div className='first-product'>
                <img src={DesertKingTwo} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
               <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
               </div>
            </div>
            <div className='first-product'>
                <img src={DesertKingThree} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
               <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
               </div>
            </div>
            <div className='first-product'>
                <img src={DesertKingFour} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
                <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                </div>
            </div>
        </div>
        <div className='product-two'>
            <div className='first-product'>
                <img src={DesertKingFive} alt="" className='image-one' srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
              <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>
            <div className='first-product'>
                <img src={DesertKingSix} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
            <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </div>
            </div>
            <div  className='first-product'>
                <img src={DesertKingSeven} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
            <div className='stars'>
                <img src= {Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </div>
            </div>
            <div className='first-product'>
                <img src={DesertKingEight} alt="" srcset="" />
                <div className='prod-text'>
                    <p>Desert King</p>
                    <p>1mbt per night</p>
                </div>
                <div className='prod-text'>
                    <p>2345km away</p>
                    <p>available for two weeks stay</p>
                </div>
               <div className='stars'>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}
