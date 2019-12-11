import React from 'react';
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
        const recipes = this.state.recipes.map(recipe => (
            <div style={{ border: "1px solid black"}} key={recipe.name}>
              <h3>Name: {recipe.author}</h3>
              <p>Contact: {recipe.name}</p>
            
            </div>
          ));
        return (
          <div>
            <h1>All</h1>
    
            
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
    
//     render () {
//             const style1 = {
//                 width: '350px',
//                 height: '350px',
//             }
    
//             const style2 = {
//                 'text-align': "left",
//                 width: '750px',
//             }
    
//             const style3 = {
//                 width: '150px',
//                 height: '150px',
//             }
            

//         return (
            
//             <Container>
//                 <br></br>
//                 <br></br>
                
//                 <h1>All Recipes</h1>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 getAllRecipes
//                 <RecipeTile/>
//                 <RecipeTile/>
//                 <RecipeTile/>
//                 <RecipeTile/>
//                 <RecipeTile/>
//                 <RecipeTile/>
//             </Container>

            
// );
//     }    
}