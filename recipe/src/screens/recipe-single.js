import React from 'react';
import macncheese from "./photos/Baked-Mac-n-Cheese.jpg"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// This component might be unnecessary 
export default class RecipeSingle extends React.Component {
    render () {
        const style1 = {
            width: '350px',
            height: '350px',
        }

        const style2 = {
            'text-align': "left",
        }
        return (
            // <div>
            //     <h1>Singular recipe page</h1>
            //     
            // </div>);
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row className="align-items-center">
                    <Col xs={6} md={4} style={style2}>
                        <h1>Baked Mac n' Cheese</h1>
                        <p> INGREDIENTS:

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
                    </Col>
                    <Col xs={12} md={8}><div class="circular--portrait"><Image src= {macncheese} style={style1}/></div></Col>
                </Row>
            </Container>
            );
    }    
}
