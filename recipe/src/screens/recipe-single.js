import React from 'react';
import macncheese from "./photos/Baked-Mac-n-Cheese.jpg"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


// This component might be unnecessary 
export default class RecipeSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
    }

    setRedirect = async () => {
        alert("in setRedirect")
        this.setState({redirect: true})
        console.log("test" + this.state.redirect)
        this.renderRedirect()
    }

    renderRedirect = () => {
        alert("entering renderRedirect")
        alert(this.state.redirect)
        if (this.state.redirect) {
            return <Redirect to="/all-recipes" />
        }
    }
    
    // handler for favoriting?


    render () {
        return (
            // <div>
            //     <h1>Singular recipe page</h1>
            //     
            // </div>);
            
            <Container >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class = "recipebox">
                    <Row className="align-items-center" >
                    <Col xs={4} md={8} style={style2}>
                        
                        <h1>Baked Mac n' Cheese
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" >
                            <ToggleButton  className="Fav-Btn" value={1}>
                            <FontAwesomeIcon className = "Fav-Star" icon={faStar}/></ToggleButton>
                            </ToggleButtonGroup>
                            <Button variant="dark" onClick={this.setRedirect}>Delete</Button>
                        </ButtonToolbar></h1>
                        <p> 
                        <h5>Author :<i> author</i></h5>
                        <h5>Time :<i> time</i></h5>
                        <h5>Servings :<i> servings</i></h5>
                        <br></br>
                        <h3>Ingredients :</h3>

                        <li>1/2 pound elbow pasta</li>
                        <li>3 tablespoons unsalted butter</li>
                        <li>3 tablespoons all-purpose flour</li>
                        <li>1 teaspoon paprika</li>
                        <li>1/2 teaspoon onion powder</li>
                        <li>2 (12-ounce) cans evaporated milk</li>
                        <li>12 ounces shredded extra-sharp cheddar cheese, about 3 cups, divided</li>
                        <li>1/4 cup freshly grated Parmesan</li>
                        <li>Kosher salt and freshly ground black pepper, to taste</li>
                        <li>2 tablespoons chopped fresh chives</li></p>

                        <p> <h3>Directions :</h3>
                        <li>Preheat oven to 400 degrees F.</li>
                        <li>In a large pot of boiling salted water, cook pasta according to package instructions; drain well.</li>
                        <li>Melt butter in a large skillet over medium high heat. Whisk in flour, paprika and onion powder until lightly browned, about 1 minute.</li>
                        <li>Gradually whisk in evaporated milk until slightly thickened, about 4-5 minutes.</li>
                        <li>Remove from heat. Stir in 2 cups cheddar cheese and Parmesan. Stir in pasta; season with salt and pepper, to taste.</li>
                        <li>Divide pasta mixture into 5 (10-ounce) or 6 (8-ounce) ramekins or ovenproof bowls.* Place onto a baking sheet; sprinkle with remaining 1 cup cheddar cheese.</li>
                        <li>Place into oven and bake until golden brown, about 20-25 minutes.</li>
                        <li>Serve immediately, garnished with chives, if desired.</li>

                        </p>
                    
                    </Col>
                    <Col xs={12} md={4}><div class="circular--portrait"><Image src= {macncheese} style={style1}/></div></Col>
                </Row></div>
            </Container>
            );
    }    
}
