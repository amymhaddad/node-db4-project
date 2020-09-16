const express = require("express")
const router = express.Router()

const recipeRouter = require("./recipeRouter")
const ingredientsRouter = require("./ingredientsRouter")

router.use("/recipes", recipeRouter)
router.use("/ingredients", ingredientsRouter)

module.exports = router;
