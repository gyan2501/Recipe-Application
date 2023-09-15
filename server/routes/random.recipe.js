const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const recipeRouter = express.Router();

// Define a route to fetch random recipes
recipeRouter.get("/random-recipes", async (req, res) => {
  try {
    // Make a GET request to the Spoonacular API
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=20`
    );

    // Extract the recipe data from the response
    const recipes = response.data.recipes;

    // Send the recipes to the client
    res.send(recipes);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching random recipes:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching random recipes" });
  }
});



module.exports = {
  recipeRouter,
};


