const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

