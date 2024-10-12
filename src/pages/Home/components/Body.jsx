import React from "react";
import "../styles/body.css";
import Card from "./Card";
import cardData from "../utils/cardData";
import cross from "../../../assets/icons/cross.svg";

const Body = () => {
  return (
    <div className="body">
      <p>Most Popular Tools</p>
      <p>Explore the trending tools to create your copies fast</p>
      <div className="body-main">
        <p className="card-social">Social media</p>
        <p className="card-social2">Blog Writing</p>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              leftIcon={card.leftIcon}
              rightIcon={card.rightIcon}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
        <p className="card-social">Social media</p>
        <p className="card-social2">Social media</p>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              leftIcon={card.leftIcon}
              rightIcon={card.rightIcon}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
        <div className="article">
          <p>Article Writing</p>
          <img src={cross} alt="cross" className="cross-icon" />
        </div>
      </div>
    </div>
  );
};

export default Body;
