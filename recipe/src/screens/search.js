import React from "react";
import { Button, FormGroup, FormControl, TextInput } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
 
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

  render() {
    const recipes = this.state.recipes.map(recipe => (
        <div style={{ border: "1px solid black"}} key={recipe.name}>
          <h3>Name: {recipe.author}</h3>
          <p>Contact: {recipe.name}</p>
        
        </div>
      ));
    return (
      <div>
        <h1>Search page</h1>

        

        <TagsInput value={this.state.tags} onChange={this.handleChange} />
        <button onClick={this.testfunction}>
            hello
        </button>

        {/* <p>Data will be fetched after the button click.</p>
      <button onClick={this.getEmployees} >Get Employees</button> */}
      {recipes}
 
      </div>
    );
  }
}

