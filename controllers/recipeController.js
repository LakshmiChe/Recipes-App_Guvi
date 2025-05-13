const Recipe = require('../models/Recipe');

// Create a new recipe
exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).render('recipes', { recipes });
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).render('error', { message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!recipe) {
            return res.status(404).render('error', { message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (err) {
        res.status(400).render('error', { message: err.message });
    }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).render('error', { message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted' });
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};
