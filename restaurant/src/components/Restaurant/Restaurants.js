import React, { useEffect, useState } from "react";
import "./Restaurant.css";
import axios from "axios";
import Restaurant from "./Restaurant";
const URL = "http://localhost:5000/restaurants";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRestaurants(data.restaurants));
  }, []);
  console.log(restaurants);
  return (
    <div>
      <h2 style={{margin: '0px',textAlign: 'center', color:"#8D4004"}}>ALL RESTAURANTS</h2>
      <ul>
        {restaurants &&
          restaurants.map((restaurant, i) => (
            <li key={i} style={{marginBottom: "100px"}}>
              <Restaurant restaurant={restaurant} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Restaurants;