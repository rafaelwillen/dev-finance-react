import React from "react";

const Card = ({ title, value, isPrimaryColor, icon }) => {
  return (
    <div className={isPrimaryColor ? "card primary-bg" : "card"}>
      <div className="headline">
        <p>{title}</p>
        <img src={icon} alt="icon" />
      </div>
      <p>{value}</p>
    </div>
  );
};

Card.defaultProps = {
  title: "lorem",
  value: "0.00 Kzs",
  isPrimaryColor: false,
};

export default Card;
