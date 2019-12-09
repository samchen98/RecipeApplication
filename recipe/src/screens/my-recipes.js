import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class MyRecipes extends React.Component {
    render () {
        return (
            <div>
                <h1>My Recipes page</h1>
                <>
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox" >
                    <ToggleButton  className="Fav-Btn" value={1}>
                    <FontAwesomeIcon className = "Fav-Star" icon={faStar}/></ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                </>
                
            </div>);
    }    
}

//<Navbar.Brand href="/home" style = {{color: "#fd7e14"}}><FontAwesomeIcon icon={faCarrot}/> APP-NAME</Navbar.Brand>