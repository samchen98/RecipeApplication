import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Button, FormGroup, FormControl, TextInput } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css'

import axios from 'axios';
const config = require("../config")


export default class MyRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipelist:[]
        }
    
    
        this.handleChange = this.handleChange.bind(this);
        this.testfunction = this.testfunction.bind(this);
       
      }
      handleChange(tags) {
        this.setState({tags});
      }
    
    
      testfunction() {
        var user = localStorage.getItem('loginemail');
        console.log(user)
    
        const newUser = {
            email: user
            };
            axios.post(config.serversite + '/users/getlist', newUser)
            .then(res=> {
                console.log(res.data.message.recipelist)

                this.setState({ recipelist: res.data.message.recipelist});
            });
    
        
      }
    

      componentDidMount() {

        var user = localStorage.getItem('loginemail');
        console.log(user)
        if(user == null){
            alert("You must be logged in to view your recipes")
           
        }
        else{
            this.testfunction();
        }
       
      }



      render() {
        const recipes = this.state.recipelist.map(recipe => (
            <div style={{ border: "1px solid black"}} key={recipe.name}>
              <h3>Name: {recipe.author}</h3>
              <p>Contact: {recipe.name}</p>
            
            </div>
          ));
        return (
          <div>
            <h1>My Recipes</h1>
    
            
    
            {/* <TagsInput value={this.state.tags} onChange={this.handleChange} />
            <button onClick={this.testfunction}>
                hello
            </button> */}
    
            {/* <p>Data will be fetched after the button click.</p>
          <button onClick={this.getEmployees} >Get Employees</button> */}
    
          {recipes}
          </div>
        );
      }   
}



//<Navbar.Brand href="/home" style = {{color: "#fd7e14"}}><FontAwesomeIcon icon={faCarrot}/> APP-NAME</Navbar.Brand>