// Card.js
import React from 'react';
import './card.css';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt="card" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
