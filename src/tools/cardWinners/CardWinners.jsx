import React from "react";
import "./cardWinners.css";
import { BsLinkedin } from "react-icons/bs";

const CardWinners = ({ image, name, linkedInLink }) => {
  return (
    <div className="CardWinners">
      <img src={image} alt="image of winner" />
      <p>{name}</p>
      <a href={linkedInLink} target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default CardWinners;