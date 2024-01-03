import React from 'react';
import './body.css';

const Body=()=>{
    return(
        <div>
        <div className="body-div">
            <img className="hotel" src = "https://data.1freewallpapers.com/download/white-hotel-room.jpg" alt="image"></img>


        </div>
        <div className='row'>
            <div className='column'>
               <img src = ".png" alt="hotel1"></img>
            </div>
            <div className='column'>
                <h2>WELCOME TO STAYZEN
THE HAVEN OF YOUR VACATION</h2>
                <p>StayZen is one among the most well-known hotels in Coimbatore. StayZen, the deluxe hotel in Coimbatore
                    was established during the year 1999. Be it professional meet or personal get-together, StayZen would be the first 
                    optimal choice that our customers would prefer for its one spot service for all their needs to parties and events.
                     Nala is well equipped to support indoor and outdoor catering for over 5000 guests for a single feast.</p>
            </div>
        </div>
        </div>
    )
}
export default Body;