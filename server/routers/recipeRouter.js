const express = require("express")
const recipeRouter = express.Router()

const Recipe = require("../data/recipeModel")

recipeRouter.get("/", (req, res) => {
    Recipe.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({error: "Server error"})
    })
})

recipeRouter.get("/:recipeId", (req, res) => {
    const recipeId = req.params.recipeId

    if (isNaN(recipeId)) {
        return res.status(400).json({ error: "Invalid recipe id"})
    }

Recipe.getRecipe(recipeId)
    .then(recipe => {
        if(!recipe) {
            return res.status(404).json({ error: "The recipe id is not found"})
        }
        return res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({error: "Server error"})
    })
})

//How to make generic endpoint to check funcationality?
//Why don't I need to define shoppingList in apiRouter?
//This endpoint works BUT I don't need to specifically check if the recipeId is valid (ie, using the functino: getRecipe(recipeID)? The innerJoin via the funciton below seems to do this for me?)
//Need to throw 404 error if id DOES NOT exist -- check this
recipeRouter.get("/:recipeId/shoppingList", (req, res) => {
    const recipeId = req.params.recipeId
    
    if (isNaN(recipeId)) {
        return res.status(400).json({ error: "Invalid recipe id"})
    }
    
    Recipe.getShoppingList(recipeId)
    .then(ingredients => {
        return res.status(200).json(ingredients)
    })
    .catch(err => {
        return res.status(500).json({ error: "Server error"})
    })
})


//Check this endpoint
recipeRouter.get("/:recipeId/instructions", (req, res) => {
    const recipeId = req.params.recipeId

    if (isNaN(recipeId)) {
        return res.status(400).json({ error: "Invalid recipe id"})
    }
    
    Recipe.getInstructions(recipeId)
    .then(instruction => {
        if (!instruction) {
            return res.status(404).json({ error: "Invalid recipe id" })
        }
        return res.status(200).json(instruction)
    })
    .catch(err => {
        return res.status(500).json({ error: "Server error"})
    })
})

module.exports = recipeRouter

