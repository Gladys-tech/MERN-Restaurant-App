const Restaurant = require("../model/Restaurant");

const getAllRestaurants = async (req, res, next) => {
  let restaurants;
  try {
    restaurants = await Restaurant.find();
  } catch (err) {
    console.log(err);
  }

  if (!restaurants) {
    return res.status(404).json({ message: "No restaurant found" });
  }
  return res.status(200).json({ restaurants });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let restaurant;
  try {
    restaurant = await Restaurant.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!restaurant) {
    return res.status(404).json({ message: "No restaurant found" });
  }
  return res.status(200).json({ restaurant });
};

const addRestaurant = async (req, res, next) => {
  const { name,location, description, available, image } = req.body;
  let restaurant;
  try {
    restaurant = new Restaurant({
      name,
      location,
      description,
      available,
      image,
    });
    await restaurant.save();
  } catch (err) {
    console.log(err);
  }

  if (!restaurant) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({restaurant });
};

const updateRestaurant = async (req, res, next) => {
  const id = req.params.id;
  const { name,location, description, available, image } = req.body;
  let restaurant;
  try {
    restaurant = await Restaurant.findByIdAndUpdate(id, {
      name,
      location,
      description,
      available,
      image,
    });
    restaurant = await restaurant.save();
  } catch (err) {
    console.log(err);
  }
  if (!restaurant) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({restaurant });
};

const deleteRestaurant = async (req, res, next) => {
  const id = req.params.id;
  let restaurant;
  try {
    restaurant = await Restaurant.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!restaurant) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Restaurant Successfully Deleted" });
};

exports.getAllRestaurants = getAllRestaurants;
exports.addRestaurant = addRestaurant;
exports.getById = getById;
exports.updateRestaurant = updateRestaurant;
exports.deleteRestaurant = deleteRestaurant;