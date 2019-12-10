import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default class Create extends React.Component {
    render () {
        return (
            <Container>
            <br></br>
            <br></br>
            <Form>
                    <Form.Group as={Row} controlId="formGridRecipeName">
                    <Form.Label column={2}>Recipe Name</Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="Enter recipe name" /></Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridAuthor">
                    <Form.Label column={2}>Author</Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="Enter your name" /></Col>
                    </Form.Group>

                    <Row>
                    <Col xs={6}>
                    <Form.Group as={Row} controlId="formGridTime">
                    <Form.Label column={2}>Prep Time</Form.Label>
                    <Col sm={8}><Form.Control type="text" placeholder="Enter recipe preparation time" /></Col>
                    </Form.Group>
                    </Col>
                    <Col xs={6}>
                    <Form.Group as={Row} controlId="formGridServings">
                    <Form.Label column={2}>Servings</Form.Label>
                    <Col sm={8}><Form.Control type="text" placeholder="Enter expected servings" /></Col>
                    </Form.Group>
                    </Col>
                    </Row>
                    

                <Form.Group as={Row} controlId="formGridDirections">
                    <Form.Label column={2}>Directions</Form.Label>
                    <Col sm={10}><Form.Control as="textarea" style={{height: '200px'}} placeholder="1. Directions here...&#10;2. Directions here...&#10;3. Directions here..."/></Col>
                </Form.Group>                


            <Button variant="outline-danger" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
        );
    }
}