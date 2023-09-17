const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { favouriteRecipeModel } = require("../models/favourite.recipe");
const axios = require("axios");

const favouriteRecipeRouter = express.Router();

// Create a route to save a favorite recipe
favouriteRecipeRouter.post("/", auth, async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.body; // client sends the 'id' of the recipe

    if (!id) {
      return res.status(400).send({ error: "Recipe 'id' is required" });
    }

    // Fetch recipe data from Spoonacular using the 'id'
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    );

    const recipe = response.data; // contains recipe data

    if (!recipe || !recipe.id) {
      return res
        .status(400)
        .send({ error: "Invalid recipe data from Spoonacular" });
    }

    // Check if the recipe is already saved as a favorite by the user
    const existingFavorite = await favouriteRecipeModel.findOne({
      user: user._id,
      "recipe.id": recipe.id,
    });

    if (existingFavorite) {
      return res
        .status(409)
        .send({ error: "Recipe is already saved as a favorite" });
    }

    // Create a new favorite recipe document
    const newFavorite = new favouriteRecipeModel({
      user: user._id,
      recipe,
    });

    await newFavorite.save();

    res.status(201).send({ message: "Favorite recipe saved successfully" });
  } catch (error) {
    console.error("Error saving favorite recipe:", error);
    res
      .status(500, 409)
      .send({ error: "Error occurred while saving the favorite recipe" });
  }
});

// Get Favroites
favouriteRecipeRouter.get("/", auth, async (req, res) => {
  try {
    const favorites = await favouriteRecipeModel
      .find()
      .populate("user", "name");

    res.status(200).send(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  favouriteRecipeRouter,
};
