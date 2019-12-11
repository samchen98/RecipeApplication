import React, { useState, useEffect} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import apis from '../api/index'
import RecipeTile from '../screens/recipe-tile'
const config = require("../config")

export default class MyRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }

    fetchItems = async () => {

        //const data = await apis.getAllRecipes().then(res => {console.log(res.data)});
        // console.log("printing data?")
        const data = await apis.getAllRecipes();
        // console.log(data["data"]["data"])
        //alert(data["data"]["data"].length)
        this.setState({recipes: data["data"]["data"]});
    }

    
    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 1; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < this.state.recipes.length; j++) {
            //console.log(this.state.recipes[i].name);
            children.push(<RecipeTile name={this.state.recipes[i].name} author={this.state.recipes[i].author} time={this.state.recipes[i].time} servings={this.state.recipes[i].servings} ingredients={this.state.recipes[i].ingredients}/>)
          }
          //Create the parent and add the children
          table.push(<div>{children}</div>)
        }
        return table
      }

    render () {
       this.fetchItems();

        return (
            <div>
                <br></br><br></br>

                <h1>My Recipes</h1>
            
                {this.createTable()}
             

                {/* <>
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" >
                    <ToggleButton  className="Fav-Btn" value={1}>
                    <FontAwesomeIcon className = "Fav-Star" icon={faStar}/></ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                </> */}
                
            </div>);
    }    
}



//<Navbar.Brand href="/home" style = {{color: "#fd7e14"}}><FontAwesomeIcon icon={faCarrot}/> APP-NAME</Navbar.Brand>