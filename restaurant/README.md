# Getting Started with the MERN Restaurant App.

.
├── backend         # Node.js/Express server code
│   ├── controllers # Route controllers
│   ├── models      # Database models
│   ├── routes      # API routes
│   └── app.js      # Express application file
│
└── frontend        # React.js client code
    ├── public      # Static files
    └── src         # React components and other source files
        ├── components  # Restaurant
        ├──                 # AddRestaurant
        ├──                 # Home
        ├── App.js      # Root component
        └── index.js    # Entry point


<!-- Backend server instructions for setting up -->
The backend folder contains the Node.js server code, including route controllers, database models, API routes, and the main Express application file (app.js).
In the command line type npm init and enter.
Install dependencies
npm i nodemon. ( in the scripts, type "start": "nodemon app.js", )
npm i express, mongoose and cors.

Then type "npm start" to run the server 
acessed at localhost:5000.


<!-- connecting to the database -->
Go to chrome, mongodb then signup or signin.
create new project. 
build a database, create cluster.
Go to database access and get the password that will be used later.
Database deployment

In the app.js type this
(
    const express = require("express");
    const mongoose = require("mongoose");

    mongoose
  .connect(
    "mongodb+srv://gladyskyambadde0:FjpoPmUp6KAeWafM@cluster0.w2fyztq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
  ) then you have connected the backend to the database.


<!-- starting the frontend server -->
The frontend folder contains the React.js client code. The components folder holds reusable components.
Open up a folder in the same project directory(resturant),
run "npx create-react-app ."
when the app is installed, run it with"npm start".
also install the dependencies with "npm install"(axios).
start editing the App.js and also add folders.

<!-- dependencies used -->
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^7.2.2",
    "nodemon": "^2.0.22"
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.13.4",
    "axios": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-filebase64": "^1.0.2",
    "react-router-dom": "^6.12.0",
    "react-scripts": "5.0.1"

   <!--  insructions for installing the libralies --> 
   In the terminal, type "npm install react-router-dom" and then press enter.
   The same aplies to all the rest of the libralies.
   To comfirm if they are installed, check the package.json file.
