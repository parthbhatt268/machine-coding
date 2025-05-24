import React from "react";

const RestaurantCard = ({ resData }) => {
  const { resName, cuisine } = resData;

  return (
    <div className="restaurant-card">
      <h2>{resName}</h2>
      <p>{cuisine}</p>
    </div>
  );
};

export default RestaurantCard;
