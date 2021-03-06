const router = require('express').Router();
let Recipe = require('../models/recipe.model.js');


//Get recipe by Ingredient????

// router.route('/saveimage').post(upload.single('file'), function(req, res) {
//     var new_img = new Img;
//     new_img.img.data = fs.readFileSync(req.file.path)
//     new_img.img.contentType = 'image/jpeg';
//     new_img.save();
//     res.json({ message: 'New image added to the db!' });
// })

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

//get all 
router.route('/getall').post((req, res) => {

  Recipe.find({
  }, (err, questions) => {
   
    return res.send({
        message: questions
      });
});
});

// Insert new recipe
  router.route('/create').post((req, res) => {  
    const { body } = req

    let {
      name,
      author,
      time,
      servings,
      ingredients,
      directions,
      type
      // image
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

    if (!type) {
      return res.send({
      success: false,
      message: 'Error: Your recipe must have a meal type.'
      });
  }

  //   if (!image) {
  //     return res.send({
  //     success: false,
  //     message: 'Error: Your recipe must have an image.'
  //     });
  // }
  
    // Save the new recipe
    const aRecipe = new Recipe();
    aRecipe.name = name;
    aRecipe.author = author;
    aRecipe.time = time;
    aRecipe.servings = servings;
    aRecipe.ingredients = ingredients;
    aRecipe.directions = directions;
    aRecipe.type = type;
    // aRecipe.image = image;
      
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
 console.log(ingredients)
  Recipe.find({}, (err, questions) => {
    if(!recipe.length){
    return res.send({
        message: questions
      });
    }
});

});



// Retrieve by ID
router.route('/byID').get((req, res) => {  
  Recipe.findOne({_id: req.params.id}, (err, recipe) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Recipe not found.'
      });
    }
    return res.send({
      success: true,
      data: recipe
    });
  })

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
