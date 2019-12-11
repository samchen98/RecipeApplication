const mongoose = require('mongoose');
const bcrypt = require('../server.js').bcrypt
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name:{type:String},
    author:{type:String},
    time:{type:Number},
    servings:{type:Number},
    ingredients:{type:[String]},
    directions:{type:[String]},
    type:{type:String},
    //image:{ data: Buffer, contentType: String}
}, {
  timestamps: true,
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
