import React from "react";
import RestaurantCard from "./RestaurantCard";

// sample data
const resList = [
  { id: 1, resName: "Meghana Foods", cuisine: "Biryani, North Indian" },
  { id: 2, resName: "KFC", cuisine: "Chicken, Fast Food" },
  { id: 3, resName: "McDonald's", cuisine: "Burgers, Fast Food" },
  { id: 4, resName: "Domino's", cuisine: "Pizza, Italian" }
];

const Body = () => {
  return (
    <div className="body">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
