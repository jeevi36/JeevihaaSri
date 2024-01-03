import React from "react";
import './contact.css';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoIosBusiness } from "react-icons/io";
import { TiBusinessCard } from "react-icons/ti";

function Contact()
{
    return(
        <div>
             <div className="container">
            <img src="https://gdcindia.co.in/wp-content/uploads/2019/03/contact-us-background.jpg" alt="bg2"></img><br></br>
            <div className="center">
                <h1>Contact Us</h1>
            </div>
           </div>
           <div>
            <center>
            <h1>Get in touch with us for business</h1>
            <br></br>
            <p>Please call, email or visit us at the details given at the bottom. 
                Alternatively, you may fill out the form below and we will get back to you.</p>
                <br></br><br></br>

            <h3>Leave us your details below and we’ll get in touch with you</h3>
            <br>
            </br>
            <form className="conform">
                <MdDriveFileRenameOutline />
                <label>Name</label> <br></br>
                <input type="text"></input>
                <br></br><br></br>
                <IoMdContact />
                <label>Contact Number</label> 
                <input type="text"></input>
                <br></br><br></br>
                <IoIosBusiness />
                <label>Business Name</label> 
                <input type="text"></input>
                <br></br><br></br>
                <TiBusinessCard />&nbsp;
                <label>Business Type</label> 
                <input type="text"></input>
                <br>
                </br>
                <br></br>
                <button>Book Now</button>
            </form>

                </center>
           </div>

        </div>
    )
}
export default Contact;