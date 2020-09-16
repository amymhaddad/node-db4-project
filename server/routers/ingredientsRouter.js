const express = require("express")
const ingredientsRouter = express.Router()

const Ingredients = require("../data/ingredientsModel")

ingredientsRouter.get("/", (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        return res.status(200).json(ingredients)
    })
    .catch(err => {
        return res.status(500).json({ error: "server error"})
    })
})


//This works, but I want to check the return DS to ensure that I'm returning the info in the correct way
ingredientsRouter.get("/:recipeId/recipes", (req, res) => {
    const recipeId = req.params.recipeId

    Ingredients.getRecipesWithSingleIngredient(recipeId)
    .then(recipes => {
        return res.status(200).json(recipes)
    })
    .catch(err => {
        return res.status(500).json({ error: "server error"})
    })
})


module.exports = ingredientsRouter