const router = require('express').Router();
let Recipe = require('../models/recipe.model.js');

// Insert new recipe

router.route('/getrecipe').post((req, res) => {
  const { body } = req;
  let {
    ingredients,
  } = body;
 console.log(ingredients)
  Recipe.find({
    ingredients: { $all: ingredients }
  }, (err, questions) => {
   
    return res.send({
        message: questions
      });
});
});

  router.route('/create').post((req, res) => {  
    // User input
    const { body } = req;

    let {
      name,
      author,
      time,
      servings,
      ingredients,
      directions,
      image
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

    if (!image) {
      return res.send({
      success: false,
      message: 'Error: Your recipe must have an image.'
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
    aRecipe.image = image;
      
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

  await Movie.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }

    if (!movie) {
        return res
            .status(404)
            .json({ success: false, error: `Movie not found` })
    }
    return res.status(200).json({ success: true, data: movie })
}).catch(err => console.log(err))

});

// Delete recipe
router.route('/del').get((req, res) => {  
  Recipe.findOneAndDelete({_id: req.params.id}, (err, recipe) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Recipe not deleted.'
      });
    }
    return res.send({
      success: true,
      message: 'Recipe deleted!'
    });
  })
});


module.exports = router;