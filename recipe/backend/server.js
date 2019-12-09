const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;
const bcrypt = require('bcryptjs');
const saltRounds = 10;


module.exports.bcrypt = bcrypt;

app.use(cors());
app.use(bodyParser.json());

const dbRoute = "mongodb+srv://sam:730097292@cluster0-54jrj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbRoute, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const recipeRouter = require('./routes/recipe');


app.use('/users', usersRouter);
app.use('/recipe', recipeRouter);

app.listen(process.env.PORT || 5000)

