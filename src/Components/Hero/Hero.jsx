import React from 'react'
import './hero.css'
import ImageFour from '../Assets/image 4.png'
import ImageSix from '../Assets/image 6.png'
import ImageThree from '../Assets/image 3.png'
import ImageFive from '../Assets/image 5.png'
import LogoOne from '../Assets/Group 59536.png'
import LogoTwo from '../Assets/Group 4038.png'
import LogoThree from '../Assets/logo.png'

export default function Hero() {
  return (
    <div>
    <div className='hero'>
    <div className='hero-left'>
        <h1>Rent a<span> Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, 
           get a chance to turn your imagination to reality at your comfort zone
        </p>
        <form action="">
            <input type="text" placeholder="Search for location"/>
            <button>Search</button>
        </form>
    </div>
        <div className='hero-right'>
        <div className='hero-right-one'>
            <img src= {ImageFour} class="img-one" alt=""/>
            <img src={ImageSix}alt=""/>
        </div>
        <div className='hero-right-two'>
            <img src={ImageThree} alt=""/>
            <img src={ImageFive}alt=""/>
        </div>
        </div>
</div>
<div className="banner">
            <div className='banner-two'>
                <img src={LogoOne} alt=""/>
                <h1>MBToken</h1>
            </div>
            <div className='banner-two'>
                <img src={LogoTwo}  alt=""/>
                <h1>METAMASK</h1>
            </div>
            <div className='banner-two'>
                <img src={LogoThree}  alt=""/>
                <h1>Opensea</h1>
            </div>
</div>

    </div>

  )
}
