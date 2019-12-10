const router = require('express').Router();
let Recipe = require('../models/recipe.model.js');

// Insert new recipe
  router.route('/create').post((req, res) => {  
    // User input
    const { body } = req;

    let {
      name,
      author,
      time,
      servings,
      ingredients,
      directions
    } = body;
        
    // Check to see that all required inputs are given
    if (!name) {
      return res.send({
        success: false,
        message: 'Error: Your recipe must have a name.'
      });
    }

    // NEED TO CHANGE THIS TO DETECT LOGGED IN USERS!
    if (!author) {
        return res.send({
          success: false,
          message: 'Error: Your recipe must have an author.'
        });
      }

    if (!time) {
      return res.send({
        success: false,
        message: 'Error: Your recipe must have an estimated preparation time.'
      });
    }

    if (!servings) {
        return res.send({
          success: false,
          message: 'Error: Your recipe must have an estimated number of servings.'
        });
    }

    if (!ingredients) {
        return res.send({
          success: false,
          message: 'Error: Your recipe must have a list of ingredients.'
        });
    }

    if (!directions) {
        return res.send({
        success: false,
        message: 'Error: Your recipe must have directions.'
        });
    }
  
    // Save the new recipe
    const aRecipe = new Recipe();
    aRecipe.name = name;
    aRecipe.author = author;
    aRecipe.time = time;
    aRecipe.servings = servings;
    aRecipe.ingredients = ingredients;
    aRecipe.directions = directions;
      
    aRecipe.save((err, recipe) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Recipe not created.'
        });
      }
      return res.send({
        success: true,
        id: aRecipe._id,
        message: 'Recipe created!'
      });
    });

});

// Retrieve all recipes
router.route('/retrieveAll').get((req, res) => {  

});

// Retrieve by ID
router.route('/byID').get((req, res) => {  

});

// Delete recipe
router.route('/del').get((req, res) => {  

});


module.exports = router;