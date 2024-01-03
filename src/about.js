import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
        <br></br>
      <h2>About Us</h2><br></br>
      <p>
        Welcome to our Hotel Management System! Our team is dedicated to providing an efficient
        and user-friendly solution for managing various aspects of hotel operations.
      </p><br></br>
      <p>
        If you have any questions or feedback, feel free to reach out to us at{' '}
        <a href="mailto:info@example.com">info@example.com</a>.
      </p><br></br>
      <p>
        Thank you for choosing our system to streamline your hotel management processes.
      </p><br></br>
    </div>
  );
};

export default AboutUs;