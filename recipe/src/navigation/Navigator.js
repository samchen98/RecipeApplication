import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Routes from "./Routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'


export default class Navigator extends React.Component {
    constructor() {
        super();
        this.handlerL = this.handlerL.bind(this);
        this.state = {
            isLoggedIn: (localStorage.getItem('loginemail') != null),
        }
    }

    handlerL = () => {
        if(localStorage.getItem('loginemail') != null) {
            localStorage.removeItem("loginemail")
            this.setState({ isLoggedIn: (localStorage.getItem('loginemail') != null)});
        } else {
            this.setState({ isLoggedIn: (localStorage.getItem('loginemail') != null)});
        }
    }

    render() { 
        return (
            <div>
            <Navbar bg="light"  variant="light" sticky="top">
                <Navbar.Brand href="/home" style = {{color: "#fd7e14"}}><FontAwesomeIcon icon={faCarrot}/> UNC EATS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/all-recipes">All Recipes</Nav.Link>
                    <Nav.Link href="/my-recipes">My Recipes</Nav.Link>
                    <Nav.Link href="/resources">Resources</Nav.Link>
                    <Nav.Link href="/create">Add Your Own!</Nav.Link>       
                </Nav>
                <Nav className = "navbar-right">
                    <Nav.Link href="/login">
                        <Button variant="outline-secondary" onClick={this.handlerL}>
                            {this.state.isLoggedIn? 'Logout' : 'Login'}
                        </Button>
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