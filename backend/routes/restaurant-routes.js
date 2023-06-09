const express = require("express");
const router = express.Router();
const Restaurant = require("../model/Restaurant");
const restaurantsController = require("../controllers/restaurants-controller");

router.get("/", restaurantsController.getAllRestaurants);
router.post("/", restaurantsController.addRestaurant);
router.get("/:id", restaurantsController.getById);
router.put("/:id", restaurantsController.updateRestaurant);
router.delete("/:id", restaurantsController.deleteRestaurant);

module.exports = router;