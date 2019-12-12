import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button, FormGroup, FormControl, TextInput } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

import axios from 'axios';
const config = require("../config")


export default class MyRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipelist:[],
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
        this.setState({loggedIn: user});

        console.log(user)
        if(user == null){
            // alert("You must be logged in to view your recipes")
        }
        else{
            this.testfunction();
        }
       
      }



      render() {
        //const loggedin = this.state.loggedIn;
        const message = () => {
          if (localStorage.getItem('loginemail') == null) {
            return (<div style={{"text-align": "center"}}><br></br><h1>Please login to favorite recipes.</h1></div>);
          } else {
            return (<div></div>);
          }
        }

        const recipes = this.state.recipelist.map(recipe => (
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
            {/* {<h1>My Recipes</h1>} */}
            {message()}
            
    
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