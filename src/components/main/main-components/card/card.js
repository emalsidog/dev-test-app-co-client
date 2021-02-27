// Dependencies
import React from "react";

// Styles
import "./card.scss";

const Card = ({ image, header, description }) => {
  return (
    <div className="col-lg d-flex card-container">
      <div className="card-content my-auto mx-auto">
        <img src={image} alt="card" />
        <div className="card-text">
          <h4>{header}</h4>
          <span>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
