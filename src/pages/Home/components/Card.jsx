import React from "react";
import "../styles/card.css";

const Card = ({ leftIcon, rightIcon, title, body }) => {
  return (
    <div className="card">
      <div className="iconRow">
        <img src={leftIcon} alt="Left Icon" className="icon-card" />
        <img src={rightIcon} alt="Right Icon" className="icon-card" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default Card;
