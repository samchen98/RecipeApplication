import React from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
 
import 'react-tagsinput/react-tagsinput.css'

import axios from 'axios';
const config = require("../config")

export default class Search extends React.Component {
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


  testfunction() {
    console.log(this.state.tags);

    const newUser = {
        ingredients: this.state.tags
        };
        axios.post(config.serversite + '/recipe/getrecipe', newUser)
        .then(res=> {
            console.log(res.data.message)
            this.setState({ recipes: res.data.message});
        });

    
  }
  componentDidMount(){
    let ing = localStorage.getItem('ingredients') 
    if(ing!= null){
      var str = ing.replace(/\s/g, '');
      var words = str.split(',');
      console.log(ing)
      console.log(words)
  
      console.log(this.state.tags)
  
      this.setState({ tags: words});
      localStorage.removeItem("ingredients")
    }
   

    
   
    

  }

  render() {
    const recipes = this.state.recipes.map(recipe => (
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
      {/* <Button variant="primary" onClick={this.newfunction.bind(this.recipe)}>Add to favorites</Button> */}
      </Card.Body>
      </Card>
        // <div style={{ border: "1px solid black"}} key={recipe.name}>
        //   <h3>Name: {recipe.author}</h3>
        //   <p>Contact: {recipe.name}</p>
        
        // </div>
      ));
    return (
      <div>
      <br></br>

          <p class="font-weight-light text-center">Type in an ingredient and press enter. When you're done, click search!</p>

          <TagsInput value={this.state.tags} onChange={this.handleChange} 
          
          />
          <br></br>

          <Button style={{display: "block", "margin-left": "47.5%"}} variant="outline-danger" onClick={this.testfunction}>
            Search!
          </Button>

      
      {recipes}
      </div>
 
      
    );
  }
}

