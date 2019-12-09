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
                    <Nav.Link href="/create">Add Your Own!</Nav.Link>
                </Nav>
                <Nav className = "navbar-right">
                    <Nav.Link href="/login">
                        <Button variant="outline-secondary">Login</Button>
                    </Nav.Link>
                    <Nav.Link href="/sign-up">
                        <Button variant="outline-dark">Sign-up</Button>
                    </Nav.Link>
                    <Nav.Link href="/search">
                        <Button variant="warning">Search</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Routes />
            </div>
    );}
}