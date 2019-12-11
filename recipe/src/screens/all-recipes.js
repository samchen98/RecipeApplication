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


export default class AllRecipes extends React.Component {
    
    render () {
            const style1 = {
                width: '350px',
                height: '350px',
            }
    
            const style2 = {
                'text-align': "left",
                width: '750px',
            }
    
            const style3 = {
                width: '150px',
                height: '150px',
            }
            

        return (
            
            <Container>
                <br></br>
                <br></br>
                
                <h1>All Recipes</h1>
                <br></br>
                <br></br>
                <br></br>
                getAllRecipes
                <RecipeTile/>
                <RecipeTile/>
                <RecipeTile/>
                <RecipeTile/>
                <RecipeTile/>
                <RecipeTile/>
            </Container>

            
);
    }    
}