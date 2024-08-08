import React from 'react'
import './footer.css'
import Vector from '../Assets/Vector2.png'
import Facebook from '../Assets/facebook-263-721950.png'
import Instagram from '../Assets/instagram-216-721958.png'
import Twitter from '../Assets/twitter-241-721979.png'
import Copyright from '../Assets/ri_copyright-line.png'

export default function Footer() {
  return (
    <footer>
       <div className='footer-container'>
            <div className='footer-meta'>
              <img src={Vector} alt="" />
              <p>Metabnb</p>
            </div>
            <div className='footer-icons'>
                <img src={Facebook} alt="" />
                <img src={Twitter}alt="" />
                <img src= {Instagram} alt="" />
            </div>
            <div className='copyright'>
                  <img src= {Copyright} alt=""/>
                  <p>2024 Metabnb</p>
            </div>
      </div>
      <div className='community'>
                 <p>Community</p>
                 <ul className='community-one'>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                 </ul>
                </div>
                <div className='community'>
                    <p>Places</p>
                    <ul className='community-two'>
                       <li>Castle</li>
                       <li>Farms</li>
                       <li>Beach</li>
                       <li>Learn more</li>
                    </ul>
                </div>
                <div className='community'>
                    <p>About us</p>
                    <ul className='community-three'>
                       <li><a href="">Road map</a></li>
                       <li><a href="">Creators</a></li>
                       <li><a href="">Career</a></li>
                       <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
    
   </footer>
  );
}
