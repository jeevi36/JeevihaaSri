import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './home.css';

const Home=()=>{
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return(
        <div className="body-container">
      <Slider {...carouselSettings}>

        <div className="body-div">
            <img className="hotel" src = "https://www.nalahotel.com/img/slider/slider-img-2.jpg" alt="image1"/>
            
        </div>

        <div className="body-div">
          <img
            className="hotel" src="https://www.nalahotel.com/img/slider/slider-img-1.jpg" alt="image2"/>
        </div>

        <div className="body-div">
          <img
            className="hotel" src="https://www.nalahotel.com/img/slider/slider-img-3.jpg" alt="image3"/>
        </div>

        </Slider>

        <div className='row'>
            <div className='column'>
               <img src = "https://www.nalahotel.com/img/about/about2.png" alt="hotel"></img>
            </div>
            <div className='column'>
                <h2>WELCOME TO NALA HOTELS<br></br>
THE HAVEN OF YOUR VACATION</h2>
                <p>Nala Hotels is one among the most well-known hotels in Namakkal. Nala, the deluxe hotel in Namakkal
                    was established during the year 1999. Be it professional meet or personal get-together, Nala would be the first 
                    optimal choice that our customers would prefer for its one spot service for all their needs to parties and events.
                     Nala is well equipped to support indoor and outdoor catering for over 5000 guests for a single feast.</p>
            </div>
        </div>
        </div>
    )
}
export default Home;