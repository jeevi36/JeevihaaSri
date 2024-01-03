import React ,{useRef}from'react';
import {Link} from "react-router-dom";


import './Navbar.css';

//import cart from '../assests/cart.png';
import logo from '../assets1/logo.png';

function Navbar() {
    
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

   return(
    <header>
        <img src={logo} className='logo'/>
    
    <nav ref={navRef}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About us</Link>
        <Link to='/accomodations'>Accomodations</Link>
        <Link to='/dining'>Dining</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contact'>Contact Us</Link>
       
        
    </nav>
    <div class="col-lg-2 col-md-6">

        <div class="book-now-btn text-right">
            <a target="_blank" href="https://www.nalahotel.com/">Book Now</a>
        </div>
    </div>

           
               </header>
        
        
    );
}

export default Navbar;