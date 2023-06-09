import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddRestaurant from "./components/AddRestaurant";
import Restaurants from "./components/Restaurant/Restaurants";
import About from "./components/About";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddRestaurant />} exact />
          <Route path="/restaurants" element={<Restaurants />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
