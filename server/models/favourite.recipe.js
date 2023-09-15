const mongoose = require("mongoose");

const favouriteRecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  recipe: {
    type: Object,
  },
});

const favouriteRecipeModel = mongoose.model(
  "favouriteRecipe",
  favouriteRecipeSchema
);

module.exports = {
  favouriteRecipeModel,
};
