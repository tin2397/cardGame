import React from "react";
import "../styles/Card.css";

const Card = ({ id, name, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
