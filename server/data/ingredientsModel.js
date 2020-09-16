db = require("./dbConfig")

module.exports = {
    getIngredients, 
    getRecipesWithSingleIngredient
}

function getIngredients() {
    return db("ingredients")
}

function getRecipesWithSingleIngredient(recipeId) {
    return db("ingredients")
    .select("recipes.name")
    .innerJoin("recipe_ingredients", "ingredients.id", "recipe_ingredients.ingredients_id")
    .innerJoin("recipes", "recipes.id", "recipe_ingredients.recipe_id")
    .where("ingredients.id", recipeId)
}
