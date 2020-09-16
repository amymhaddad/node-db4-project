
db = require("./dbConfig")

module.exports = {
    getRecipes,
    getShoppingList, 
    getInstructions, 
    getRecipe
}

function getRecipes() {
    return db("recipes")
}

function getRecipe(recipe_id) {
    return db("recipes")
    .where("id", recipe_id).first()
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients")
    .innerJoin("ingredients", "recipe_ingredients.ingredients_id", "ingredients.id")
    .select("recipe_ingredients.quantity", "ingredients.name")
    .where("recipe_id", recipe_id)
}

function getInstructions(recipe_id) {
    return db("recipes")
    .innerJoin("instructions", "recipes.id", "instructions.recipe_id")
    .select("instructions.description")
    .where("recipe_id", recipe_id)
} 
