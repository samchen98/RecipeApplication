import React from 'react';
import Card from 'react-bootstrap/Card'
import macncheese from "./photos/Baked-Mac-n-Cheese.jpg"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import RecipeSingle from '../screens/recipe-single'
import RecipeTile from '../screens/recipe-tile'


import { Button, FormGroup, FormControl, TextInput } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css'

import axios from 'axios';
const config = require("../config")
export default class AllRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tags: [],
            recipes:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.testfunction = this.testfunction.bind(this);
       
      }
      handleChange(tags) {
        this.setState({tags});
      }
      newfunction = (recipe) => {

        var user = localStorage.getItem('loginemail');
    console.log(user)
    if(user == null){
        alert("You must be logged in to favorite recipes")
       
    }
    else{
        console.log(recipe._id)
        const newUser = {
            email: user,
            recipe: recipe
          };
          axios.post(config.serversite + '/users/favorite', newUser)
          .then(
              alert("Added to favorites!")
          );

    }
        console.log(recipe._id)
        console.log(recipe)
      }
      loggout(){
          localStorage.removeItem("loginemail")
      }

    
      testfunction() {
        console.log(this.state.tags);
    
        const newUser = {
            ingredients: this.state.tags
            };
            axios.post(config.serversite + '/recipe/getall', newUser)
            .then(res=> {
                console.log(res.data.message)
                this.setState({ recipes: res.data.message});
            });
    
        
      }
      componentDidMount() {
        this.testfunction();
      }

      
    
      render() {
          
        const recipes = this.state.recipes.map(
            recipe => (
              <Card style={{width: '18rem'}} key={recipe.name} style={{display: "inline-block"}}>
              {/* <Card.Img variant="top" src={macncheese} style={{'max-width': "80%", height: "auto"}}/> */}
              <Card.Header style={{'text-align': "right"}}>Author: {recipe.author}</Card.Header>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  Preparation time: {recipe.time}<br></br>
                  Servings: {recipe.servings}<br></br>
                  Type: {recipe.type}<br></br>
                  Ingredients: {recipe.ingredients}<br></br>
                  Instructions: {recipe.directions}<br></br>
                </Card.Text>
              <Button variant="primary" onClick={this.newfunction.bind(this,recipe)}>Add to favorites</Button>
              </Card.Body>
            </Card>
            
            // <div style={{ border: "1px solid black"}} key={recipe.name}>
            //   <h3>Name: {recipe.author}</h3>
            //   <p>Contact: {recipe.name}</p>
            //   <button onClick={
            //       this.newfunction.bind(this,recipe)}>
            //     Add to favorite
            // </button>
            
            // </div>
          ));
        return (
          <div>
            <br></br>
            <button onClick={
                  this.loggout}>
                logout
            </button>
            
          {/*     
            <TagsInput value={this.state.tags} onChange={this.handleChange} />
            <button onClick={this.testfunction}>
                hello
            </button>
          */}
          {/* <p>Data will be fetched after the button click.</p>
          <button onClick={this.getEmployees} >Get Employees</button> */}
          {recipes}
     
          </div>
        );
      }
    
}

