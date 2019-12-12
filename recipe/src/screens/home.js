import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import veggies from "./photos/veggies.jpg"

export default class Home extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = "./search";
        this.props.history.push(path);
      }

    render () {
        const style1 = {
            width: '75%',
            height: 'auto',
        }

        const style2 = {
            'text-align': "left",
        }

        return (
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row className="align-items-center">
                    <Col xs={6} md={4} style={style2}>
                        <h1>Healthy meals, one click away!</h1>
                        <p>Simply add the groceries you have and quickly get healthy recipes.</p>
                        <Button variant="warning"  onClick={this.routeChange}>Get Started</Button>
                    </Col>
                    <Col xs={12} md={8}><Image src= {veggies} style={style1}/></Col>
                </Row>
            </Container>
            );
    }
}