const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/restaurant-routes");
const cors = require("cors");
const app = express();


// Middlewares
app.use(express.json({extended: false}));
app.use(cors({origin: true, credentials: true}));
app.use("/restaurants", router); // localhost:5000/restaurants

mongoose
  .connect(
    "mongodb+srv://gladyskyambadde0:FjpoPmUp6KAeWafM@cluster0.w2fyztq.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://gladyskyambadde0:FjpoPmUp6KAeWafM@cluster0.w2fyztq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));