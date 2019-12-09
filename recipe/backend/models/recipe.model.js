const mongoose = require('mongoose');
const bcrypt = require('../server.js').bcrypt
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name:{type:String},
    
}, {
  timestamps: true,
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;