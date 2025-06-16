import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'
import icon from '../assets/hoverwing.svg'

function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

     const handleMenuToggle = () => setMenuOpen(!menuOpen);
     const handleLinkClick = () => setMenuOpen(false);

     return (
          <div className="navbar">
               <div className='logo'>
                    <Link to="/" className='logo-link' onClick={handleLinkClick}>
                         <img className='logo-img' src={logo} alt="Logo" />
                    </Link>
               </div>
               <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                    <div className='nav-outer'>
                         <div className='nav-link' onClick={handleLinkClick}>
                              <img className='icon-img' src={icon} alt='i' />
                              <p className='main-text'>Solution</p>
                              <p className='sub-text'>FOR YOU</p>
                         </div>
                    </div>
                    <div className='nav-outer'>
                         <div className='nav-link' onClick={handleLinkClick}>
                              {/* <img className='icon-img' src={icon} alt='i' /> */}
                              <p className='main-text'>Distributors</p>
                              <p className='sub-text'>WE OFFER</p>
                         </div>
                    </div>
                    <div className='nav-outer'>
                         <div className='nav-link' onClick={handleLinkClick}>
                              <img className='icon-img' src={icon} alt='i' />
                              <p className='main-text'>Manufacturers</p>
                              <p className='sub-text'>WE OFFER</p>
                         </div>
                    </div>
                    <div className='nav-outer'>
                         <div className='nav-link' onClick={handleLinkClick}>
                              <img className='icon-img' src={icon} alt='i' />
                              <p className='main-text'>Insights</p>
                              <p className='sub-text'>MEDIA & DATA</p>
                         </div>
                    </div>
                    <div className='nav-outer'>
                         <div className='nav-link' onClick={handleLinkClick}>
                              <img className='icon-img' src={icon} alt='i' />
                              <p className='main-text'>Wissend</p>
                              <p className='sub-text'>WHO & WHY</p>
                         </div>
                    </div>
               </div>
               {/* <div className='contact'>
                    <div>
                         <p>contact</p>
                    </div>
               </div> */}
               <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
          </div>
     )
}

export default Navbar