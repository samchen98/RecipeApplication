import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Routes from "./Routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default class Navigator extends React.Component {
    render() { 
        return (
            // activeStyle = {{color: "#fdcb14"}} not working for Nav.Link
            <div>
            <Navbar bg="light" variant="light" sticky="top">
                <Navbar.Brand href="/home" style = {{color: "#fd7e14"}}><FontAwesomeIcon icon={faCarrot}/> APP-NAME</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/my-recipes">My Recipes</Nav.Link>
                    <Nav.Link href="/resources">Resources</Nav.Link>
                </Nav>
                <Nav className = "navbar-right">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/sign-up">Sign-up</Nav.Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
            </Navbar>
            <Routes />
            </div>
    );}
}