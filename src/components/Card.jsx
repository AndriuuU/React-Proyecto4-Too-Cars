import React from "react";
import "./card.css";

const Card = ({ title, image, onClick }) => {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;

