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

export default class RecipeTile extends React.Component {
    
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

<div class="column">
                <div class = "sm-recipebox">
                <br></br>
                    <Row className="align-items-center" >
                        <br></br>
                        <h3><center><a href="recipe-single">Baked Mac n' Cheese</a></center></h3>
                    <Col xs={4} md={8} style={style2}>
                        
                        
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" >
                            <ToggleButton  className="sm-Fav-Btn" value={1}>
                            <FontAwesomeIcon className = "sm-Fav-Star" icon={faStar}/></ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        
                        <p> 
                        <h6>Author :<i> author</i></h6>
                        <h6>Time :<i> time</i></h6>
                        <h6>Servings :<i> servings</i></h6>
                        <h6>Ingredients :<i> #</i></h6>
                        
                        
                        </p>
                        
                    </Col>
                    <Col xs={12} md={4}><div class="sm-circular--portrait"><Image src= {macncheese} style={style3}/></div></Col>
                </Row>
                </div><br></br></div>
                </Container>
            
);
    }    
}