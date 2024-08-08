import React, { useState } from 'react';
import './navbar.css';
import Vector from '../Assets/Vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div>
        <img src={Vector} alt="Metabnb logo" />
        <h1>Metabnb</h1>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Place to Stay</a></li>
          <li><a href="#">NFTs</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        {isOpen && ( <button className="cta-button responsive">Connect wallet</button>)}
      </nav>
      <div className="menu-toggle-wrapper">
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
      <button className="cta-button desktop">Connect wallet</button>
  
    </header>
  );
}


