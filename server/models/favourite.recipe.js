const mongoose = require("mongoose");

const favouriteRecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipeSchema",
  },
});

const favouriteRecipeModel = mongoose.model("favouriteRecipe", userSchema);

module.exports = {
  favouriteRecipeModel,
};
