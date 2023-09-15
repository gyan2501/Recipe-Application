const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { favouriteRecipeModel } = require("../models/favourite.recipe");


const favouriteRecipeRouter = express.Router();

// Create a route to save a favorite recipe
favouriteRecipeRouter.post("/", auth, async (req, res) => {
 
});

module.exports = {
  favouriteRecipeRouter,
};
