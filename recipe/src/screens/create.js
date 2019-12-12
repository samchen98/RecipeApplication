import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import apis from '../api/index'

export default class Create extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            author: '',
            time: '',
            servings: '',
            ingredients: '',
            directions: '',
            type: '',
            //image: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleChangeInputServings = async event => {
        const servings = event.target.value
        this.setState({ servings })
    }

    
    handleChangeInputIngred = async event => {
        const ingredients = event.target.value
        this.setState({ ingredients })
    }

    handleChangeInputDirect = async event => {
        const directions = event.target.value
        this.setState({ directions })
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    // handleChangeInputImage = async event => {
    //     const image = event.target.value
    //     this.setState({ image })
    // }

    handleIncludeRecipe = async () => {
        const { name, author, time, servings, ingredients, directions, type} = this.state;
        const userInput = { name, author, time, servings, ingredients, directions, type};

        await apis.insertRecipe(userInput).then(res => {
            //alert(`Recipe inserted successfully`)
            this.setState({
                name: '',
                author: '',
                time: '',
                servings: '',
                ingredients: '',
                directions: '',
                type: ''
                //image: ''
            })
        })

        

        // TO-DO: Make success modal
    }
    // TO-DO: Make placeholders more specific
    render () {
        const { name, author, time, servings, ingredients, directions, type} = this.state;
        return (
            <Container>
            <br></br>
            <br></br>
            <Form>
                    <Form.Group as={Row} controlId="formGridRecipeName">
                    <Form.Label column={2}>Recipe Name</Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="Enter recipe name" value = {name} onChange={this.handleChangeInputName}/></Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridAuthor">
                    <Form.Label column={2}>Author</Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="Enter your name" value = {author} onChange={this.handleChangeInputAuthor}/></Col>
                    </Form.Group>

{/* Change this to dynamically add input boxes */}
                    <Form.Group as={Row} controlId="formGridIngred">
                    <Form.Label column={2}>Ingredients</Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="Enter your ingredients"  value = {ingredients} onChange={this.handleChangeInputIngred}/></Col>
                    </Form.Group>

                    <Row>
                    <Col xs={6}>
                    <Form.Group as={Row} controlId="formGridTime">
                    <Form.Label column={2}>Prep Time</Form.Label>
                    <Col sm={8}><Form.Control type="text" placeholder="Enter recipe preparation time" value = {time} onChange={this.handleChangeInputTime}/></Col>
                    </Form.Group>
                    </Col>

                    <Col xs={6}>
                    <Form.Group as={Row} controlId="formGridServings">
                    <Form.Label column={2}>Servings</Form.Label>
                    <Col sm={8}><Form.Control type="text" placeholder="Enter expected servings" value = {servings} onChange={this.handleChangeInputServings}/></Col>
                    </Form.Group>
                    </Col>
                    </Row>

                    {/* <Form.Group as={Row} controlId="formGridRecipeImage">
                    <Form.Label column={2}>Recipe photo</Form.Label>
                    <Col sm={10}><Form.Control type="file" name="image" value = {image} onChange={this.handleChangeInputImage}/></Col>
                    </Form.Group> */}

                <Form.Group as={Row} controlId="formMealType">
                    <Form.Label column={2}>Type of meal</Form.Label>
                    <Col sm={10}><Form.Control as="select" onChange={this.handleChangeInputType}>
                    <option>Choose...</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    </Form.Control></Col>
                </Form.Group>
                    
                <Form.Group as={Row} controlId="formGridDirections">
                    <Form.Label column={2}>Directions</Form.Label>
                    <Col sm={10}><Form.Control as="textarea" style={{height: '200px'}} placeholder="1. Directions here...&#10;2. Directions here...&#10;3. Directions here..." value = {directions} onChange={this.handleChangeInputDirect}/></Col>
                </Form.Group>                


            <Button variant="outline-danger" type="submit" onClick={this.handleIncludeRecipe}>
                Submit
            </Button>
            </Form>
        </Container>
        );
    }
}